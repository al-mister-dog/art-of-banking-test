import { Table, useMantineTheme } from "@mantine/core";

export default function CompoundInterestTable({ graphResult }) {
  const theme = useMantineTheme();
  return (
    <Table
      verticalSpacing="xs"
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
            <td>
              <span style={{ color: theme.colors.green[9] }}>
                ${element.interest}
              </span>{" "}
              /{" "}
              <span style={{ color: theme.colors.red[9] }}>
                ${element.realInterest}
              </span>
            </td>
            <td>
              <span style={{ color: theme.colors.green[9] }}>
                ${element.accruedInterest}
              </span>{" "}
              /{" "}
              <span style={{ color: theme.colors.red[9] }}>
                ${element.realAccruedInterest}
              </span>
            </td>
            <td>
              <span style={{ color: theme.colors.green[9] }}>
                ${element.balance}
              </span>{" "}
              /{" "}
              <span style={{ color: theme.colors.red[9] }}>
                ${element.realBalance}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
