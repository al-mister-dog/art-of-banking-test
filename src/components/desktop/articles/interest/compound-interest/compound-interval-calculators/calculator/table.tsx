import { Table, useMantineTheme } from "@mantine/core";

interface Props {
  graphResult: any;
  interval: string;
  compoundPeriod?: string;
}

const cpLabels = {
  Annually: 1,
  "Semi-Annually": 2,
  Quarterly: 4,
  Monthly: 12,
  Weekly: 52,
  Daily: 365,
};

export default function CompoundInterestTable({
  graphResult,
  interval,
  compoundPeriod,
}: Props) {
  const theme = useMantineTheme();
  let cpLabel = undefined;
  if (compoundPeriod) {
    cpLabel = cpLabels[compoundPeriod];
  }

  function getBackgroundRow(i: number) {
    let backgroundColor = "";
    if (interval === "Month") {
      if (i % 12 === 0) {
        backgroundColor = theme.colors.green[0];
      } else if (i % (12 / cpLabel) === 0) {
        backgroundColor = theme.colors.blue[0];
      }
    }
    return backgroundColor;
  }

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
          <th>{interval}</th>
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
        {graphResult.map((element, i) => (
          <tr
            key={element.year}
            style={{
              display: "table",
              width: "100%",
              tableLayout: "fixed",
              backgroundColor: getBackgroundRow(i),
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
