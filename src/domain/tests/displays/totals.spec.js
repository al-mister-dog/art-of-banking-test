import { System } from "../../system";
import { BankingSystem } from "../../banking-system";
import { Customer } from "../../services/customer";
import { bankData, clearBankData } from "../../structures/objects";
import { Totals } from "../../analytics/totals";

function setupParties() {
  clearBankData();
  BankingSystem.createBank("barclays", "bank", 100);
  BankingSystem.createBank("hsbc", "bank", 100);
  BankingSystem.createBank("alex", "customer", 100);
  BankingSystem.createBank("herbie", "customer", 100);
  BankingSystem.createBank("emma", "customer", 100);
  BankingSystem.createBank("benno", "customer", 100);
}

describe("accounts", () => {
  test("should total all accounts", () => {
    System.setSystem("national");
    setupParties();
    Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[3], bankData.banks[1], 50);
    Customer.createAccount(bankData.banks[4], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[5], bankData.banks[1], 50);
    const total = Totals.getTotalAccounts();
    expect(total).toBe(200);
  });

  test("should total individual accounts", () => {
    setupParties();
    Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[3], bankData.banks[1], 50);
    Customer.transfer(
      25,
      bankData.banks[2],
      bankData.banks[3],
      bankData.banks[0],
      bankData.banks[1]
    );
    const total = Totals.getTotalBankAccounts(bankData.banks[2]);
    expect(total).toBe(25);
  });
});

describe("liabilities", () => {
  test("should total deposit liabilities of an individual bank", () => {
    setupParties();
    Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[3], bankData.banks[0], 50);
    const total = Totals.getTotalCustomerDepositLiabilites(bankData.banks[0]);
    expect(total).toBe(100);
    Customer.transfer(
      25,
      bankData.banks[2],
      bankData.banks[3],
      bankData.banks[0]
    );
    expect(total).toBe(100);
  });
});

describe("assets", () => {
  test("should total deposit assets of an individual customer", () => {
    setupParties();
    Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[2], bankData.banks[1], 50);
    const total = Totals.getTotalCustomerDepositAssets(bankData.banks[2]);
    expect(total).toBe(100);
  });
  test("should get total assets", () => {
    System.setSystem("national");
    setupParties();
    Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[3], bankData.banks[1], 50);
    Customer.createAccount(bankData.banks[4], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[5], bankData.banks[1], 50);
    Customer.transfer(
      25,
      bankData.banks[2],
      bankData.banks[3],
      bankData.banks[0],
      bankData.banks[1]
    );
    Customer.transfer(
      10,
      bankData.banks[3],
      bankData.banks[2],
      bankData.banks[1],
      bankData.banks[0]
    );
    expect(Totals.getTotalAssets(bankData.banks[0])).toBe(10);
    expect(Totals.getTotalAssets(bankData.banks[1])).toBe(25);
  });
  test("should get total assets", () => {
    System.setSystem("national");
    setupParties();
    Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[3], bankData.banks[1], 50);
    Customer.createAccount(bankData.banks[4], bankData.banks[0], 50);
    Customer.createAccount(bankData.banks[5], bankData.banks[1], 50);
    Customer.transfer(
      25,
      bankData.banks[2],
      bankData.banks[3],
      bankData.banks[0],
      bankData.banks[1]
    );
    Customer.transfer(
      10,
      bankData.banks[3],
      bankData.banks[2],
      bankData.banks[1],
      bankData.banks[0]
    );
    expect(Totals.getTotalLiabilities(bankData.banks[0])).toBe(110);
    expect(Totals.getTotalLiabilities(bankData.banks[1])).toBe(125);
  });
});
