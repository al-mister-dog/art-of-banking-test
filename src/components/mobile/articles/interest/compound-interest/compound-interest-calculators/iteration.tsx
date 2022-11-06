import { useState } from "react";
import { Box, Grid, NumberInput, Text, useMantineTheme } from "@mantine/core";
import Container from "../../../../../shared-ui/widget-container/mobile";
import WidgetCaption from "../../../../../shared-ui/texts/Widget-Caption";

export default function SimpleInterestCalculator() {
  const [rate, setRate] = useState(10);
  const [principal, setPrincipal] = useState(100);
  const [iterations, setIterations] = useState(10);

  const theme = useMantineTheme();

  const simpleInterestOutput =
    principal + (principal / 100) * (rate * iterations);
  const compoundInterestOutput =
    principal * Math.pow(1 + rate / 100, iterations);

  return (
    <Container color={theme.colors.violet[0]}>
      <Grid grow>
        <Grid.Col span={4}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <NumberInput
              defaultValue={18}
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
              defaultValue={18}
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
          </Box>
        </Grid.Col>
        <Grid.Col
          style={{ borderLeft: `1px solid ${theme.colors.violet[1]}` }}
          span={5}
        >
          <Box
            style={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
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
              Compound Interest
            </Text>
            <WidgetCaption>
              Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
              {compoundInterestOutput.toFixed(2)}
            </WidgetCaption>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
