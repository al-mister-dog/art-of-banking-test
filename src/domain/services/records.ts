import { Accounts } from "./accounts";
import { System } from "../system";
import { records } from "../structures/objects";
import { Bank, RecordDetail } from "../structures/types";

const creditInstrumentsBySystem = {
  national: "deposits",
  correspondent: "deposits",
  clearinghouse: "ch certs",
};

export const Record = {
  getLogs(id: number) {
    return records.partyLogs[id].log.map((logInfo) => {
      return logInfo;
    });
  },
  deposit(bank1: Bank, bank2: Bank, amount: number) {
    const reservesAssetRecord1 = {
      instrumentType: "cash",
      notationType: "assignment",
      amount: amount,
      id: bank2.id,
      symbol: "-",
      name: bank2.name,
    };
    const depositAssetRecord = {
      instrumentType: "deposits",
      notationType: "issuance",
      amount: amount,
      id: bank2.id,
      symbol: "+",
      name: bank2.name,
    };
    const reservesAssetRecord2 = {
      instrumentType: "cash",
      notationType: "assignment",
      amount: amount,
      id: bank1.id,
      symbol: "+",
      name: bank1.name,
    };
    const depositLiabilityRecord = {
      instrumentType: "deposits",
      notationType: "issuance",
      amount: amount,
      id: bank1.id,
      symbol: "+",
      name: bank1.name,
    };
    insertAssetsEntry(bank1.id, reservesAssetRecord1);
    insertAssetsEntry(bank1.id, depositAssetRecord);
    insertAssetsEntry(bank2.id, reservesAssetRecord2);
    insertLiabilitiesEntry(bank2.id, depositLiabilityRecord);
    const bank1Log = {
      id: bank1.id,
      thirdPartyId: bank2.id,
      thirdPartyName: bank2.name,
      action: `Deposited $${amount} to ${bank2.name} account`,
      symbol: "+",
    };
    const bank2Log = {
      id: bank2.id,
      thirdPartyId: bank1.id,
      thirdPartyName: bank1.name,
      action: `Received $${amount} from ${bank1.name}`,
      symbol: "+",
    };
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },

  withdraw(bank1: Bank, bank2: Bank, amount: number) {
    const reservesAssetRecord1 = {
      instrumentType: "cash",
      notationType: "assignment",
      amount: amount,
      id: bank2.id,
      symbol: "+",
      name: bank2.name,
    };
    const depositAssetRecord = {
      instrumentType: "deposits",
      notationType: "setOff",
      amount: amount,
      id: bank2.id,
      symbol: "-",
      name: bank2.name,
    };
    const reservesAssetRecord2 = {
      instrumentType: "cash",
      notationType: "assignment",
      amount: amount,
      id: bank1.id,
      symbol: "-",
      name: bank1.name,
    };
    const depositLiabilityRecord = {
      instrumentType: "deposits",
      notationType: "setOff",
      amount: amount,
      id: bank1.id,
      symbol: "-",
      name: bank1.name,
    };

    insertAssetsEntry(bank1.id, reservesAssetRecord1);
    insertAssetsEntry(bank1.id, depositAssetRecord);
    insertAssetsEntry(bank2.id, reservesAssetRecord2);
    insertLiabilitiesEntry(bank2.id, depositLiabilityRecord);

    const bank1Log = {
      id: bank1.id,
      thirdPartyId: bank2.id,
      thirdPartyName: bank2.name,
      action: `Withdrew $${amount} from ${bank2.name} account`,
      symbol: "-",
    };
    const bank2Log = {
      id: bank2.id,
      thirdPartyId: bank1.id,
      thirdPartyName: bank1.name,
      action: `Paid out $${amount} to ${bank1.name}`,
      symbol: "-",
    };
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },

  transferSingle(
    amount: number,
    customer1: Bank,
    customer2: Bank,
    bank1: Bank
  ) {
    const customer1Record = {
      instrumentType: "deposits",
      notationType: "assignment",
      amount: amount,
      id: customer2.id,
      symbol: "-",
      name: customer2.name,
    };
    const bank1Record = {
      instrumentType: "deposits",
      notationType: "novation",
      amount: amount,
      id: customer1.id,
      symbol: "-",
      name: customer1.name,
    };
    const customer2Record = {
      instrumentType: "deposits",
      notationType: "assignment",
      amount: amount,
      id: customer1.id,
      symbol: "+",
      name: customer1.name,
    };
    const bank2Record = {
      instrumentType: "deposits",
      notationType: "novation",
      amount: amount,
      id: customer2.id,
      symbol: "+",
      name: customer2.name,
    };

    insertAssetsEntry(customer1.id, customer1Record);
    insertAssetsEntry(customer2.id, customer2Record);
    insertLiabilitiesEntry(bank1.id, bank1Record);
    insertLiabilitiesEntry(bank1.id, bank2Record);

    const customer1Log = {
      id: customer1.id,
      thirdPartyId: customer2.id,
      thirdPartyName: customer2.name,
      action: `Transfered $${amount} to ${customer2.name}`,
      symbol: "-",
    };
    const customer2Log = {
      id: customer2.id,
      thirdPartyId: bank1.id,
      thirdPartyName: bank1.name,
      action: `Received $${amount} transfer from ${customer1.name}`,
      symbol: "+",
    };
    const bank1LogA = {
      id: bank1.id,
      thirdPartyId: customer1.id,
      thirdPartyName: customer1.name,
      action: `Debited $${amount} from ${customer1.name}`,
      symbol: "+",
    };
    const bank1LogB = {
      id: bank1.id,
      thirdPartyId: customer2.id,
      thirdPartyName: customer2.name,
      action: `Credited $${amount} to ${customer2.name}`,
      symbol: "-",
    };

    insertLog(customer1.id, customer1Log);
    insertLog(customer2.id, customer2Log);
    insertLog(bank1.id, bank1LogA);
    insertLog(bank1.id, bank1LogB);
  },
  transferMultiple(
    amount: number,
    customer1: Bank,
    customer2: Bank,
    bank1: Bank,
    bank2: Bank
  ) {
    const customer1Record = {
      instrumentType: "deposits",
      notationType: "assignment",
      amount: amount,
      id: customer2.id,
      symbol: "-",
      name: customer2.name,
    };
    const bank1Record = {
      instrumentType: "deposits",
      notationType: "novation",
      amount: amount,
      id: customer1.id,
      symbol: "-",
      name: customer1.name,
    };
    const customer2Record = {
      instrumentType: "deposits",
      notationType: "assignment",
      amount: amount,
      id: customer1.id,
      symbol: "+",
      name: customer1.name,
    };
    const bank2Record = {
      instrumentType: "deposits",
      notationType: "novation",
      amount: amount,
      id: customer2.id,
      symbol: "+",
      name: customer2.name,
    };
    insertAssetsEntry(customer1.id, customer1Record);
    insertAssetsEntry(customer2.id, customer2Record);
    insertLiabilitiesEntry(bank1.id, bank1Record);
    insertLiabilitiesEntry(bank2.id, bank2Record);
    const customer1Log = {
      id: customer1.id,
      thirdPartyId: customer2.id,
      thirdPartyName: customer2.name,
      action: `Transfered $${amount} to ${customer2.name}`,
      symbol: "-",
    };
    const customer2Log = {
      id: customer2.id,
      thirdPartyId: customer1.id,
      thirdPartyName: customer1.name,
      action: `Received $${amount} transfer from ${customer1.name}`,
      symbol: "+",
    };
    const bank1Log = {
      id: bank1.id,
      thirdPartyId: customer1.id,
      thirdPartyName: customer1.name,
      action: `Debited $${amount} from ${customer1.name}`,
      symbol: "+",
    };
    const bank2Log = {
      id: bank1.id,
      thirdPartyId: customer2.id,
      thirdPartyName: customer2.name,
      action: `Credited $${amount} to ${customer2.name}`,
      symbol: "-",
    };

    insertLog(customer1.id, customer1Log);
    insertLog(customer2.id, customer2Log);
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },
  transferMultipleCB(
    amount: number,
    bank1: Bank,
    bank2: Bank,
    centralbank: Bank
  ) {
    //decrease an asset in a transfer B1> ASSIGNMENT
    //increase a liability in a transfer B1> ISSUANCE

    //increase an asset in a transfer >B2 ISSUANCE
    //decrease a liability in a transfer > B2 ASSIGNMENT

    //novation occurs when there is no contraction or expansion of a balance sheet
    const b1CbAccount = Accounts.getAccountByIds(bank1.id, centralbank.id);
    const b2CbAccount = Accounts.getAccountByIds(bank2.id, centralbank.id);
    const balance1 = b1CbAccount.balance - amount;
    const balance2 = b2CbAccount.balance + amount;

    //IN TRANSACTION TWO THIS IS BANK 2
    const bank1Record = {
      instrumentType: balance1 >= 0 ? "deposits" : "overdrafts",
      notationType: balance1 >= 0 ? "assignment" : "issuance",
      amount,
      symbol: balance1 >= 0 ? "-" : "+",
      id: centralbank.id,
      name: "C-Bank",
    };
    const bank2Record = {
      instrumentType: balance2 >= 0 ? "deposits" : "overdrafts",
      notationType: balance1 >= 0 ? "assignment" : "issuance",
      amount,
      symbol: balance2 >= 0 ? "+" : "-",
      id: centralbank.id,
      name: "C-Bank",
    };

    const centralbankRecord1 = {
      instrumentType: balance1 >= 0 ? "deposits" : "overdrafts",
      notationType: balance1 >= 0 ? "novation" : "issuance",
      amount,
      symbol: balance1 >= 0 ? "-" : "+",
      id: bank1.id,
      name: bank1.name,
    };
    const centralbankRecord2 = {
      instrumentType: balance2 >= 0 ? "deposits" : "overdrafts",
      notationType: balance1 >= 0 ? "novation" : "issuance",
      amount,
      symbol: balance2 >= 0 ? "+" : "-",
      id: bank2.id,
      name: bank2.name,
    };

    if (balance1 < 0) {
      insertAssetsEntry(centralbank.id, centralbankRecord1);
      insertLiabilitiesEntry(bank1.id, bank1Record);
    }
    if (balance1 >= 0) {
      insertAssetsEntry(bank1.id, bank1Record);
      insertLiabilitiesEntry(centralbank.id, centralbankRecord1);
    }
    if (balance2 < 0) {
      insertLiabilitiesEntry(bank2.id, bank2Record);
      insertAssetsEntry(centralbank.id, centralbankRecord2);
    }
    if (balance2 >= 0) {
      insertAssetsEntry(bank2.id, bank2Record);
      insertLiabilitiesEntry(centralbank.id, centralbankRecord2);
    }

    checkOverdraft(bank2, centralbank, b2CbAccount.balance, balance1, amount);

    const bank1Log = {
      id: bank1.id,
      thirdPartyId: bank2.id,
      thirdPartyName: bank2.name,
      action: `Transfered $${amount} to ${bank2.name}`,
      symbol: "-",
    };
    const bank2Log = {
      id: bank2.id,
      thirdPartyId: bank1.id,
      thirdPartyName: bank1.name,
      action: `Received $${amount} transfer from ${bank1.name}`,
      symbol: "+",
    };
    const centralbankLogA = {
      id: centralbank.id,
      thirdPartyId: bank1.id,
      thirdPartyName: bank1.name,
      action: `Debited $${amount} from ${bank1.name}`,
      symbol: "+",
    };
    const centralbankLogB = {
      id: centralbank.id,
      thirdPartyId: bank2.id,
      thirdPartyName: bank2.name,
      action: `Credited $${amount} to ${bank2.name}`,
      symbol: "-",
    };

    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
    insertLog(centralbank.id, centralbankLogA);
    insertLog(centralbank.id, centralbankLogB);
  },
  getFedFundsLoan(
    amount: number,
    bank1: Bank,
    bank2: Bank,
    centralbank: Bank,
    interestRate: number
  ) {
    const b1CbAccount = Accounts.getAccountByIds(bank1.id, centralbank.id);
    const b2CbAccount = Accounts.getAccountByIds(bank2.id, centralbank.id);
    const balance1 = b1CbAccount.balance;
    const balance2 = b2CbAccount.balance;
    const bank1Record = {
      instrumentType: balance1 > 0 ? "deposits" : "overdrafts",
      notationType: "issuance",
      amount,
      symbol: "+",
      id: bank2.id,
      name: bank2.name,
    };
    const bank2Record = {
      instrumentType: balance2 > 0 ? "deposits" : "overdrafts",
      notationType: "issuance",
      amount,
      symbol: "+",
      id: bank2.id,
      name: bank2.name,
    };

    insertLiabilitiesEntry(bank1.id, bank1Record);
    insertAssetsEntry(bank2.id, bank2Record);
  },

  creditAccount(bank1, bank2, amount) {
    const system = System.getSystem();

    const bank1Record = {
      instrumentType: creditInstrumentsBySystem[system],
      notationType: "issuance",
      amount: amount,
      id: bank2.id,
      symbol: "+",
      name: bank2.name,
    };
    const bank2Record = {
      instrumentType: creditInstrumentsBySystem[system],
      notationType: "issuance",
      amount: amount,
      id: bank1.id,
      symbol: "+",
      name: bank1.name,
    };

    if (bank2.type === "clearinghouse") {
      insertLiabilitiesEntry(bank2.id, bank2Record);
    } else {
      insertAssetsEntry(bank2.id, bank2Record);
    }
    insertLiabilitiesEntry(bank1.id, bank1Record);
    const bank1Log = {
      id: bank1.id,
      action: `Credited $${amount} to ${bank2.name}`,
      symbol: "-",
    };
    const bank2Log = {
      id: bank2.id,
      action: `Received $${amount} from ${bank2.name}`,
      symbol: "+",
    };
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },
  debitAccount(bank1, bank2, amount) {
    const system = System.getSystem();
    const bank1Record = {
      instrumentType: creditInstrumentsBySystem[system],
      notationType: "setOff",
      amount: amount,
      id: bank2.id,
      symbol: "-",
      name: bank2.name,
    };
    const bank2Record = {
      instrumentType: creditInstrumentsBySystem[system],
      notationType: "setOff",
      amount: amount,
      id: bank1.id,
      symbol: "-",
      name: bank1.name,
    };
    insertAssetsEntry(bank1.id, bank1Record);
    insertLiabilitiesEntry(bank2.id, bank2Record);
    const bank1Log = {
      id: bank1.id,
      action: `Debited $${amount} from ${bank2.name}`,
      symbol: "+",
    };
    const bank2Log = {
      id: bank2.id,
      action: `$${amount} Debited from ${bank2.name}`,
      symbol: "-",
    };
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },
  increaseDues(bank1, bank2, amount) {
    const system = System.getSystem();
    const duesLiabilityRecord1 = {
      instrumentType: creditInstrumentsBySystem[system],
      notationType: "issuance",
      amount: amount,
      id: bank2.id,
      symbol: "+",
      name: bank2.name,
    };
    const duesAssetRecord2 = {
      instrumentType: creditInstrumentsBySystem[system],
      notationType: "issuance",
      amount: amount,
      id: bank1.id,
      symbol: "+",
      name: bank1.name,
    };

    insertLiabilitiesEntry(bank1.id, duesLiabilityRecord1);
    insertAssetsEntry(bank2.id, duesAssetRecord2);

    const bank1Log = {
      id: bank1.id,
      action: `$${amount} owed to ${bank2.name}`,
      symbol: "",
      aside: true,
    };
    const bank2Log = {
      id: bank2.id,
      action: `$${amount} owed from ${bank1.name}`,
      symbol: "",
      aside: true,
    };
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },
  decreaseDues(bank1, bank2, amount) {
    const system = System.getSystem();
    const duesLiabilityRecord1 = {
      instrumentType: creditInstrumentsBySystem[system],
      notationType: "setOff",
      amount: amount,
      id: bank2.id,
      symbol: "-",
      name: bank2.name,
    };
    const duesAssetRecord2 = {
      instrumentType: creditInstrumentsBySystem[system],
      notationType: "setOff",
      amount: amount,
      id: bank1.id,
      symbol: "-",
      name: bank1.name,
    };
    insertLiabilitiesEntry(bank1.id, duesLiabilityRecord1);
    insertAssetsEntry(bank2.id, duesAssetRecord2);

    const bank1Log = {
      id: bank1.id,
      action: `Paid $${amount} owed to ${bank1.name}`,
      symbol: "",
      // aside: true,
    };
    const bank2Log = {
      id: bank1.id,
      action: `Received $${amount} owed from ${bank2.name}`,
      symbol: "",
      // aside: true,
    };
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },
  fedFundsLoan(bank1, bank2, amount, interestRate) {
    const record1 = {
      instrumentType: "fed funds",
      notationType: "issuance",
      amount: amount,
      id: bank2.id,
      symbol: "+",
      name: bank2.name,
    };
    const record2 = {
      instrumentType: "fed funds",
      notationType: "issuance",
      amount: amount,
      id: bank1.id,
      symbol: "+",
      name: bank1.name,
    };
    insertLiabilitiesEntry(bank1.id, record1);
    insertAssetsEntry(bank1.id, record2);
    const bank1Log = {
      id: bank1.id,
      thirdPartyId: bank2.id,
      thirdPartyName: bank2.name,
      action: `Received $${amount} Fed Funds from ${bank2.name} at ${interestRate}% interest`,
      symbol: "-",
    };
    const bank2Log = {
      id: bank2.id,
      thirdPartyId: bank1.id,
      thirdPartyName: bank1.name,
      action: `Issued $${amount} Fed Funds from ${bank2.name} at ${interestRate}% interest`,
      symbol: "+",
    };
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },
  repayFedFundsLoan(bank1, bank2, amount) {
    const duesLiabilityRecord1 = {
      instrumentType: "fed funds",
      notationType: "setOff",
      amount: amount,
      id: bank2.id,
      symbol: "-",
      name: bank2.name,
    };
    const duesAssetRecord2 = {
      instrumentType: "fed funds",
      notationType: "setOff",
      amount: amount,
      id: bank1.id,
      symbol: "-",
      name: bank1.name,
    };
    insertLiabilitiesEntry(bank1.id, duesLiabilityRecord1);
    insertAssetsEntry(bank2.id, duesAssetRecord2);

    const bank1Log = {
      id: bank1.id,
      action: `Paid back $${amount} Fed Funds to ${bank2.name}`,
      symbol: "-",
    };
    const bank2Log = {
      id: bank1.id,
      action: `Received $${amount} Fed Funds from ${bank2.name}`,
      symbol: "+",
    };
    insertLog(bank1.id, bank1Log);
    insertLog(bank2.id, bank2Log);
  },
  get(id) {
    if (records.id === 0) {
      return { assets: undefined, liabilities: undefined };
    }

    const partyRecords = records.rounds[records.id - 1];
    return {
      assets: partyRecords.round[id].records.assets,
      liabilities: partyRecords.round[id].records.liabilities,
    };
  },
  getByRound(id) {
    if (records.id === 0) {
      return { assets: undefined, liabilities: undefined };
    }

    const partyRecords = records.rounds[records.id - 1];
    return {
      assets: partyRecords.round[id].records.assets,
      liabilities: partyRecords.round[id].records.liabilities,
    };
  },
  getLastTwo(id) {
    if (records.id === 0) {
      return { assets: undefined, liabilities: undefined };
    } else if (records.id === 1) {
      return this.getByRound(id);
    }
    const partyRecords1 = records.rounds[records.id - 2];
    const partyRecords2 = records.rounds[records.id - 1];
    return {
      assets: [
        ...partyRecords1.round[id].records.assets,
        ...partyRecords2.round[id].records.assets,
      ],
      liabilities: [
        ...partyRecords1.round[id].records.liabilities,
        ...partyRecords2.round[id].records.liabilities,
      ],
    };
  },
  getAllTransactions(id) {
    if (records.id === 0) {
      return { assets: undefined, liabilities: undefined };
    }
    if (records.id === 1) {
      return this.getByRound(id);
    }
    let allAssets = [];
    let allLiabilities = [];
    for (const round in records.rounds) {
      const rounds = records.rounds[round];
      allAssets.push(rounds.round[id].records.assets);
      allLiabilities.push(rounds.round[id].records.liabilities);
    }
    const flattenedAssets = allAssets.reduce((a, c) => {
      return a.concat(c);
    }, []);
    const flattenedLiabilities = allLiabilities.reduce((a, c) => {
      return a.concat(c);
    }, []);

    return { assets: flattenedAssets, liabilities: flattenedLiabilities };
  },
  getAll() {
    return records.parties;
  },
  setRound() {
    const thisRecords = this.getAll();
    const round = populateRound(thisRecords);
    records.rounds[records.id] = {
      id: records.id,
      round: JSON.parse(JSON.stringify(round)),
    };
    resetRecords();
    records.id++;
  },
};
function resetRecords() {
  for (const party in records.parties) {
    records.parties[party].records = { assets: [], liabilities: [] };
  }
}
function insertAssetsEntry(id: number, assetRecord: RecordDetail) {
  records.parties[id].records.assets.push(assetRecord);
}
function insertLiabilitiesEntry(id: number, liabilityRecord: RecordDetail) {
  records.parties[id].records.liabilities.push(liabilityRecord);
}
function insertLog(id: number, log: any) {
  records.partyLogs[id].log.push(log);
}
function populateRound(round) {
  const assetLengths = Object.keys(round).map(
    (id) => round[id].records.assets.length
  );

  const liabilityLengths = Object.keys(round).map(
    (id) => round[id].records.liabilities.length
  );

  const longestEntry = Math.max(...assetLengths, ...liabilityLengths);

  const populatedEntries = Object.keys(round).map((id) => {
    const assetsLength = round[id].records.assets.length;
    const liabilitiesLength = round[id].records.liabilities.length;
    if (longestEntry > liabilitiesLength) {
      const difference = longestEntry - liabilitiesLength;
      for (let i = 0; i < difference; i++) {
        round[id].records.liabilities.push(null);
      }
    }
    if (longestEntry > assetsLength) {
      const difference = longestEntry - assetsLength;
      for (let i = 0; i < difference; i++) {
        round[id].records.assets.push(null);
      }
    }
    return {
      assets: round[id].records.assets,
      liabilities: round[id].records.liabilities,
    };
  });

  Object.keys(round).forEach(
    (id, index) => (round[index].records = populatedEntries[index])
  );
  return round;
}

