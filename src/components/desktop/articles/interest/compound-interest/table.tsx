import { Table } from "@mantine/core";

export default function CompoundInterestTable({ graphResult }) {
  return (
    <Table style={{width: "95%", margin: "auto"}}>
      <thead>
        <tr
          style={{
            display: "table",
            width: "100%",
            tableLayout: "fixed",
          }}
        >
          <th>Year</th>
          <th>Interest</th>
          <th>Accrued Interest</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody
        style={{
          display: "block",
          height: "250px",
          overflow: "auto",
        }}
      >
        {graphResult.map((element) => (
          <tr
            key={element.year}
            style={{
              display: "table",
              width: "100%",
              tableLayout: "fixed",
            }}
          >
            <td>{element.year}</td>
            <td>${element.interest}</td>
            <td>${element.accruedInterest}</td>
            <td>${element.balance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
