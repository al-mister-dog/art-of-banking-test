import { Table, useMantineTheme } from "@mantine/core";

export default function CompoundInterestTable({ graphResult }) {
  const theme = useMantineTheme();
  return (
    <Table
      verticalSpacing={5}
      striped
      withBorder
      withColumnBorders
      fontSize="xs"
      style={{ width: "85%", margin: "auto", marginBottom: "10px" }}
    >
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
