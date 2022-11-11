import { Card, Tabs, useMantineTheme } from "@mantine/core";
import { useAppSelector } from "../../../../app/hooks";
import { charts } from "../../../../config/charts";
import { colors } from "../../../../config/colorPalette";
import { selectActions } from "../../../../features/actions/actionsSlice";
import ChartPrivateCredit from "./linechart-private-credit";
import ChartBalances from "./barchart-balances";
import ChartCredit from "./linechart-credit";
import EffectiveRate from "./effective-rate-beta";

export default function Desktop() {
  const { currentLectureId } = useAppSelector(selectActions);
  const theme = useMantineTheme();

  return (
    <div style={{ height: "25rem" }}>
      <Card shadow="sm" style={{ backgroundColor: colors.background2 }}>
        {charts[currentLectureId] === "balances" && <ChartBalances />}
        {charts[currentLectureId] === "credit" && <ChartCredit />}
        {charts[currentLectureId] === "private credit" && (
          <ChartPrivateCredit />
        )}
        {charts[currentLectureId] === "weighted median" && <EffectiveRate />}
        {charts[currentLectureId] === "weighted median private credit" && (
          <CreditAndEffective />
        )}
      </Card>
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
