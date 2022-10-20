import {
  BankData,
  bankData,
  records,
  reservesData,
} from "./structures/objects";
import { Bank } from "./structures/types";
import { System } from "./system";

export const BankingSystem = {
  createBank(
    name: string,
    type: string,
    reserves: number = 0,
    initialDeposit?: number
  ) {
    this.addReservesAccount(reserves);
    this.addRecords();
    this.addBank(name, type, initialDeposit);
    bankData.id++;
  },
  getBank(bank: Bank) {
    return bankData.banks[bank.id];
  },
  getBankById(id: number) {
    return bankData.banks[id];
  },
  addReservesAccount(reserves) {
    const newReserves = {
      id: reservesData.id,
      cashReserves: reserves,
      balance: reserves,
      category: "Reserves",
      instrument: "Reserves",
    };
    reservesData.accounts[reservesData.id] = newReserves;
    reservesData.allIds.push(reservesData.id);
    reservesData.id++;
  },
  addRecords() {
    const id = records.id;
    records.parties[id] = {
      id,
      records: { assets: [], liabilities: [] },
    };
    records.partyLogs[id] = {
      id,
      log: [],
    };
    records.id++;
  },
  addBank(name: string, type: string, initialDeposit?: number) {
    const id = bankData.id;
    const newBank = {
      id,
      name,
      type,
      accountIds: [],
      creditIds: [],
    };
    let newBankData = JSON.parse(JSON.stringify(bankData));
    let banks = newBankData.banks;
    banks = { ...banks, [id]: newBank };
    newBankData.banks = banks;
    newBankData.allIds.push(bankData.id);
    BankData.assign(newBankData);
    System.joinSystem(newBank, initialDeposit);
  },
};
