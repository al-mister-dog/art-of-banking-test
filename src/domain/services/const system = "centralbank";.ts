const system = "centralbank";

const accountData = {
  id: 0,
  accounts: {},
  allIds: [],
};

const instruments = {
  "Customer Deposits": {
    type: "deposit",
    correspondingInstrument: "Overdraft",
    accounts: {
      ...accountData,
    },
  },
  "Bank Deposits": {
    type: "deposit",
    correspondingInstrument:
      system === "centralbank" ? "Daylight Overdrafts" : "Overdrafts",
    accounts: {
      ...accountData,
    },
  },
  "CH Certificates": {
    type: "deposit",
    correspondingInstrument: "Ch Loans",
    accounts: {
      ...accountData,
    },
  },
  "Treasury Bills": {
    type: "securities",
    correspondingInstrument: false,
    accounts: {
      ...accountData,
    },
  },
  "Due Tos": {
    type: "debt",
    correspondingInstrument: false,
    accounts: {
      ...accountData,
    },
  },
  "Due Froms": {
    type: "debt",
    correspondingInstrument: false,
    accounts: {
      ...accountData,
    },
  },
  Dues: {
    type: "debt",
    correspondingInstrument: false,
    asAsset: "Due From",
    asLiability: "Due To",
    accounts: {
      ...accountData,
    },
  },
  "Cash Reserves": {
    type: "reserves",
    correspondingInstrument: false,
    accounts: {
      ...accountData,
    },
  },
  Gold: {
    type: "reserves",
    correspondingInstrument: false,
    accounts: {
      ...accountData,
    },
  },
  "Fed Funds": {
    type: "loan",
    correspondingInstrument: false,
    exchangingInstrument: "Bank Deposits",
    asAsset: "Fed Funds To",
    asLiability: "Fed Funds From",
    accounts: {
      ...accountData,
    },
  },
  Loan: {
    type: "loan",
    correspondingInstrument: false,
    exchangingInstrument: "Customer Deposits",
    asAsset: "Loan To",
    asLiability: "Loan From",
    accounts: {
      ...accountData,
    },
  },
  Repo: {
    type: "collatoralizedLoan",
    correspondingInstrument: "reverse",
    exchangingInstrument: "Bank Deposit",
    accounts: {
      ...accountData,
    },
  },
  Mortgage: {
    type: "collatoralizedLoan",
    correspondingInstrument: "property",
    exchangingInstrument: "Bank Deposit",
    asAsset: "Mortgage To",
    asLiability: "Mortgage From",
    accounts: {
      ...accountData,
    },
  },
};

const duesData = {
  accounts: {
    0: {
      instrument: "Dues",
      balance: 15,
      subordinateId: 0,
      superiorId: 1,
    },
    1: {
      instrument: "Dues",
      balance: 25,
      subordinateId: 0,
      superiorId: 2,
    },
    2: {
      instrument: "Dues",
      balance: 25,
      subordinateId: 3,
      superiorId: 1,
    },
  },
  allIds: [0, 1, 2],
};

const depositAccountsData = {
  accounts: {
    0: {
      id: 1,
      instrument: "Bank Deposits",
      balance: -10,
      subordinateId: 0,
      superiorId: 1,
    },
    1: {
      id: 2,
      instrument: "Bank Deposits",
      balance: 100,
      subordinateId: 2,
      superiorId: 3,
    },
    2: {
      id: 3,
      instrument: "Bank Deposits",
      balance: -100,
      subordinateId: 1,
      superiorId: 3,
    },
  },
  allIds: [0, 1, 2],
};

function isPositiveValue(account) {
  return account.balance >= 0;
}

function isNegativeValue(account) {
  return account.balance < 0;
}

function isAccountHolder(account, id) {
  return account.superiorId === id;
}

function isCorrespondingInstrument(account) {
  return instruments[account.instrument].correspondingInstrument;
}

function returnPositiveInstrument(account) {
  return {
    ...account,
    balance: account.balance,
    instrument: account.instrument,
  };
}
function returnNegativeInstrument(account) {
  return {
    ...account,
    balance: -account.balance,
    instrument: instruments[account.instrument].correspondingInstrument,
  };
}
function returnNonCorrespondingInstrument(account, balancesheetSide) {
  return {
    ...account,
    balance: account.balance,
    instrument: instruments[account.instrument][balancesheetSide],
  };
}

function correspondingLiability(account, id) {
  if (isPositiveValue(account)) {
    return isAccountHolder(account, id)
      ? returnPositiveInstrument(account)
      : {};
  }
  return isAccountHolder(account, id) ? {} : returnNegativeInstrument(account);
}

function correspondingAsset(account, id) {
  if (isNegativeValue(account)) {
    return isAccountHolder(account, id)
      ? returnNegativeInstrument(account)
      : {};
  }
  return isAccountHolder(account, id) ? {} : returnPositiveInstrument(account);
}

function nonCorrespondingAsset(account, id) {
  return isAccountHolder(account, id)
    ? returnNonCorrespondingInstrument(account, "asAsset")
    : {};
}

function nonCorrespondingLiability(account, id) {
  return isAccountHolder(account, id)
    ? {}
    : returnNonCorrespondingInstrument(account, "asLiability");
}

function addLiability(account, id) {
  return isCorrespondingInstrument(account)
    ? correspondingLiability(account, id)
    : nonCorrespondingLiability(account, id);
}

function addAsset(account, id) {
  return isCorrespondingInstrument(account)
    ? correspondingAsset(account, id)
    : nonCorrespondingAsset(account, id);
}

function returnLiability(account, id) {
  const instrument = {
    ...addLiability(account, id),
  };
  return instrument;
}

function returnAsset(account, id) {
  const instrument = {
    ...addAsset(account, id),
  };
  return instrument;
}

function getRelevantAccounts(id) {
  const relevantAccountsArray = [
    filterAccounts(duesData, id),
    filterAccounts(depositAccountsData, id),
  ].flatMap((accounts) => accounts);

  return relevantAccountsArray;
}

function returnAssets(id) {
  return mapByInstrument(
    filterEmptyAccounts(
      getRelevantAccounts(id).map((account) => returnAsset(account, id))
    )
  );
}

function returnLiabilities(id) {
  return mapByInstrument(
    filterEmptyAccounts(
      getRelevantAccounts(id).map((account) => returnLiability(account, id))
    )
  );
}

function filterAccounts(data, id: number) {
  return data.allIds
    .map((id) => data.accounts[id])
    .filter(
      (account) => account.subordinateId == id || account.superiorId === id
    );
}

function filterEmptyAccounts(accountArray) {
  return accountArray.filter((account) => Object.keys(account).length !== 0);
}

function mapByInstrument(balanceSheetArray: any[]) {
  return balanceSheetArray.reduce((acc, cur) => {
    acc[cur.instrument]
      ? acc[cur.instrument].push(cur)
      : (acc[cur.instrument] = [cur]);
    return acc;
  }, {});
}


