import { Table } from "@mantine/core";
const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
export default function Demo({ treasuries }) {
  const accounts = treasuries.accounts;
  const rows = accounts.map((account) => (
    <tr key={account.name}>
      <td>{account.principal}</td>
      <td>{account.maturity} day</td>
      <td>{account.interest}</td>
    </tr>
  ));

  return (
    <Table highlightOnHover>
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
