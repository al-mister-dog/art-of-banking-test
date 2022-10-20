import { reservesData, ReservesData } from "../structures/objects";
import { Bank } from "../structures/types";

export const Reserves = {
  getReserves(bank: Bank) {
    return reservesData.accounts[bank.id];
  },
  getReservesById(id: number) {
    return reservesData.accounts[id];
  },
  increaseReserves(bank: Bank, amount: number) {
    let reserves = { ...reservesData.accounts[bank.id] };
    reserves.balance += amount;
    ReservesData.assignReservesAccounts(reserves);
  },
  decreaseReserves(bank: Bank, amount: number) {
    let reserves = { ...reservesData.accounts[bank.id] };
    reserves.balance -= amount;
    ReservesData.assignReservesAccounts(reserves);
  },
};
