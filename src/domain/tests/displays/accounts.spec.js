import { setupFunctions } from "../../../config/setup-functions/setupFunctions";
import { Accounts } from "../../analytics/accounts";
describe("structures", () => {
  test("structure 1", () => {
    setupFunctions[1]();
    let bank1Account = Accounts.getAccounts(0);
    expect(Object.keys(bank1Account)).toEqual(["accounts"]);
    expect(bank1Account.accounts.length).toBe(1);
    expect(bank1Account.accounts[0].instrument).toBe("Customer Deposits");
    expect(bank1Account.accounts[0].accounts.length).toBe(1);
    expect(bank1Account.accounts[0].accounts[0].balance).toBe(100);
    let customer1Account = Accounts.getAccounts(1);
    expect(Object.keys(customer1Account)).toEqual(["accounts"]);
    expect(customer1Account.accounts.length).toBe(1);
    expect(customer1Account.accounts[0].instrument).toBe("Customer Deposits");
    expect(customer1Account.accounts[0].accounts[0].balance).toBe(100);
  });
  test("structure 2", () => {
    setupFunctions[2]();
    let bank1Account = Accounts.getAccounts(0);
    expect(Object.keys(bank1Account)).toEqual(["accounts"]);
    expect(bank1Account.accounts.length).toBe(1);
    expect(bank1Account.accounts[0].instrument).toBe("Customer Deposits");
    expect(bank1Account.accounts[0].accounts.length).toBe(2);
    expect(bank1Account.accounts[0].accounts[0].balance).toBe(100);
    let customer1Account = Accounts.getAccounts(1);
    expect(Object.keys(customer1Account)).toEqual(["accounts"]);
    expect(customer1Account.accounts.length).toBe(1);
    expect(customer1Account.accounts[0].instrument).toBe("Customer Deposits");
    expect(customer1Account.accounts[0].accounts[0].balance).toBe(100);
    let customer2Account = Accounts.getAccounts(1);
    expect(Object.keys(customer2Account)).toEqual(["accounts"]);
    expect(customer2Account.accounts.length).toBe(1);
    expect(customer2Account.accounts[0].instrument).toBe("Customer Deposits");
    expect(customer2Account.accounts[0].accounts[0].balance).toBe(100);
  });
  test("structure 3", () => {
    setupFunctions[10]();
    let bank1Account = Accounts.getAccounts(0);
    console.log(JSON.stringify(bank1Account));
    expect(Object.keys(bank1Account)).toEqual(["accounts"]);
    expect(bank1Account.accounts.length).toBe(3);
    expect(bank1Account.accounts[0].instrument).toBe("Dues");
    expect(bank1Account.accounts[0].accounts.length).toBe(4);
    expect(bank1Account.accounts[1].instrument).toBe("Bank Deposits");
    expect(bank1Account.accounts[1].accounts.length).toBe(4);
    expect(bank1Account.accounts[2].instrument).toBe("Customer Deposits");
    expect(bank1Account.accounts[2].accounts.length).toBe(1);
  });
});

const accounts = {
  accounts: [
    {
      instrument: "Dues",
      accounts: [
        {
          id: 0,
          subordinateId: 0,
          superiorId: 1,
          balance: 20,
          instrument: "Dues",
          principal: 20,
          netted: false,
          thirdPartyDetail: {
            id: 1,
            name: "Bank 2",
            type: "bank",
            accountIds: [0, 2, 3, 5, 7],
            creditIds: [0, 1, 2, 3],
          },
        },
        {
          id: 1,
          subordinateId: 1,
          superiorId: 0,
          balance: 15,
          instrument: "Dues",
          principal: 15,
          netted: false,
          thirdPartyDetail: {
            id: 1,
            name: "Bank 2",
            type: "bank",
            accountIds: [0, 2, 3, 5, 7],
            creditIds: [0, 1, 2, 3],
          },
        },
        {
          id: 4,
          subordinateId: 0,
          superiorId: 2,
          balance: 20,
          instrument: "Dues",
          principal: 20,
          netted: false,
          thirdPartyDetail: {
            id: 2,
            name: "Bank 3",
            type: "bank",
            accountIds: [1, 3, 4, 5, 8],
            creditIds: [2, 3, 4, 5],
          },
        },
        {
          id: 5,
          subordinateId: 2,
          superiorId: 0,
          balance: 10,
          instrument: "Dues",
          principal: 10,
          netted: false,
          thirdPartyDetail: {
            id: 2,
            name: "Bank 3",
            type: "bank",
            accountIds: [1, 3, 4, 5, 8],
            creditIds: [2, 3, 4, 5],
          },
        },
      ],
    },
    {
      instrument: "Bank Deposits",
      accounts: [
        {
          id: 0,
          subordinateId: 0,
          superiorId: 1,
          instrument: "Bank Deposits",
          balance: 100,
          thirdPartyDetail: {
            id: 1,
            name: "Bank 2",
            type: "bank",
            accountIds: [0, 2, 3, 5, 7],
            creditIds: [0, 1, 2, 3],
          },
        },
        {
          id: 1,
          subordinateId: 0,
          superiorId: 2,
          instrument: "Bank Deposits",
          balance: 100,
          thirdPartyDetail: {
            id: 2,
            name: "Bank 3",
            type: "bank",
            accountIds: [1, 3, 4, 5, 8],
            creditIds: [2, 3, 4, 5],
          },
        },
        {
          id: 2,
          subordinateId: 1,
          superiorId: 0,
          instrument: "Bank Deposits",
          balance: 100,
          thirdPartyDetail: {
            id: 1,
            name: "Bank 2",
            type: "bank",
            accountIds: [0, 2, 3, 5, 7],
            creditIds: [0, 1, 2, 3],
          },
        },
        {
          id: 4,
          subordinateId: 2,
          superiorId: 0,
          instrument: "Bank Deposits",
          balance: 100,
          thirdPartyDetail: {
            id: 2,
            name: "Bank 3",
            type: "bank",
            accountIds: [1, 3, 4, 5, 8],
            creditIds: [2, 3, 4, 5],
          },
        },
      ],
    },
    {
      instrument: "Customer Deposits",
      accounts: [
        {
          id: 6,
          subordinateId: 3,
          superiorId: 0,
          instrument: "Customer Deposits",
          balance: 85,
          thirdPartyDetail: {
            id: 3,
            name: "Customer 1",
            type: "customer",
            accountIds: [6],
            creditIds: [],
          },
        },
      ],
    },
  ],
};
