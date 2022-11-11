import { useAppSelector } from "../../app/hooks";
import { selectActions } from "../../features/actions/actionsSlice";
import { Card, Grid, Tabs, useMantineTheme } from "@mantine/core";
import ChartPrivateCredit from "./interactive-ui/charts/linechart-private-credit";
import ChartBalances from "./interactive-ui/charts/barchart-balances";
import ChartCredit from "./interactive-ui/charts/linechart-credit";

import { charts } from "../../config/charts";
import EffectiveRate from "./interactive-ui/charts/effective-rate-beta";
import { colors } from "../../config/colorPalette";

export default function Desktop() {
  const { currentLectureId } = useAppSelector(selectActions);
  return (
    <div
      style={{
        position: "relative",
        height: `50vh`,
        marginTop: "30px",
        // backgroundColor: colors.background2,
      }}
    >
      {charts[currentLectureId] === "balances" && <ChartBalances />}
      {charts[currentLectureId] === "credit" && <ChartCredit />}
      {charts[currentLectureId] === "private credit" && <ChartPrivateCredit />}
      {charts[currentLectureId] === "weighted median" && <EffectiveRate />}
      {charts[currentLectureId] === "weighted median private credit" && (
        <CreditAndEffective />
      )}
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
        <ChartPrivateCredit />
      </Tabs.Panel>

      <Tabs.Panel value="credit" pt="xs">
        <EffectiveRate />
      </Tabs.Panel>
    </Tabs>
  );
}