export const recs = {
  id: 0,
  parties: {},
  rounds: {},
  allIds: [],
};
function checkOverdraft(bank, centralbank, balance1, balance2, amount) {
  Record.setRound();
  if (balance1 < 0 && balance2 > 0) {
    const bank2Record2 = {
      instrumentType: "overdrafts",
      notationType: "setOff",
      amount,
      symbol: "-",
      id: centralbank.id,
      name: "C-Bank",
    };
    const bank2Record3 = {
      instrumentType: "deposits",
      notationType: "setOff",
      amount,
      symbol: "-",
      id: centralbank.id,
      name: "C-Bank",
    };
    const centralBankRecord3 = {
      instrumentType: "overdrafts",
      notationType: "setOff",
      amount,
      symbol: "-",
      id: bank.id,
      name: bank.name,
    };
    const centralBankRecord4 = {
      instrumentType: "deposits",
      notationType: "setOff",
      amount,
      symbol: "-",
      id: bank.id,
      name: bank.name,
    };
    insertLiabilitiesEntry(bank.id, bank2Record2);
    insertAssetsEntry(bank.id, bank2Record3);
    insertAssetsEntry(centralbank.id, centralBankRecord3);
    insertLiabilitiesEntry(centralbank.id, centralBankRecord4);
  }
}
