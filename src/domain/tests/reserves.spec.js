import { BankingSystem } from "../banking-system";
import { Reserves } from "../services/reserves";
import { Customer } from "../services/customer";
import { bankData, clearBankData } from "../structures/objects";

function setupParties() {
  clearBankData();
  //create some banks
  BankingSystem.createBank("Bank 1", "bank", 100);
  BankingSystem.createBank("Bank 2", "bank", 100);

  //create some customers
  BankingSystem.createBank("Customer 1", "customer", 100);
  BankingSystem.createBank("herbie", "customer", 100);
  BankingSystem.createBank("emma", "customer", 100);
  BankingSystem.createBank("benno", "customer", 100);

  bankData.banks[2];
  const herbie = bankData.banks[3];
  const emma = bankData.banks[4];
  const benno = bankData.banks[5];
}

describe("reserves", () => {
  describe("reserves structure", () => {
    test("reserves object should be related to a party by id", () => {
      setupParties();
      expect(Reserves.getReserves(bankData.banks[0]).id).toBe(
        bankData.banks[0].id
      );
      expect(Reserves.getReserves(bankData.banks[1]).id).toBe(
        bankData.banks[1].id
      );
      expect(Reserves.getReserves(bankData.banks[2]).id).toBe(
        bankData.banks[2].id
      );
      expect(Reserves.getReserves(bankData.banks[3]).id).toBe(
        bankData.banks[3].id
      );
      expect(Reserves.getReserves(bankData.banks[4]).id).toBe(
        bankData.banks[4].id
      );
      expect(Reserves.getReserves(bankData.banks[5]).id).toBe(
        bankData.banks[5].id
      );
    });
    test("reserves object should include id and cashReserves", () => {
      setupParties();
      expect(Object.keys(Reserves.getReserves(bankData.banks[0]))).toEqual([
        "id",
        "cashReserves",
        "category",
      ]);
    });
  });
  describe("cash reserves", () => {
    describe("customer cash reserves", () => {
      test("customer can add reserves on initialization", () => {
        setupParties();
        const reservesAccount = Reserves.getReserves(bankData.banks[2]);
        expect(reservesAccount.balance).toBe(100);
      });
      test("depositing into bank should decrease customer cash reserves", () => {
        setupParties();
        Customer.createAccount(bankData.banks[2], bankData.banks[0]);
        expect(Reserves.getReserves(bankData.banks[2]).balance).toBe(100);
        Customer.deposit(bankData.banks[2], bankData.banks[0], 50);
        expect(Reserves.getReserves(bankData.banks[2]).balance).toBe(50);
      });
      test("depositing into bank should increase bank cash reserves", () => {
        setupParties();
        Customer.createAccount(bankData.banks[2], bankData.banks[0]);
        expect(Reserves.getReserves(bankData.banks[0]).balance).toBe(100);
        Customer.deposit(bankData.banks[2], bankData.banks[0], 50);
        expect(Reserves.getReserves(bankData.banks[0]).balance).toBe(150);
      });
      test("withdrawing from bank should increase customer cash reserves", () => {
        setupParties();
        Customer.createAccount(bankData.banks[2], bankData.banks[0]);
        expect(Reserves.getReserves(bankData.banks[2]).balance).toBe(100);
        Customer.withdraw(bankData.banks[2], bankData.banks[0], 50);
        expect(Reserves.getReserves(bankData.banks[2]).balance).toBe(150);
      });
      test("withdrawing from bank should decrease bank cash reserves", () => {
        setupParties();
        Customer.createAccount(bankData.banks[2], bankData.banks[0]);
        expect(Reserves.getReserves(bankData.banks[0]).balance).toBe(100);
        Customer.withdraw(bankData.banks[2], bankData.banks[0], 50);
        expect(Reserves.getReserves(bankData.banks[0]).balance).toBe(50);
      });
    });
  });
});
