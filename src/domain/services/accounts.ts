import { mapObject } from "../helpers";
import { accountData, AccountData, BankData } from "../structures/objects";
import { Bank, Account } from "../structures/types";

export const Accounts = {
  create(
    subordinate: Bank,
    superior: Bank,
    type: string,
    balance: number = 0
  ) {
    const newAccount = {
      id: accountData.id,
      subordinateId: subordinate.id,
      superiorId: superior.id,
      type,
      instrument: type,
      balance,
      category: type,
    };
    console.log(newAccount)
    let newAccountData = JSON.parse(JSON.stringify(accountData));
    newAccountData.accounts[newAccountData.id] = { ...newAccount };
    newAccountData.id++;
    newAccountData.allIds.push(newAccount.id);
    AccountData.assign(newAccountData);
    BankData.assignAccountIds(subordinate, superior, newAccount.id);
  },
  get() {
    return mapObject(accountData.accounts);
  },
  getAllAccounts(bank: Bank) {
    const accounts: Account[] = bank.accountIds.map(
      (accountId) => accountData.accounts[accountId]
    );
    return accounts;
  },

  getFirstSubordinateAccount(bank: Bank) {
    const subordinateAccounts: Account[] = mapFilter(
      bank,
      (account) => account.subordinateId === bank.id
    );
    return subordinateAccounts[0];
  },
  getAllSubordinateAccounts(bank: Bank) {
    const subordinateAccounts: Account[] = mapFilter(
      bank,
      (account) => account.subordinateId === bank.id
    );
    return subordinateAccounts;
  },

  getAllSuperiorAccounts(bank: Bank) {
    const superiorAccounts: Account[] = mapFilter(
      bank,
      (account) => account.superiorId === bank.id
    );
    return superiorAccounts;
  },

  getAccount(bank1: Bank, bank2: Bank) {
    return mapFilter(
      bank1,
      (account) =>
        account.subordinateId === bank1.id && account.superiorId === bank2.id
    )[0];
  },
  getAccountById(id1: number) {
    return accountData.allIds
      .map((id) => accountData.accounts[id])
      .filter((account) => account.subordinateId === id1)[0];
  },
  getAccountByIds(id1: number, id2: number) {
    return accountData.allIds
      .map((id) => accountData.accounts[id])
      .filter(
        (account) => account.subordinateId === id1 && account.superiorId === id2
      )[0];
  },
  getBankDepositsAccount(id1: number) {
    return accountData.allIds
      .map((id) => accountData.accounts[id])
      .filter(
        (account) =>
          account.subordinateId === id1 && account.type === "Bank Deposits"
      )[0];
  },
  getTreasuries(id1: number) {
    return accountData.allIds
      .map((id) => accountData.accounts[id])
      .filter(
        (account) =>
          account.subordinateId === id1 && account.type === "Treasury Bills"
      )[0];
  },
  increaseCorrespondingBalance(customer: Bank, bank: Bank, amount: number) {
    let account = Accounts.getAccount(customer, bank);

    if (account) {
      let newAccount = { ...account };
      newAccount.balance += amount;
      let newAccounts = { ...accountData.accounts };
      newAccounts = { ...newAccounts, [account.id]: newAccount };
      AccountData.assignAccounts(newAccounts);
    }
  },

  decreaseCorrespondingBalance(customer: Bank, bank: Bank, amount: number) {
    let account = Accounts.getAccount(customer, bank);
    if (account) {
      let newAccount = { ...account };
      newAccount.balance -= amount;
      let newAccounts = { ...accountData.accounts };
      newAccounts = { ...newAccounts, [account.id]: newAccount };
      AccountData.assignAccounts(newAccounts);
    }
  },
  increaseCorrespondingTreasuries(customer: Bank, amount: number) {
    let account = Accounts.getTreasuries(customer.id);
    if (account) {
      let newAccount = { ...account };
      newAccount.balance += amount;
      let newAccounts = { ...accountData.accounts };
      newAccounts = { ...newAccounts, [account.id]: newAccount };
      AccountData.assignAccounts(newAccounts);
    }
  },

  decreaseCorrespondingTreasuries(customer: Bank, amount: number) {
    let account = Accounts.getTreasuries(customer.id);
    if (account) {
      let newAccount = { ...account };
      newAccount.balance -= amount;
      let newAccounts = { ...accountData.accounts };
      newAccounts = { ...newAccounts, [account.id]: newAccount };
      AccountData.assignAccounts(newAccounts);
    }
  },
};

function mapFilter(party: Bank, cb: (account: Account) => boolean) {
  return party.accountIds
    .map((id) => accountData.accounts[id])
    .filter((account) => cb(account));
}
