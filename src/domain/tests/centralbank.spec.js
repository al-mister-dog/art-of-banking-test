import {
  accountData,
  bankData,
  securitiesData,
  clearBankData,
} from "../structures/objects";
import { System } from "../system";
import { BankingSystem } from "../banking-system";
import { CentralBank } from "../services/centralbank";
import { Accounts } from "../services/accounts";
import { Display } from "../analytics/display";
import { Securities } from "../services/securities";
import { BalanceSheets } from "../analytics/balancesheets";

function setup() {
  clearBankData();
  System.setSystem("centralbank");
  BankingSystem.createBank("Bank 1", "bank", 0, 100);
  BankingSystem.createBank("Bank 2", "bank", 0, 100);
}

describe("treasury securities", () => {
  test("Treasury securities can be added", () => {
    setup();
    Securities.createSecurity(bankData.banks[0], "Treasury Bills", 100);
    expect(Securities.getSecuritiesById(0).length).toBe(1);
    expect(Securities.getSecuritiesById(0)[0].balance).toBe(100);
  });
  test("treasury securities increase for bank and decrease for central bank on central bank sell securities", () => {
    setup();
    Securities.createSecurity(bankData.banks[0], "Treasury Bills", 100);
    Securities.createSecurity(bankData.banks[1], "Treasury Bills", 100);
    CentralBank.sellSecurities(bankData.banks[1], 50);
    expect(Securities.getSecuritiesById(0)[0].balance).toBe(50);
    expect(Securities.getSecuritiesById(1)[0].balance).toBe(150);
  });
  test("bank deposits decrease on central bank sell securities", () => {
    setup();
    Securities.createSecurity(bankData.banks[0], "Treasury Bills", 100);
    Securities.createSecurity(bankData.banks[1], "Treasury Bills", 100);
    CentralBank.sellSecurities(bankData.banks[1], 50);
    expect(Accounts.getAccountByIds(1, 0).balance).toBe(50);
  });
  test("treasury securities decrease for bank and increase for central bank on central bank buy securities", () => {
    setup();
    Securities.createSecurity(bankData.banks[0], "Treasury Bills", 100);
    Securities.createSecurity(bankData.banks[1], "Treasury Bills", 100);
    CentralBank.buySecurities(bankData.banks[1], 50);
    expect(Securities.getSecuritiesById(0)[0].balance).toBe(150);
    expect(Securities.getSecuritiesById(1)[0].balance).toBe(50);
  });
  test("bank deposits increase on central bank buy securities", () => {
    setup();
    Securities.createSecurity(bankData.banks[0], "Treasury Bills", 100);
    Securities.createSecurity(bankData.banks[1], "Treasury Bills", 100);
    CentralBank.buySecurities(bankData.banks[1], 50);
    expect(Accounts.getAccountByIds(1, 0).balance).toBe(150);
  });
  test("shows correct balance sheet", () => {
    setup();
    Securities.createSecurity(bankData.banks[0], "Treasury Bills", 100);
    Securities.createSecurity(bankData.banks[1], "Treasury Bills", 100);
    CentralBank.buySecurities(bankData.banks[1], 50);
    CentralBank.getLoan(bankData.banks[1], bankData.banks[2], 10, 5, 5);
    CentralBank.transfer(bankData.banks[1], bankData.banks[2], 10);
  });
});

const result = {
  assets: [
    {
      instrument: "Bank Deposits",
      accounts: [
        {
          id: 0,
          subordinateId: 1,
          superiorId: 0,
          type: "Bank Deposits",
          balance: 150,
          category: "Bank Deposits",
          thirdPartyDetail: {
            id: 0,
            name: "Central Bank",
            type: "centralbank",
            accountIds: [0, 1],
            creditIds: [],
          },
        },
      ],
    },
    {
      instrument: "Reserves",
      accounts: [{ id: 1, cashReserves: 0, category: "Reserves", balance: 0 }],
    },
    {
      instrument: "undefined",
      accounts: [
        { 0: { id: 1, balance: 50, type: "Treasury Bills", maturity: 1 } },
      ],
    },
  ],
  liabilities: [],
};
