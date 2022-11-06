import { useState } from "react";
import {
  Box,
  Grid,
  NumberInput,
  Select,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Container from "../../../../../shared-ui/widget-container/mobile";
import WidgetCaption from "../../../../../shared-ui/texts/Widget-Caption";

export const compoundPeriods = [
  {
    value: 1,
    label: "Annually",
  },
  {
    value: 2,
    label: "Semi-annually",
  },
  {
    value: 4,
    label: "Quarterly",
  },
  {
    value: 12,
    label: "Monthly",
  },
  {
    value: 52,
    label: "Weekly",
  },
  {
    value: 365,
    label: "Daily",
  },
];

export default function SimpleInterestCalculator() {
  const [rate, setRate] = useState(10);
  const [principal, setPrincipal] = useState(100);
  const [iterations, setIterations] = useState(10);
  const [compoundPeriod, setCompoundPeriod] = useState(1);
  const theme = useMantineTheme();

  const simpleInterestOutput =
    principal + (principal / 100) * (rate * iterations);
  const compoundInterestOutput =
    principal * Math.pow(1 + rate / 100, iterations);
  const compoundIntervalOutput =
    principal *
    Math.pow(1 + rate / compoundPeriod / 100, compoundPeriod * iterations);
  return (
    <Container color={theme.colors.grape[0]}>
      <Grid grow>
        <Grid.Col span={3}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <NumberInput
              label="Principal Amount"
              radius="xs"
              size="xs"
              min={0}
              max={1000}
              value={principal}
              onChange={(val) => {
                if (isNaN(val)) {
                  val = 0;
                } else if (val > 1000) {
                  val = 1000;
                }
                setPrincipal(val);
              }}
            />
            <NumberInput
              label="Interest Rate"
              radius="xs"
              size="xs"
              min={0}
              max={100}
              value={rate}
              onChange={(val) => {
                if (isNaN(val)) {
                  val = 0;
                } else if (val > 100) {
                  val = 100;
                }
                setRate(val);
              }}
            />
            <NumberInput
              defaultValue={18}
              label="Iterations"
              radius="xs"
              size="xs"
              min={0}
              max={100}
              value={iterations}
              onChange={(val) => {
                if (isNaN(val)) {
                  val = 0;
                }
                if (val > 100) {
                  val = 100;
                }
                setIterations(val);
              }}
            />
            <CompoundPeriod
              value={compoundPeriod}
              setValue={setCompoundPeriod}
              data={compoundPeriods}
            />
          </Box>
        </Grid.Col>
        <Grid.Col
          style={{ borderLeft: `1px solid ${theme.colors.violet[1]}` }}
          span={5}
        >
          <Text>Initial Amount: ${principal}</Text>
          <Text size="xs" mt="lg">
            Simple Interest
          </Text>
          <WidgetCaption>
            Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
            {simpleInterestOutput.toFixed(2)}
          </WidgetCaption>
          <Text size="xs" mt="lg">
            Compound Interval: Annually
          </Text>
          <WidgetCaption>
            Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
            {compoundInterestOutput.toFixed(2)}
          </WidgetCaption>
          <Text size="xs" mt="lg">
            Compound Interval :{" "}
            {compoundPeriods.find((c) => c.value === compoundPeriod).label}
          </Text>
          <WidgetCaption>
            Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
            {compoundIntervalOutput.toFixed(2)}
          </WidgetCaption>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

function CompoundPeriod({ value, setValue, data }) {
  return (
    <Select
      label="Compound Period"
      size="xs"
      value={value}
      onChange={setValue}
      data={data}
    />
  );
}
