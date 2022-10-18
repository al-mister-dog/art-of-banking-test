
import { selectActions } from "../../features/actions/actionsSlice";
import { Card, Grid, useMantineTheme } from "@mantine/core";
import ChartPrivateCredit from "./interactive-ui/charts/linechart-private-credit";
import ChartBalances from "./interactive-ui/charts/barchart-balances";
import ChartCredit from "./interactive-ui/charts/linechart-credit";
import SettingsDesktop from "./interactive-ui/settings/container";
import EffectiveRate from "./interactive-ui/charts/effective-rate-beta";
import { charts } from "../../config/charts";
import { useAppSelector } from "../../app/hooks";

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
          <Card style={{ backgroundColor: theme.colors.violet[1] }}>
            {charts[currentLectureId] === "balances" && <ChartBalances />}
            {charts[currentLectureId] === "credit" && <ChartCredit />}
            {charts[currentLectureId] === "private credit" && (
              <ChartPrivateCredit />
            )}
            {charts[currentLectureId] === "weighted median" && (
              <EffectiveRate />
            )}
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
