import {
  SystemType,
  Bank,
  Banks,
  BankDataObject,
  Accounts,
  AccountDataObject,
  CreditAccounts,
  DuesAccounts,
  LoanAccounts,
  Records,
  ReservesAccount,
  ReservesAccounts,
  SecuritiesAccounts,
  CreditDataObject,
  SecuritiesAccount,
} from "./types";

export let system: SystemType = "national";

export let bankData: BankDataObject = {
  id: 0,
  banks: {} as Banks,
  allIds: [] as number[],
};

export let reservesData = {
  id: 0,
  reserves: {} as ReservesAccounts,
  allIds: [],
};

export let accountData = {
  id: 0,
  accounts: {} as Accounts,
  allIds: [] as number[],
};

export let creditData: CreditDataObject = {
  id: 0,
  creditAccounts: {} as CreditAccounts,
  allIds: [] as number[],
};

export let loanData = {
  id: 0,
  loanAccounts: {} as LoanAccounts,
  allIds: [] as number[],
};

export let duesData = {
  id: 0,
  duesAccounts: {} as DuesAccounts,
};

export let securitiesData = {
  id: 0,
  securities: {} as SecuritiesAccounts,
  allIds: [],
};

export const BankData = {
  assign(newBankData: BankDataObject) {
    bankData = { ...newBankData };
  },
  assignAccountIds(bank1: Bank, bank2: Bank, accountId: number) {
    let newBankData = JSON.parse(JSON.stringify(bankData));
    newBankData.banks[bank1.id].accountIds = [...bank1.accountIds, accountId];
    newBankData.banks[bank2.id].accountIds = [...bank2.accountIds, accountId];
    this.assign(newBankData);
  },
  assignCreditIds(bank1: Bank, bank2: Bank, creditId: number) {
    let newBankData = JSON.parse(JSON.stringify(bankData));
    newBankData.banks[bank1.id].creditIds = [
      ...newBankData.banks[bank1.id].creditIds,
      creditId,
    ];
    newBankData.banks[bank2.id].creditIds = [
      ...newBankData.banks[bank2.id].creditIds,
      creditId,
    ];

    this.assign(newBankData);
  },
};

export const ReservesData = {
  assign(newReservesData: any) {
    reservesData = { ...newReservesData };
  },
  assignReservesAccounts(reserves: ReservesAccount) {
    let newReserves = { ...reservesData.reserves };
    newReserves = { ...newReserves, [reserves.id]: reserves };
    reservesData = { ...reservesData, reserves: newReserves };
  },
};

export const SecuritiesData = {
  assign(newSecuritesData: any) {
    securitiesData = { ...newSecuritesData };
  },
  assignSecuritiesAccounts(securities: SecuritiesAccount) {
    let newSecurities = { ...securitiesData.securities };
    newSecurities = { ...newSecurities, [securities.id]: securities };
    securitiesData = { ...securitiesData, securities: newSecurities };
  },
};

export const AccountData = {
  assign(newAccountData: AccountDataObject) {
    accountData = { ...newAccountData };
  },
  assignAccounts(accounts: Accounts) {
    accountData = { ...accountData, accounts };
  },
};

export const CreditData = {
  assign(newCreditData: CreditDataObject) {
    creditData = { ...newCreditData };
  },
  assignAccounts(creditAccounts: CreditAccounts) {
    creditData = { ...creditData, creditAccounts };
  },
};

export const DuesData = {
  assign(duesAccounts: DuesAccounts) {
    duesData = { ...duesData, duesAccounts };
  },
};

export let records = {
  id: 0,
  parties: {} as Records,
  partyLogs: {},
  rounds: {},
  allIds: [],
};

export let analytics = {
  records: {},
  balances: {},
  graphs: {
    credit: [],
    reserves: [],
    privateCredit: [],
    nationalData: {},
    loanData: {
      volumeWeightedMedian: 0,
      associatedData: [
        {
          transactionPercentage: "0",
          rate: 0,
          occurences: 0,
          volume: 0,
          cumulativeFrequency: 0,
        },
      ],
    },
  },
};

export const AnalyticsData = {
  addIdToNationalData(id) {
    const newNationalData = { ...analytics.graphs.nationalData };
    newNationalData[id] = [];
    const newGraphs = { ...analytics.graphs, nationalData: newNationalData };
    analytics = { ...analytics, graphs: newGraphs };
  },

  addDataToNationalData(id: number, data) {
    const newDataArray = [...analytics.graphs.nationalData[id]];
    newDataArray.push(data);
    const newNationalData = {
      ...analytics.graphs.nationalData,
      [id]: newDataArray,
    };
    const newGraphs = { ...analytics.graphs, nationalData: newNationalData };
    analytics = { ...analytics, graphs: newGraphs };
  },

  assignNationalData(graphs) {},

  assignCreditData(graphs) {
    analytics = { ...analytics, graphs };
  },
};

export let loanRecords = [];

export function clearBankData() {
  bankData = {
    id: 0,
    banks: {} as Banks,
    allIds: [] as number[],
  };
  accountData = {
    id: 0,
    accounts: {} as Accounts,
    allIds: [] as number[],
  };
  reservesData = {
    id: 0,
    reserves: {} as ReservesAccounts,
    allIds: [] as number[],
  };
  duesData = {
    id: 0,
    duesAccounts: {} as DuesAccounts,
  };
  creditData = {
    id: 0,
    creditAccounts: {} as CreditAccounts,
    allIds: [] as number[],
  };
  records = {
    id: 0,
    parties: {} as Records,
    partyLogs: {},
    rounds: {},
    allIds: [],
  };
  analytics = {
    records: {},
    balances: {},
    graphs: {
      credit: [],
      reserves: [],
      privateCredit: [],
      nationalData: {},
      loanData: {
        volumeWeightedMedian: 0,
        associatedData: [
          {
            transactionPercentage: "0",
            rate: 0,
            occurences: 0,
            volume: 0,
            cumulativeFrequency: 0,
          },
        ],
      },
    },
  };
  loanData = {
    id: 0,
    loanAccounts: {} as LoanAccounts,
    allIds: [] as number[],
  };
  loanRecords = [];
  securitiesData = { id: 0, securities: {} as SecuritiesAccounts, allIds: [] };
}
