import { BankingSystem } from "../banking-system";
import { accountData, duesData, creditData } from "../structures/objects";

const system = "centralbank";

export const Balancesheets = {
  instruments: {
    "Customer Deposits": {
      type: "deposit",
      correspondingInstrument: "Overdraft",
    },
    "Bank Deposits": {
      type: "deposit",
      correspondingInstrument:
        system === "centralbank" ? "Daylight Overdraft" : "Overdraft",
    },
    "CH Certificates": {
      type: "deposit",
      correspondingInstrument: "Ch Loans",
    },
    "Treasury Bills": {
      type: "securities",
      correspondingInstrument: false,
    },
    "Due Tos": {
      type: "debt",
      correspondingInstrument: false,
    },
    "Due Froms": {
      type: "debt",
      correspondingInstrument: false,
    },
    Dues: {
      type: "debt",
      correspondingInstrument: false,
      asAsset: "Due From",
      asLiability: "Due To",
    },
    "Cash Reserves": {
      type: "reserves",
      correspondingInstrument: false,
    },
    Gold: {
      type: "reserves",
      correspondingInstrument: false,
    },
    "Fed Funds": {
      type: "loan",
      correspondingInstrument: false,
      exchangingInstrument: "Bank Deposits",
      asAsset: "Fed Funds To",
      asLiability: "Fed Funds From",
    },
    Loan: {
      type: "loan",
      correspondingInstrument: false,
      exchangingInstrument: "Customer Deposits",
      asAsset: "Loan To",
      asLiability: "Loan From",
    },
    Repo: {
      type: "collatoralizedLoan",
      correspondingInstrument: "reverse",
      exchangingInstrument: "Bank Deposit",
    },
    Mortgage: {
      type: "collatoralizedLoan",
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
      ? this.correspondingLiability(account, id)
      : this.nonCorrespondingLiability(account, id);
  },

  addAsset(account, id) {
    return this.isCorrespondingInstrument(account)
      ? this.correspondingAsset(account, id)
      : this.nonCorrespondingAsset(account, id);
  },

  returnLiability(account, id) {
    const instrument = {
      ...this.addLiability(account, id),
    };
    return instrument;
  },

  returnAsset(account, id) {
    const instrument = {
      ...this.addAsset(account, id),
    };
    return instrument;
  },

  relevantAccounts(id) {
    console.log(this.filterAccounts(creditData, id));
    const relevantAccountsArray = [
      this.filterAccounts(creditData, id),
      this.filterAccounts(duesData, id),
      this.filterAccounts(accountData, id),
    ].flatMap((accounts) => accounts);

    return relevantAccountsArray;
  },

  returnAssets(id) {
    return this.mapByInstrument(
      this.addRelationalData(
        this.filterEmptyAccounts(
          this.relevantAccounts(id).map((account) =>
            this.returnAsset(account, id)
          )
        )
      )
    );
  },

  returnLiabilities(id) {
    return this.mapByInstrument(
      this.addRelationalData(
        this.filterEmptyAccounts(
          this.relevantAccounts(id).map((account) =>
            this.returnLiability(account, id)
          )
        )
      )
    );
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

  get(id) {
    return {
      assets: this.getNestedArray(this.returnAssets(id)),
      liabilities: this.getNestedArray(this.returnLiabilities(id)),
    };
  },

  filterAccounts(data, id: number) {
    return data.allIds
      .map((id) => data.accounts[id])
      .filter(
        (account) => account.subordinateId == id || account.superiorId === id
      );
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
// const duesData = {
//   accounts: {
//     0: {
//       instrument: "Dues",
//       balance: 15,
//       subordinateId: 0,
//       superiorId: 1,
//     },
//     1: {
//       instrument: "Dues",
//       balance: 25,
//       subordinateId: 0,
//       superiorId: 2,
//     },
//     2: {
//       instrument: "Dues",
//       balance: 25,
//       subordinateId: 3,
//       superiorId: 1,
//     },
//   },
//   allIds: [0, 1, 2],
// };

// const depositAccountsData = {
//   accounts: {
//     0: {
//       id: 1,
//       instrument: "Bank Deposits",
//       balance: -10,
//       subordinateId: 0,
//       superiorId: 1,
//     },
//     1: {
//       id: 2,
//       instrument: "Bank Deposits",
//       balance: 100,
//       subordinateId: 2,
//       superiorId: 3,
//     },
//     2: {
//       id: 3,
//       instrument: "Bank Deposits",
//       balance: -100,
//       subordinateId: 1,
//       superiorId: 3,
//     },
//   },
//   allIds: [0, 1, 2],
// };
