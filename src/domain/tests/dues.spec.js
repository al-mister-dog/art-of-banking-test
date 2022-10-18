import { System } from "../system";
import { BankingSystem } from "../banking-system";
import { Customer } from "../services/customer";
import { bankData, clearBankData } from "../structures/objects";
import { Dues } from "../services/dues";

function setupParties() {
  clearBankData();
  //create some banks
  BankingSystem.createBank("barclays", "bank", 100);
  BankingSystem.createBank("hsbc", "bank", 100);

  //create some customers
  BankingSystem.createBank("alex", "customer", 100);
  BankingSystem.createBank("herbie", "customer", 100);

  Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
  Customer.createAccount(bankData.banks[3], bankData.banks[1], 50);
}

describe("transfers based on system", () => {
  describe("national system", () => {
    test("transfer amount should be due from bank of customer who sent transfer", () => {
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
    test("due balance should increase on subsequent transfers", () => {
      System.setSystem("national");
      setupParties();
      const arr = [1, 2, 3, 4, 5];
      arr.forEach((n) => {
        Customer.transfer(
          25,
          bankData.banks[2],
          bankData.banks[3],
          bankData.banks[0],
          bankData.banks[1]
        );
        expect(Dues.get(bankData.banks[0], bankData.banks[1]).balance).toBe(
          25 * n
        );
      });
    });
    test("there should be two dues accounts representing two way transfers", () => {
      System.setSystem("national");
      setupParties();
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
      expect(Dues.get(bankData.banks[0], bankData.banks[1]).balance).toBe(25);
      expect(Dues.get(bankData.banks[1], bankData.banks[0]).balance).toBe(10);
    });
    test("randomised test", () => {
      System.setSystem("national");
      setupParties();
      const rand1 = Math.floor(Math.random() * 50);
      const rand2 = Math.floor(Math.random() * 50);
      let amount1 = 0;
      let amount2 = 0;
      const arr = [1, 2, 3, 4, 5];
      arr.forEach(() => {
        Customer.transfer(
          rand1,
          bankData.banks[2],
          bankData.banks[3],
          bankData.banks[0],
          bankData.banks[1]
        );
        Customer.transfer(
          rand2,
          bankData.banks[3],
          bankData.banks[2],
          bankData.banks[1],
          bankData.banks[0]
        );
        amount1 += rand1;
        amount2 += rand2;
      });
      expect(Dues.get(bankData.banks[0], bankData.banks[1]).balance).toBe(
        amount1
      );
      expect(Dues.get(bankData.banks[1], bankData.banks[0]).balance).toBe(
        amount2
      );
    });
  });
});
