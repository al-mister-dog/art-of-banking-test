import { Table } from "@mantine/core";

export default function DepositAccounts({ bank, accounts }) {
  const rows = accounts.accounts.map((account) => (
    <tr key={account.id}>
      <td>{account.thirdPartyDetail.name}</td>
      <td>${account.balance}</td>
      <td>{account.superiorId === bank.cardInfo.id ? "Vostro" : "Nostro"}</td>
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
          <th>Balance</th>
          <th>Ledger</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
