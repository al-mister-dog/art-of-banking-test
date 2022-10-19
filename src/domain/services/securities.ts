import { securitiesData, SecuritiesData } from "../structures/objects";
import { Bank } from "../structures/types";

export const Securities = {
  getSecurities(bank: Bank) {
    return securitiesData.securities[bank.id];
  },
  getSecuritiesById(id: number) {
    return securitiesData.securities[id];
  },
  increaseSecurities(bank: Bank, amount: number) {
    // let securities = { ...securitiesData.securities[bank.id] };
    // securities.balance += amount;
    // SecuritiesData.assignSecuritiesAccounts(securities);
  },
  decreaseSecurities(bank: Bank, amount: number) {
    // let securities = { ...securitiesData.securities[bank.id] };
    // securities.balance -= amount;
    // SecuritiesData.assignSecuritiesAccounts(securities);
  },
  increaseTreasuries(bank: Bank, amount: number) {
    const bankAccount = securitiesData.securities[bank.id].filter(
      (account) => account.type === "Treasury Bills"
    )[0];
    bankAccount.balance += amount;
  },
  decreaseTreasuries(bank: Bank, amount: number) {
    const bankAccount = securitiesData.securities[bank.id].filter(
      (account) => account.type === "Treasury Bills"
    )[0];
    if (bankAccount.balance - amount >= 0)
    bankAccount.balance -= amount;
  },
  createSecurity(bank: Bank, type: string, amount: number) {
    const newSecurity = {
      id: bank.id,
      balance: amount,
      type,
      maturity: 1,
    };
    let securities = { ...securitiesData.securities[bank.id] };
    if (Object.keys(securities).length === 0) {
      securities = [];
    }
    securities.push(newSecurity);
    securitiesData.securities[bank.id] = securities;
    securitiesData.allIds.push(securitiesData.id);
    securitiesData.id++;
    // SecuritiesData.assignSecuritiesAccounts(securities);
  },
  addSecurities(bank: Bank, type: string, amount: number) {
    const newSecurity = {
      id: bank.id,
      balance: amount,
      type,
      maturity: 1,
    };
    let securities = { ...securitiesData.securities[bank.id] };
    if (Object.keys(securities).length === 0) {
      securities = [];
    }
    securities[securitiesData.id];
    securitiesData.allIds.push(securitiesData.id);
    securitiesData.id++;
    // SecuritiesData.assignSecuritiesAccounts(securities);
  },
};
