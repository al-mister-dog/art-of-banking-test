import RefreshBalanceSheets from "./refresh-button";
import { Text, useMantineTheme } from "@mantine/core";
import Pill from "../../../shared-ui/components/Pill";
export default function Toolbar() {
  const theme = useMantineTheme();
  return (
    <Pill color={theme.colors.violet[0]}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RefreshBalanceSheets />
        <Text size="sm" color="violet" ml={5}>Refresh Balance Sheets</Text>
      </div>
    </Pill>
  );
}
