import { CreditAccounts } from "../services/credit-accounts";
import { Banks } from "../services/bank";
import { System } from "../system";
import {
  accountData,
  creditData,
  reservesData,
  securitiesData,
} from "../structures/objects";
import { Account, Bank, CreditAccount } from "../structures/types";

interface CorrespondingInstruments {
  [key: string]: string;
}

interface CorrespondingCreditInstruments {
  [index: string]: {
    [index: string]: string;
  };
}

const correspondingCreditInstruments: CorrespondingCreditInstruments = {
  Dues: {
    assets: "Due Froms",
    liabilities: "Due Tos",
  },
  Loans: {
    assets: "Loan To",
    liabilities: "Loan From",
  },
  "Fed Funds": {
    assets: "fed funds to",
    liabilities: "fed funds from",
  },
  Mortgage: {
    assets: "Mortgage To",
    liabilities: "Mortgage From",
  },
};

export const BalanceSheets = {
  getCorrespondingInstruments(type) {
    const correspondingInstruments: CorrespondingInstruments = {
      "Customer Deposits": "Customer Overdrafts",
      "Customer Overdrafts": "Customer Deposits",
      "Bank Deposits":
        System.getSystem() === "centralbank"
          ? "Daylight Overdrafts"
          : "Bank Overdrafts",
      "Daylight Overdrafts": "Bank Deposits",
      "Bank Overdrafts": "Bank Deposits",
      "CH Certificates": "CH Loans",
      "CH Loans": "CH Certificates",
    };
    return correspondingInstruments[type];
  },

  parseOverdraft(account: Account) {
    return {
      ...account,
      instrument: this.getCorrespondingInstruments(account.instrument),
      balance: -account.balance,
    };
  },

  parseOverdrafts(accounts: Account[]) {
    return accounts.map((account) => {
      return {
        ...account,
        instrument: this.getCorrespondingInstruments(account.instrument),
        balance: -account.balance,
      };
    });
  },

  getAccountAssets(bank: Bank) {
    const accounts = bank.accountIds.map((id) => {
      return accountData.accounts[id];
    });
    const recategorisedInstruments = accounts.map((account) => {
      if (account.subordinateId === bank.id && account.balance >= 0) {
        return account;
      }
      if (account.superiorId === bank.id && account.balance <= 0) {
        return this.parseOverdraft(account);
      }
    });
    return recategorisedInstruments.filter((a) => a !== undefined);
  },

  getAccountLiabilities(bank: Bank) {
    const accounts = bank.accountIds.map((id) => {
      return accountData.accounts[id];
    });
    const recategorisedInstruments = accounts.map((account) => {
      if (account.superiorId === bank.id && account.balance >= 0) {
        return account;
      }
      if (
        account.subordinateId === bank.id &&
        account.balance <= 0 &&
        account.instrument !== "Treasury Bills"
      ) {
        return this.parseOverdraft(account);
      }
    });
    return recategorisedInstruments.filter((a) => a !== undefined);
  },

  getCreditAssets(bank: Bank) {
    const creditAccounts: CreditAccount[] = CreditAccounts.getAll(bank);
    const dueToAccounts = creditAccounts
      .filter(
        (account) => account.superiorId === bank.id && account.balance > 0 //CHANGED
      )
      .map((account) => {
        return {
          ...account,
          instrument: correspondingCreditInstruments[account.instrument].assets,
        };
      });
    return dueToAccounts;
  },

  getCreditLiabilities(bank: Bank) {
    const creditAccounts: CreditAccount[] = CreditAccounts.getAll(bank);

    const dueFromAccounts = creditAccounts
      .filter(
        (creditAccount) =>
          creditAccount.subordinateId === bank.id && creditAccount.balance > 0
      )
      .map((account) => {
        return {
          ...account,
          instrument:
            correspondingCreditInstruments[account.instrument].liabilities,
        };
      });

    return dueFromAccounts;
  },

  getAssets(bank: Bank) {
    const accounts = this.getAccountAssets(bank);
    const credit = this.getCreditAssets(bank);

    return [...accounts, ...credit];
  },

  getAssetsBeta(bank: Bank) {},

  getAssetsPlusReserves(bank: Bank) {
    const accounts = this.getAccountAssets(bank);
    const credit = this.getCreditAssets(bank);
    const cashReserves = reservesData.accounts[bank.id];

    if (securitiesData.allIds.length > 0) {
      const securities = securitiesData.accounts[bank.id];
      const security = securities[0];
      const securityPlusInstrument = {
        ...security,
        instrument: security.instrument,
      };

      return [
        ...accounts,
        ...credit,
        { ...cashReserves },
        { ...securityPlusInstrument },
      ];
    }
    return [...accounts, ...credit, { ...cashReserves }];
  },

  getLiabilities(bank: Bank) {
    const accounts = this.getAccountLiabilities(bank);
    const credit = this.getCreditLiabilities(bank);

    return [...accounts, ...credit];
  },

  getAssetsAndLiabilities(bank: Bank) {
    const assets = this.getAssets(bank);
    const liabilities = this.getLiabilities(bank);
    return {
      assets,
      liabilities,
    };
  },

  getAssetsAndLiabilitiesPlusReserves(bank: Bank) {
    const assets = this.getAssetsPlusReserves(bank);
    const liabilities = this.getLiabilities(bank);
    return {
      assets,
      liabilities,
    };
  },

  getBalancesheet(bank: Bank) {
    const assets = this.getAssets(bank);
    const liabilities = this.getLiabilities(bank);
    return { assets, liabilities };
  },

  getAll() {
    const allBanks = Banks.getAll();
    const allBalanceSheets = allBanks.map((bank) => {
      const assets = this.getAssetsPlusReserves(bank);
      const liabilities = this.getLiabilities(bank);
      return {
        id: bank.id,
        name: bank.name,
        assets,
        liabilities,
      };
    });
    return allBalanceSheets;
  },
};

function mapFilter(party: Bank, cb: (account: Account) => boolean) {
  return party.accountIds
    .map((id) => {
      return accountData.accounts[id];
    })
    .filter((account) => cb(account));
}
