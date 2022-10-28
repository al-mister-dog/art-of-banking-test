import { Table } from "@mantine/core";

export default function DuesAccounts({ bank, accounts }) {
  const rows = accounts.accounts.map((account) => (
    <tr key={account.id}>
      <td>{account.thirdPartyDetail.name}</td>
      <td>${account.balance}</td>
      <td>{account.superiorId === bank.cardInfo.id ? "Due To" : "Due From"}</td>
      <td>{`${account.netted}`}</td>
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
          <th>Owed</th>
          <th>Type</th>
          <th>Netted</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
