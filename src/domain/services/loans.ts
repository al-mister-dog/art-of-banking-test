import { creditData } from "../structures/objects";
import { Bank, CreditAccount } from "../structures/types";
import { CreditAccounts } from "./credit-accounts";

export const Loans = {
  create(
    subordinate: Bank,
    superior: Bank,
    amount: number,
    type: string,
    interest?: number,
    interestRate?: number
  ) {
    CreditAccounts.create(
      subordinate,
      superior,
      amount,
      "Loans",
      interest,
      interestRate
    );
  },

  createMortgage(subordinate: Bank, superior: Bank, amount: number) {
    CreditAccounts.create(subordinate, superior, amount, "Mortgage");
  },

  createFedFunds(
    subordinate: Bank,
    superior: Bank,
    amount: number,
    interest: number,
    interestRate: number
  ) {
    CreditAccounts.create(
      subordinate,
      superior,
      amount,
      "Fed Funds",
      interest,
      interestRate
    );
  },

  getAll(bank: Bank) {
    const accounts: CreditAccount[] = bank.creditIds
      .map((creditAccountId) => creditData.accounts[creditAccountId])
      .filter((account) => account.instrument === "Loans");
    return accounts;
  },

  getAllSubordinates(bank: Bank) {
    const subAccounts: CreditAccount[] = mapFilter(
      bank,
      (creditAccount) => creditAccount.subordinateId === bank.id
    );
    return subAccounts;
  },

  getAllSuperiors(bank: Bank) {
    const supAccounts: CreditAccount[] = mapFilter(
      bank,
      (creditAccount) => creditAccount.superiorId === bank.id
    );
    return supAccounts;
  },

  get(bank1: Bank, bank2: Bank) {
    return mapFilter(
      bank1,
      (account) =>
        account.subordinateId === bank1.id &&
        account.superiorId === bank2.id &&
        account.instrument === "Loans" &&
        account.balance > 0
    )[0];
  },

  getById(id1: number, id2: number) {
    return Object.keys(creditData.accounts)
      .map((id) => creditData.accounts[id])
      .filter((account) => {
        account.subordinateId === id1 &&
          account.superiorId === id2 &&
          account.instrument === "Loans";
      });
  },

  increase(bank1: Bank, bank2: Bank, amount: number, type: string) {
    let account = Loans.get(bank1, bank2);
    if (account) {
      CreditAccounts.increaseCorrespondingCredit(account, amount);
    } else {
      Loans.create(bank1, bank2, amount, type);
    }
  },

  decrease(bank1: Bank, bank2: Bank, amount: number, type: string) {
    let account = Loans.get(bank1, bank2);
    if (account) {
      CreditAccounts.decreaseCorrespondingCredit(account, amount);
    } else {
      Loans.create(bank1, bank2, amount, type);
    }
  },
};

function mapFilter(party: Bank, cb: (account: CreditAccount) => boolean) {
  return party.creditIds
    .map((id) => creditData.accounts[id])
    .filter((account) => cb(account) && account.instrument === "Loans");
}
