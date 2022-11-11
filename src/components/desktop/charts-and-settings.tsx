import { selectActions } from "../../features/actions/actionsSlice";
import { Card, Grid, Tabs, useMantineTheme } from "@mantine/core";
import ChartPrivateCredit from "./interactive-ui/charts/linechart-private-credit";
import ChartBalances from "./interactive-ui/charts/barchart-balances";
import ChartCredit from "./interactive-ui/charts/linechart-credit";
import SettingsDesktop from "./interactive-ui/settings/container";
import EffectiveRate from "./interactive-ui/charts/effective-rate-beta";
import { charts } from "../../config/charts";
import { useAppSelector } from "../../app/hooks";
import { colors } from "../../config/colorPalette";

export default function Desktop() {
  const { currentLectureId } = useAppSelector(selectActions);
  const theme = useMantineTheme();

  return (
    <div style={{ height: "25rem" }}>
      <Grid grow>
        <Grid.Col span={1}>
          <SettingsDesktop />
        </Grid.Col>
        <Grid.Col span={3}>
          <Card shadow="sm" style={{ backgroundColor: colors.background2 }}>
            {charts[currentLectureId] === "balances" && <ChartBalances />}
            {charts[currentLectureId] === "credit" && <ChartCredit />}
            {charts[currentLectureId] === "private credit" && (
              <ChartPrivateCredit />
            )}
            {charts[currentLectureId] === "weighted median" && (
              <EffectiveRate />
            )}
            {charts[currentLectureId] === "weighted median private credit" && (
              <CreditAndEffective />
            )}
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

function CreditAndEffective() {
  return (
    <Tabs defaultValue="effective">
      <Tabs.List>
        <Tabs.Tab value="effective">Effective Rate</Tabs.Tab>
        <Tabs.Tab value="credit">Private Credit</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="effective" pt="xs">
        <EffectiveRate />
      </Tabs.Panel>

      <Tabs.Panel value="credit" pt="xs">
        <ChartPrivateCredit />
      </Tabs.Panel>
    </Tabs>
  );
}
