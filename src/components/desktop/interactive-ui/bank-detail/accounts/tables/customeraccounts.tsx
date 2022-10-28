import { Table, Tooltip } from "@mantine/core";

export default function CustomerAccounts({ bank, accounts }) {
  const rows = accounts.accounts.map((account) => (
    <tr key={account.id}>
      <td>{account.thirdPartyDetail.name}</td>
      <td>${account.balance}</td>
      <td>{account.superiorId === bank.cardInfo.id ? "Vostro" : "Nostro"}</td>
    </tr>
  ));

  return (
    <Table withBorder verticalSpacing="xs" fontSize="xs" highlightOnHover>
      <thead>
        <tr>
          <th>Balance</th>
          <th>Account Holder</th>
          <th>Ledger</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
