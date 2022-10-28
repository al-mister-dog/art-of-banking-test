import { Table } from "@mantine/core";

export default function LoansAccounts({ bank, accounts }) {

  const rows = accounts.accounts.map((account) => (
    <tr key={account.id}>
      <td>{account.thirdPartyDetail.name}</td>
      <td>${account.balance}</td>
      <td>{account.interest}%</td>
      <td>{account.superiorId === bank.cardInfo.id ? "Loan To" : "Loan From"}</td>
      <td>{account.balance === 0 ? "True" : "False"}</td>
    </tr>
  ));

  return (
    <Table
      withBorder
      verticalSpacing="xs"
      fontSize="xs"
      highlightOnHover
      style={{ maxHeight: "11.5rem", overflow: "auto" }}
    >
      <thead>
        <tr>
          <th>Account</th>
          <th>Amount</th>
          <th>Interest</th>
          <th>Type</th>
          <th>Paid</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

/**
 * Algorithm
 * If subordinate account Header = Loan From
 * If superior account Header = Loan To
 * 
 * If balance === 0 Paid = true : Paid = false
 */