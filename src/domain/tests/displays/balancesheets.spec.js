import { System } from "../../system";
import { Balancesheets } from "../../analytics/balancesheets-beta";
import { BankingSystem } from "../../banking-system";
import { Customer } from "../../services/customer";
import { Display } from "../../analytics/display";
import { bankData, clearBankData } from "../../structures/objects";

import { balanceSheetDisplay4, balanceSheetDisplay5 } from "./test-fixtures";

function setupParties() {
  clearBankData();
  //create some banks
  BankingSystem.createBank("barclays", "bank", 100);
  BankingSystem.createBank("hsbc", "bank", 100);

  //create some customers
  BankingSystem.createBank("alex", "customer", 100);
  BankingSystem.createBank("herbie", "customer", 100);
  BankingSystem.createBank("emma", "customer", 100);
  BankingSystem.createBank("benno", "customer", 100);

  Customer.createAccount(bankData.banks[2], bankData.banks[0], 50);
  Customer.createAccount(bankData.banks[3], bankData.banks[1], 50);
}

describe("displays for component rendering", () => {
  it("should be able to include reserves in balance sheet display", () => {
    System.setSystem("national");
    setupParties();
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
    Customer.transfer(
      75,
      bankData.banks[4],
      bankData.banks[5],
      bankData.banks[0],
      bankData.banks[1]
    );
    const balanceSheetDisplay = Display.balanceSheet(bankData.banks[0]);
    // expect(balanceSheetDisplay).toEqual(balanceSheetDisplay5);

    // console.log(JSON.stringify(Balancesheets.get(3)))
  });
});
