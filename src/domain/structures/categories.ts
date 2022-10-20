export const instruments = {
  "Cash Reserves": {
    type: "Reserves",
    correspondingInstrument: false,
  },
  Gold: {
    type: "Reserves",
    correspondingInstrument: false,
  },
  "Customer Deposits": {
    type: "Deposits",
    correspondingInstrument: "Overdraft",
  },
  "Bank Deposits": {
    type: "Deposits",
    correspondingInstrument:
      system === "centralbank" ? "Daylight Overdraft" : "Overdraft",
  },
  "CH Certificates": {
    type: "Deposits",
    correspondingInstrument: "Ch Loans",
  },
  "Treasury Bills": {
    type: "securities",
    correspondingInstrument: false,
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
  "Fed Funds": {
    type: "Loan",
    correspondingInstrument: false,
    exchangingInstrument: "Bank Deposits",
    asAsset: "Fed Funds To",
    asLiability: "Fed Funds From",
  },
  Loans: {
    type: "Loans",
    correspondingInstrument: false,
    exchangingInstrument: "Customer Deposits",
    asAsset: "Loan To",
    asLiability: "Loan From",
  },
  Dues: {
    type: "Debt",
    correspondingInstrument: false,
    asAsset: "Due From",
    asLiability: "Due To",
  },
};



//EXAMPLES
//securities always settled with centralbank
//can be bought and sold
const securities = {
  accounts: {
    0: {
      id: 0,
      holderId: 1,
      balance: 10,
      interest: 1,
      maturity: 1,
      instrument: "Treasury Bills",
    },
    1: {
      id: 0,
      holderId: 1,
      balance: 20,
      interest: 2,
      maturity: 2,
      instrument: "Treasury Bills",
    },
    2: {
      id: 0,
      holderId: 1,
      balance: 20,
      interest: 2,
      maturity: 2,
      instrument: "Bonds",
    },
  },
  allIds: [0, 1, 2],
};

const repos = {
  accounts: {
    0: {
      id: 0,
      subordinate: 1,
      superior: 0,
      balance: 20,
      collateral: securities[1],
      instrument: "Repos",
    },
  },
  allIds: [0],
};

function getSecurityAssets(id) {

}
