import { System } from "../system";

import { BankingSystem } from "../banking-system";
import { Customer } from "../services/customer";
import { accountData, bankData, clearBankData } from "../structures/objects";

import { Dues } from "../services/dues";
import { accounts1 } from "./system-test-fixtures";

function setupParties() {
  clearBankData();
  //create some banks
  BankingSystem.createBank("Bank 1", "bank", 100);
  BankingSystem.createBank("Bank 2", "bank", 100);

  //create some customers
  BankingSystem.createBank("Customer 1", "customer", 100);
  BankingSystem.createBank("Customer 2", "customer", 100);
  BankingSystem.createBank("emma", "customer", 100);
  BankingSystem.createBank("benno", "customer", 100);

  Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
  Customer.createAccount(bankData.banks[3], bankData.banks[1], 50);
}

describe("transfers based on system", () => {
  describe("each system", () => {
    test("setting a system should change system literal", () => {
      System.setSystem("centralbank");
      expect(System.getSystem()).toBe("centralbank");
      System.setSystem("chips");
      expect(System.getSystem()).toBe("chips");
      System.setSystem("clearinghouse");
      expect(System.getSystem()).toBe("clearinghouse");
      System.setSystem("correspondent");
      expect(System.getSystem()).toBe("correspondent");
      System.setSystem("national");
      expect(System.getSystem()).toBe("national");
    });
    describe("initialisation", () => {
      test("clearinghouse: a clearinghouse bank should be created", () => {
        clearBankData();
        System.setSystem("clearinghouse");
        BankingSystem.createBank("bankData.banks[0]", "bank", 100);
        BankingSystem.createBank("bankData.banks[1]", "bank", 100);
        expect(Object.keys(bankData.allIds)).toEqual(["0", "1", "2"]);
        expect(BankingSystem.getBankById(0).name).toEqual("Clearing House");
      });
    });
    describe("creating accounts", () => {
      describe("clearinghouse", () => {
        test("bank open accounts with clearinghouse on creation", () => {
          clearBankData();
          System.setSystem("clearinghouse");
          BankingSystem.createBank("Bank 1", "bank", 100);
          BankingSystem.createBank("Bank 2", "bank", 100);
          // expect(accountData.accounts).toEqual(accounts1);
        });
        test("customers do not open account with clearinghouse on creation", () => {
          clearBankData();
          System.setSystem("clearinghouse");
          BankingSystem.createBank("bankData.banks[0]", "bank", 100);
          BankingSystem.createBank("bankData.banks[1]", "bank", 100);
          BankingSystem.createBank("bankData.banks[2]", "customer", 100);
          // expect(accountData.accounts).toEqual(accounts1);
        });
      });
    });
    describe("dues accounts should differ depending on system", () => {
      test("national: transfer dues are betweeen banks", () => {
        System.setSystem("national");
        setupParties();
        Customer.transfer(
          25,
          bankData.banks[2],
          bankData.banks[3],
          bankData.banks[0],
          bankData.banks[1]
        );
        const dues = Dues.get(bankData.banks[0], bankData.banks[1]);
        expect(dues.subordinateId).toBe(bankData.banks[0].id);
        expect(dues.superiorId).toBe(bankData.banks[1].id);
        expect(dues.type).toBe("Customer Deposits");
        expect(dues.balance).toBe(25);
      });
    });
  });
  // describe('national', () => {})
});
