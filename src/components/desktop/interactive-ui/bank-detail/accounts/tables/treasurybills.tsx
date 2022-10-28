import { Table } from "@mantine/core";

export default function TreasuryBills({ accounts }) {
  const rows = accounts.accounts.map((account) => (
    <tr key={account.id}>
      <td>{account.principal}</td>
      <td>{account.maturity} day</td>
      <td>{account.interest}%</td>
    </tr>
  ));

  return (
    <Table withBorder verticalSpacing="xs" fontSize="xs" highlightOnHover>
      <thead>
        <tr>
          <th>Principal Amount</th>
          <th>Maturity</th>
          <th>Interest Rate</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
