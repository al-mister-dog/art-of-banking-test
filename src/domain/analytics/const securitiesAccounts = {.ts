// const securitiesAccounts = {
//   "0": [{ id: 0, balance: 400, instrument: "Treasury Bills", maturity: 1 }],
//   "1": [{ id: 1, balance: 100, instrument: "Treasury Bills", maturity: 1 }],
//   "2": [{ id: 2, balance: 100, instrument: "Treasury Bills", maturity: 1 }],
//   "3": [{ id: 3, balance: 100, instrument: "Treasury Bills", maturity: 1 }],
//   "4": [{ id: 4, balance: 100, instrument: "Treasury Bills", maturity: 1 }],
// };

export const securitiesAccounts2 = {
  "0": [{ id: 0, balance: 390, instrument: "Treasury Bills", maturity: 1 }],
  "1": [{ id: 1, balance: 110, instrument: "Treasury Bills", maturity: 1 }],
  "2": [{ id: 2, balance: 100, instrument: "Treasury Bills", maturity: 1 }],
  "3": [{ id: 3, balance: 100, instrument: "Treasury Bills", maturity: 1 }],
  "4": [{ id: 4, balance: 100, instrument: "Treasury Bills", maturity: 1 }],
};

//add treasuries

let securitiesData = {
  accounts: {},
  allIds: [] as number[],
};

const Securities = {
  create(id1) {
    securitiesData.accounts[id1] = [];
    securitiesData.allIds.push(id1);
  },
  getSecuritiesById(id) {
    return securitiesData.accounts[id];
  },
  addSecurities(id1, amount, instrument, maturity, interest) {
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

    securitiesData = {
      ...securitiesData,
      accounts: { ...securitiesData.accounts, [id1]: newSecurities },
    };
  },
};
function getSecuritiesById(id) {
  return securitiesData.accounts[id];
}

Securities.addSecurities(1, 100, "Treasury Bills", 1, 5);
Securities.addSecurities(1, 150, "Treasury Bills", 1, 5);
