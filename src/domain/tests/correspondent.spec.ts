import { accounts1 } from "./accounts-fixtures";
import { Dues } from "../services/dues";
import { Display } from "../analytics/display";
import { BankingSystem } from "../banking-system";
import { Accounts } from "../services/accounts";
import { Banks } from "../services/bank";
import { Customer } from "../services/customer";
import { bankData, clearBankData, creditData } from "../structures/objects";
import { System } from "../system";

function setupParties() {
  clearBankData();
  System.setSystem("correspondent");
  BankingSystem.createBank("Bank 1", "bank", 200);
  BankingSystem.createBank("Bank 2", "bank", 200);
  Banks.createAccount(bankData.banks[0], bankData.banks[1], 100);
  Banks.createAccount(bankData.banks[1], bankData.banks[0], 100);
  BankingSystem.createBank("Customer 1", "customer", 100);
  BankingSystem.createBank("Customer 2", "customer", 100);
  Customer.createAccount(bankData.banks[2], bankData.banks[0], 100);
  Customer.createAccount(bankData.banks[3], bankData.banks[1], 100);
}

describe("Correspondent transactions", () => {
  it("Corresponding bank accounts should be created on create account", () => {
    setupParties();
    // expect(Accounts.get()).toEqual(accounts1);
  });
  it("dues accounts should be created on customer transfer", () => {
    setupParties();
    Customer.transfer(
      25,
      bankData.banks[2],
      bankData.banks[3],
      bankData.banks[0],
      bankData.banks[1]
    );
    expect(
      Display.balanceSheetObject(bankData.banks[1]).assets["Due Froms"][0]
        .balance
    ).toEqual(25);
    expect(
      Display.balanceSheetObject(bankData.banks[0]).liabilities["Due Tos"][0]
        .balance
    ).toEqual(25);
  });
  it("dues accounts should decrease after bank transfer from debtor bank", () => {
    setupParties();
    Customer.transfer(
      25,
      bankData.banks[2],
      bankData.banks[3],
      bankData.banks[0],
      bankData.banks[1]
    );
    Dues.decrease(
      bankData.banks[0],
      bankData.banks[1],
      "Customer Deposits",
      20
    );
    expect(Dues.get(bankData.banks[0], bankData.banks[1]).balance).toBe(5);
  });
  it("dues accounts should stay same after bank transfer", () => {
    setupParties();

    Customer.transfer(
      25,
      bankData.banks[2],
      bankData.banks[3],
      bankData.banks[0],
      bankData.banks[1]
    );
    Banks.transfer(bankData.banks[0], bankData.banks[1], 20);
    expect(Dues.get(bankData.banks[0], bankData.banks[1]).balance).toBe(25);
  });
  it("nets dues", () => {
    setupParties();
    Customer.transfer(
      25,
      bankData.banks[2],
      bankData.banks[3],
      bankData.banks[0],
      bankData.banks[1]
    );
    Customer.transfer(
      20,
      bankData.banks[3],
      bankData.banks[2],
      bankData.banks[1],
      bankData.banks[0]
    );
    expect(Dues.get(bankData.banks[0], bankData.banks[1]).balance).toBe(25);
    expect(Dues.get(bankData.banks[1], bankData.banks[0]).balance).toBe(20);
    Dues.net(bankData.banks[0], bankData.banks[1]);
    expect(Dues.get(bankData.banks[0], bankData.banks[1]).balance).toBe(
      25 - 20
    );
    expect(Dues.get(bankData.banks[1], bankData.banks[0]).balance).toBe(0);
  });
});
