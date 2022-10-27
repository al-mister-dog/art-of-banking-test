import { securitiesData, SecuritiesData } from "../structures/objects";
import { Bank } from "../structures/types";

export const Securities = {
  getSecurities(bank: Bank) {
    return securitiesData.accounts[bank.id];
  },
  getSecuritiesById(id: number) {
    return securitiesData.accounts[id];
  },
  increaseSecurities(bank: Bank, amount: number) {
    // let securities = { ...securitiesData.accounts[bank.id] };
    // securities.balance += amount;
    // SecuritiesData.assignSecuritiesAccounts(securities);
  },
  decreaseSecurities(bank: Bank, amount: number) {
    // let securities = { ...securitiesData.accounts[bank.id] };
    // securities.balance -= amount;
    // SecuritiesData.assignSecuritiesAccounts(securities);
  },
  increaseTreasuries(bank: Bank, amount: number) {
    const bankAccount = securitiesData.accounts[bank.id].filter(
      (account) => account.instrument === "Treasury Bills"
    )[0];
    bankAccount.balance += amount;
  },
  decreaseTreasuries(bank: Bank, amount: number) {
    const bankAccount = securitiesData.accounts[bank.id].filter(
      (account) => account.instrument === "Treasury Bills"
    )[0];
    if (bankAccount.balance - amount >= 0) bankAccount.balance -= amount;
  },
  createSecurity(bank: Bank, instrument: string, amount: number) {
    const newSecurity = {
      id: bank.id,
      balance: amount,
      instrument,
      maturity: 1,
      interest: 5,
      principal: amount,
    };
    let securities = { ...securitiesData.accounts[bank.id] };
    if (Object.keys(securities).length === 0) {
      securities = [];
    }
    securities.push(newSecurity);
    securitiesData.accounts[bank.id] = securities;
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
    let securities = { ...securitiesData.accounts[bank.id] };
    if (Object.keys(securities).length === 0) {
      securities = [];
    }
    securities[securitiesData.id];
    securitiesData.allIds.push(securitiesData.id);
    securitiesData.id++;
    // SecuritiesData.assignSecuritiesAccounts(securities);
  },
  create(id1) {
    securitiesData.accounts[id1] = [];
    securitiesData.allIds.push(id1);
  },
  /**
   * addSecuritiesTwo()
   * creates a securities array containing multiple securities of varying instruments
   * for example, one securities array belonging to a bank may contain two sets of
   * treasury bills with differing maturity dates, along with other securities.
   * on the balance sheet these can be aggregated and totalled by instrument
   * but in more complex UIs various data aggregations will be used
   */
  addSecuritiesTwo(id1, amount, instrument, maturity, interest) {
    let securities = { ...securitiesData.accounts[id1] };

    if (Object.keys(securities).length === 0) {
      Securities.create(id1);
    }

    const newSecurity = {
      id: id1,
      balance: amount,
      instrument,
      maturity,
      interest,
    };

    const newSecurities = [...securitiesData.accounts[id1], newSecurity];

    const newSecuritiesData = {
      ...securitiesData,
      accounts: { ...securitiesData.accounts, [id1]: newSecurities },
    };
    SecuritiesData.assign(newSecuritiesData);
  },
  getTotalTreasuries() {

  }
};
