import { bankData, clearBankData } from "../structures/objects";
import { BankingSystem } from "../banking-system";
import { BalanceSheets } from "../analytics/balancesheets";
import { Customer } from "../services/customer";

function setupParties() {
  clearBankData();
  BankingSystem.createBank("barclays", "bank", 100);
  BankingSystem.createBank("alex", "customer", 100);
  Customer.createAccount(bankData.banks[1], bankData.banks[0], 50);
}

test("customer should receive x deposits assets on loan creation", () => {
  setupParties();
  Customer.getLoan(bankData.banks[1], bankData.banks[0], 100);
  const alexAssets = BalanceSheets.getAccountAssets(bankData.banks[1]);
  expect(alexAssets[0].balance).toBe(150);
});
test("bank should receive x deposits liabilities on loan creation", () => {
  setupParties();
  Customer.getLoan(bankData.banks[1], bankData.banks[0], 100);
  const barclaysLiabilities = BalanceSheets.getLiabilities(bankData.banks[0]);
  expect(barclaysLiabilities[0].balance).toBe(150);
});
test("customer should receive loan liability on loan creation", () => {
  setupParties();
  Customer.getLoan(bankData.banks[1], bankData.banks[0], 100);
  const alexLiabilities = BalanceSheets.getCreditLiabilities(bankData.banks[1]);
  expect(alexLiabilities[0].balance).toBe(100);
});
test("bank should receive loan asset on loan creation", () => {
  setupParties();
  Customer.getLoan(bankData.banks[1], bankData.banks[0], 100);
  const barclaysAssets = BalanceSheets.getCreditAssets(bankData.banks[0]);
  expect(barclaysAssets[0].balance).toBe(100);
});
test("customer loan should decrease on repayment", () => {
  setupParties();
  Customer.getLoan(bankData.banks[1], bankData.banks[0], 100);
  Customer.repayLoanFromAccount(bankData.banks[1], bankData.banks[0], 50);
  const alexLiabilities = BalanceSheets.getCreditLiabilities(bankData.banks[1]);
  expect(alexLiabilities[0].balance).toBe(50);
});
test("bank loan should increase on repayment", () => {
  setupParties();
  Customer.getLoan(bankData.banks[1], bankData.banks[0], 100);
  Customer.repayLoanFromAccount(bankData.banks[1], bankData.banks[0], 50);
  const barclaysAssets = BalanceSheets.getCreditAssets(bankData.banks[0]);
  expect(barclaysAssets[0].balance).toBe(50);
});
test("loan should not appear on balance sheet if repaid", () => {
  setupParties();
  Customer.getLoan(bankData.banks[1], bankData.banks[0], 100);
  Customer.repayLoanFromAccount(bankData.banks[1], bankData.banks[0], 100);
  const barclaysAssets = BalanceSheets.getCreditAssets(bankData.banks[0]);
  const alexLiabilities = BalanceSheets.getCreditLiabilities(bankData.banks[1]);
  
  expect(barclaysAssets.length).toBe(0);
  expect(alexLiabilities.length).toBe(0);
});
