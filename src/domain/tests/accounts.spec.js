import { bankData, clearBankData } from "../structures/objects";
import { Accounts } from "../services/accounts";
import { BankingSystem } from "../banking-system";
import { Banks } from "../services/bank";

function setupParties() {
  clearBankData();
  //create some banks
  BankingSystem.createBank("bank1", "bank", 100);
  BankingSystem.createBank("bank2", "bank", 100);

  //create some customers
  BankingSystem.createBank("customer1", "customer", 100);
  BankingSystem.createBank("herbie", "customer", 100);
}

describe("Account Get Methods", () => {
  test("receive an array of customer's accounts after creating accounts", () => {
    setupParties();
    Banks.createAccount(
      bankData.banks[2],
      bankData.banks[0],
      "Customer Deposits",
      50
    );
    Banks.createAccount(
      bankData.banks[2],
      bankData.banks[1],
      "Customer Deposits",
      50
    );

    const accounts = Accounts.getAllAccounts(bankData.banks[2]);

    expect(accounts.length).toBe(2);
  });
  test("receive an empty array of customer's accounts after creating accounts", () => {
    setupParties();
    const accounts = Accounts.getAllAccounts(bankData.banks[2]);
    expect(accounts.length).toBe(0);
  });

  describe("subordinate and superior accounts", () => {
    function setup() {
      clearBankData();
      BankingSystem.createBank("superior bank", "bank", 100);
      BankingSystem.createBank("subordinate bank 1", "bank", 100);
      BankingSystem.createBank("subordinate bank 2", "bank", 100);
      Banks.createAccount(
        bankData.banks[1],
        bankData.banks[0],

        100
      );
      Banks.createAccount(
        bankData.banks[2],
        bankData.banks[0],

        100
      );
    }
    test("receive an array of subordinate*1 accounts after creating accounts", () => {
      setup();
      const subordinateBank1Accounts = Accounts.getAllSubordinateAccounts(
        bankData.banks[1]
      );
      const subordinateBank2Accounts = Accounts.getAllSubordinateAccounts(
        bankData.banks[2]
      );
      expect(subordinateBank1Accounts.length).toBe(1);
      expect(subordinateBank1Accounts[0].superiorId).toBe(bankData.banks[0].id);
      expect(subordinateBank2Accounts.length).toBe(1);
      expect(subordinateBank2Accounts[0].superiorId).toBe(bankData.banks[0].id);
    });
    test("receive an array of superior*1 accounts after creating accounts", () => {
      setup();
      const superiorBankAccounts = Accounts.getAllSuperiorAccounts(
        bankData.banks[0]
      );
      expect(superiorBankAccounts.length).toBe(2);
      expect(superiorBankAccounts[0].subordinateId).toBe(bankData.banks[1].id);
      expect(superiorBankAccounts[1].subordinateId).toBe(bankData.banks[2].id);
    });
    test("receive an empty array of sub accounts if superior and vice versa", () => {
      setup();
      expect(Accounts.getAllSuperiorAccounts(bankData.banks[1]).length).toBe(0);
      expect(Accounts.getAllSuperiorAccounts(bankData.banks[2]).length).toBe(0);
      expect(Accounts.getAllSubordinateAccounts(bankData.banks[0]).length).toBe(
        0
      );
    });
  });
  describe("Mutual Accounts", () => {
    function setup() {
      clearBankData();
      BankingSystem.createBank("superior bank", "bank", 100);
      BankingSystem.createBank("subordinate bank", "bank", 100);
      Banks.createAccount(bankData.banks[1], bankData.banks[0], 100);
    }
    test("Should return an account with respective subordinate and superior ids", () => {
      setup();
      const mutualAccount = Accounts.getAccount(bankData.banks[1], bankData.banks[0]);
      expect(mutualAccount.subordinateId).toBe(bankData.banks[1].id);
      expect(mutualAccount.superiorId).toBe(bankData.banks[0].id);
    });
    test("Should return undefined if account not found", () => {
      setup();
      const mutualAccount = Accounts.getAccount(bankData.banks[0], bankData.banks[1]);
      expect(mutualAccount).toBe(undefined);
    });
    test("should return respective subordinate and superior accounts depending on argument placement", () => {
      Banks.createAccount(bankData.banks[0], bankData.banks[1]);
      const mutualAccount1 = Accounts.getAccount(
        bankData.banks[1],
        bankData.banks[0]
      );
      expect(mutualAccount1.subordinateId).toBe(bankData.banks[1].id);
      expect(mutualAccount1.superiorId).toBe(bankData.banks[0].id);
      const mutualAccount2 = Accounts.getAccount(
        bankData.banks[0],
        bankData.banks[1]
      );
      expect(mutualAccount2.subordinateId).toBe(bankData.banks[0].id);
      expect(mutualAccount2.superiorId).toBe(bankData.banks[1].id);
    });
  });
});
