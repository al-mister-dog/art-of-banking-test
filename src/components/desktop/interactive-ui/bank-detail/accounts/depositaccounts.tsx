import { Table } from "@mantine/core";
const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
export default function Demo({ depositAccounts }) {
  const accounts = depositAccounts.accounts;
  console.log(accounts);
  const rows = accounts.map((account) => (
    <tr key={account.name}>
      <td>${account.balance}</td>
      <td>{account.thirdPartyDetail.name}</td>
      <td>{account.balance > 0}true</td>
    </tr>
  ));

  return (
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>Balance</th>
          <th>Account Holder</th>
          <th>In Credit</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
