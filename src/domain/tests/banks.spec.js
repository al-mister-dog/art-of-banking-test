import { BankingSystem } from "../banking-system";
import { bankData, clearBankData } from "../structures/objects";

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
}

describe("initialise parties", () => {
  setupParties();

  test.each([
    { party: bankData.banks[0], id: 0 },
    { party: bankData.banks[1], id: 1 },
    { party: bankData.banks[2], id: 2 },
    { party: bankData.banks[3], id: 3 },
    { party: bankData.banks[4], id: 4 },
    { party: bankData.banks[5], id: 5 },
  ])("increment party ids in order of creation", ({ party, id }) => {
    expect(party.id).toBe(id);
  });
});

describe("clearing data", () => {
  setupParties();

  test.each([
    { party: bankData.banks[0], id: 0 },
    { party: bankData.banks[1], id: 1 },
    { party: bankData.banks[2], id: 2 },
    { party: bankData.banks[3], id: 3 },
    { party: bankData.banks[4], id: 4 },
    { party: bankData.banks[5], id: 5 },
  ])("bankdata id should be reset to 0", ({ party, id }) => {
    expect(party.id).toBe(id);
  });
});
