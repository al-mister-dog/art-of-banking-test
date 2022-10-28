import { BankingSystem } from "../banking-system";
import { accountData, creditData, securitiesData } from "../structures/objects";

const system = "centralbank";

export const Accounts = {
  instruments: {
    "Customer Deposits": {
      type: "Deposit",
      correspondingInstrument: "Overdraft",
    },
    "Bank Deposits": {
      type: "Deposit",
      correspondingInstrument:
        system === "centralbank" ? "Daylight Overdraft" : "Overdraft",
    },
    "CH Certificates": {
      type: "Deposit",
      correspondingInstrument: "Ch Loans",
    },
    "Treasury Bills": {
      type: "Securities",
      correspondingInstrument: false,
      asAsset: "Treasury Bills",
      asLiability: "Treasury Bills",
    },
    "Due Tos": {
      type: "Debt",
      correspondingInstrument: false,
    },
    "Due Froms": {
      type: "Debt",
      correspondingInstrument: false,
    },
    Dues: {
      type: "Debt",
      correspondingInstrument: false,
      asAsset: "Due From",
      asLiability: "Due To",
    },
    "Cash Reserves": {
      type: "Reserves",
      correspondingInstrument: false,
    },
    Gold: {
      type: "Reserves",
      correspondingInstrument: false,
    },
    "Fed Funds": {
      type: "Loan",
      correspondingInstrument: false,
      exchangingInstrument: "Bank Deposits",
      asAsset: "Fed Funds To",
      asLiability: "Fed Funds From",
    },
    Loans: {
      type: "Loan",
      correspondingInstrument: false,
      exchangingInstrument: "Customer Deposits",
      asAsset: "Loan To",
      asLiability: "Loan From",
    },
    Repo: {
      type: "Collatoralized Loan",
      correspondingInstrument: "reverse",
      exchangingInstrument: "Bank Deposit",
    },
    Mortgage: {
      type: "Collatoralized Loan",
      correspondingInstrument: "property",
      exchangingInstrument: "Bank Deposit",
      asAsset: "Mortgage To",
      asLiability: "Mortgage From",
    },
  },

  isPositiveValue(account) {
    return account.balance >= 0;
  },

  isNegativeValue(account) {
    return account.balance < 0;
  },

  isAccountHolder(account, id) {
    return account.superiorId === id;
  },

  isCorrespondingInstrument(account) {
    return this.instruments[account.instrument].correspondingInstrument;
  },

  returnPositiveInstrument(account) {
    return {
      ...account,
      balance: account.balance,
      instrument: account.instrument,
    };
  },
  returnNegativeInstrument(account) {
    return {
      ...account,
      balance: -account.balance,
      instrument: this.instruments[account.instrument].correspondingInstrument,
    };
  },
  returnNonCorrespondingInstrument(account, balancesheetSide) {
    return {
      ...account,
      balance: account.balance,
      instrument: this.instruments[account.instrument][balancesheetSide],
    };
  },

  correspondingLiability(account, id) {
    if (this.isPositiveValue(account)) {
      return this.isAccountHolder(account, id)
        ? this.returnPositiveInstrument(account)
        : {};
    }
    return this.isAccountHolder(account, id)
      ? {}
      : this.returnNegativeInstrument(account);
  },

  correspondingAsset(account, id) {
    if (this.isNegativeValue(account)) {
      return this.isAccountHolder(account, id)
        ? this.returnNegativeInstrument(account)
        : {};
    }
    return this.isAccountHolder(account, id)
      ? {}
      : this.returnPositiveInstrument(account);
  },

  nonCorrespondingAsset(account, id) {
    return this.isAccountHolder(account, id)
      ? this.returnNonCorrespondingInstrument(account, "asAsset")
      : {};
  },

  nonCorrespondingLiability(account, id) {
    return this.isAccountHolder(account, id)
      ? {}
      : this.returnNonCorrespondingInstrument(account, "asLiability");
  },

  addLiability(account, id) {
    return this.isCorrespondingInstrument(account)
      ? { ...account, balance: account.balance, instrument: account.instrument }
      : this.nonCorrespondingLiability(account, id);
  },

  addAsset(account, id) {
    return this.isCorrespondingInstrument(account)
      ? { ...account, balance: account.balance, instrument: account.instrument }
      : this.nonCorrespondingAsset(account, id);
  },

  relevantAccounts(id) {
    const relevantAccountsArray = [
      this.filteredSecurities(id),
      this.filteredAccounts(creditData, id),
      this.filteredAccounts(accountData, id),
    ].flatMap((accounts) => accounts);

    return relevantAccountsArray;
  },

  accounts(id) {
    return this.mapByInstrument(
      this.addRelationalData(
        this.filterEmptyAccounts(
          this.relevantAccounts(id).map((account) =>
            this.returnAccount(account, id)
          )
        ),
        id
      )
    );
  },

  returnAccount(account) {
    return {
      ...account,
      balance: account.balance,
      instrument: account.instrument,
    };
  },

  addRelationalData(accountsArray, id) {
    return accountsArray.map((account) => {
      if (account.superiorId !== id) {
        return {
          ...account,
          thirdPartyDetail: BankingSystem.getBankById(account.superiorId),
        };
      }
      if (account.subordinateId !== id) {
        return {
          ...account,
          thirdPartyDetail: BankingSystem.getBankById(account.subordinateId),
        };
      }

      return { ...account };
    });
  },

  accountAsset(account, id) {
    return this.isAccountHolder(account, id) ? this.returnAccount(account) : {};
  },

  accountLiability(account, id) {
    return this.isAccountHolder(account, id) ? {} : this.returnAccount(account);
  },

  getAccounts(id) {
    return {
      accounts: this.getNestedArray(this.accounts(id)),
    };
  },
  //getAccounts > accounts > relevantAccounts >

  filteredAccounts(data, id: number) {
    return data.allIds
      .map((id) => data.accounts[id])
      .filter(
        (account) =>
          (account.subordinateId == id || account.superiorId === id) &&
          Object.keys(account).length !== 0
      );
  },

  filteredSecurities(id) {
    const securities = securitiesData.accounts[id];
    return securities ? securities : [];
  },

  filterEmptyAccounts(accountArray) {
    return accountArray.filter((account) => Object.keys(account).length !== 0);
  },

  mapByInstrument(balanceSheetArray: any[]) {
    return balanceSheetArray.reduce((acc, cur) => {
      acc[cur.instrument]
        ? acc[cur.instrument].push(cur)
        : (acc[cur.instrument] = [cur]);
      return acc;
    }, {});
  },
  getNestedArray(object: { [key: string]: any }) {
    let arr = [];
    for (const key in object) {
      arr.push({ instrument: key, accounts: object[key] });
    }
    return arr;
  },
};
