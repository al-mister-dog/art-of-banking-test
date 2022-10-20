import {
  creditData,
  CreditData,
  BankData,
  loanRecords,
} from "../structures/objects";
import { Bank, CreditAccount } from "../structures/types";

export const CreditAccounts = {
  getData() {
    return creditData;
  },

  create(
    subordinate: Bank,
    superior: Bank,
    balance = 0,
    instrument: string,
    interest?: number,
    interestRate?: number,
    principal?: number
  ) {
    let newAccount: CreditAccount = {
      id: creditData.id,
      subordinateId: subordinate.id,
      superiorId: superior.id,
      balance,
      instrument,
      interest,
      interestRate,
      principal: balance,
    };
    
    if (instrument === "Dues") {
      newAccount = { ...newAccount, netted: false };
    }
    const newCreditData = JSON.parse(JSON.stringify(creditData));
    newCreditData.accounts[newCreditData.id] = newAccount;
    newCreditData.id++;
    newCreditData.allIds.push(newAccount.id);
    CreditData.assign(newCreditData);
    BankData.assignCreditIds(subordinate, superior, newAccount.id);
    if (instrument === "Loans" || instrument === "Fed Funds") {
      loanRecords.push(newAccount);
    }
  },
  get() {
    return creditData.accounts;
  },
  getAll(bank: Bank) {
    const accounts: CreditAccount[] = bank.creditIds.map(
      (creditAccountId) => creditData.accounts[creditAccountId]
    );
    return accounts;
  },

  getAllSubordinateAccounts(bank: Bank) {
    const subAccounts: CreditAccount[] = mapFilter(
      bank,
      (creditAccount) => creditAccount.subordinateId === bank.id
    );
    return subAccounts;
  },

  getAllSuperiorAccounts(bank: Bank) {
    const supAccounts: CreditAccount[] = mapFilter(
      bank,
      (creditAccount) => creditAccount.superiorId === bank.id
    );
    return supAccounts;
  },

  increaseCorrespondingCredit(account: CreditAccount, amount: number) {
    let newCreditAccount = { ...account };

    if (newCreditAccount.balance === 0) {
      newCreditAccount = { ...newCreditAccount, netted: false };
    }
    newCreditAccount.balance += amount;

    let creditAccounts = { ...creditData.accounts };
    creditAccounts = { ...creditAccounts, [account.id]: newCreditAccount };
    CreditData.assignAccounts(creditAccounts);
  },

  decreaseCorrespondingCredit(account: CreditAccount, amount: number) {
    const newCreditAccount = { ...account };
    newCreditAccount.balance -= amount;

    if (
      newCreditAccount.balance <= 0 &&
      newCreditAccount.instrument === "Loans"
    ) {
      let creditAccounts = { ...creditData.accounts };
      let invalidatedAccount = {
        ...creditAccounts,
        [account.id]: {},
      };
      creditAccounts = { ...creditAccounts, [account.id]: invalidatedAccount };
      CreditData.assignAccounts(creditAccounts);
    } else {
      let creditAccounts = { ...creditData.accounts };
      creditAccounts = { ...creditAccounts, [account.id]: newCreditAccount };
      CreditData.assignAccounts(creditAccounts);
    }
  },

  set(account: CreditAccount, amount: number) {
    let newCreditAccount = { ...account };
    newCreditAccount.balance = amount;
    let creditAccounts = creditData.accounts;
    creditAccounts = { ...creditAccounts, [account.id]: newCreditAccount };
    CreditData.assignAccounts(creditAccounts);
  },
};

function mapFilter(party: Bank, cb: (account: CreditAccount) => boolean) {
  return party.creditIds
    .map((id) => creditData.accounts[id])
    .filter((account) => cb(account));
}
