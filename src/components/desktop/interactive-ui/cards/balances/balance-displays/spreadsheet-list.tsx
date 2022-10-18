import { SimpleGrid, useMantineTheme } from "@mantine/core";
import SpreadsheetRow from "./spreadsheet-row";

export default function SpreadsheetList({ assets, liabilities, bank }) {
  const theme = useMantineTheme();
  return (
    <SimpleGrid
      cols={2}
      spacing={0}
      style={{ height: "10rem", overflowX: "hidden" }}
    >
      <div style={{ borderRight: `1px solid ${theme.colors[bank.color][2]}` }}>
        {assets.map((record: any, index: number) => {
          return <SpreadsheetRow key={index} record={record} bank={bank} />;
        })}
      </div>
      <div>
        {liabilities.map((record: any, index: number) => {
          return <SpreadsheetRow key={index} record={record} bank={bank} />;
        })}
      </div>
    </SimpleGrid>
  );
}
