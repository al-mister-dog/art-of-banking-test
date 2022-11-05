import {
  Box,
  Text,
  Grid,
  NumberInput,
  SimpleGrid,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Container from "../../../../shared-ui/widget-container/desktop";

export default function SimpleInterestCalculator() {
  const [rate, setRate] = useState(10);
  const [principal, setPrincipal] = useState(100);
  const [iterations, setIterations] = useState(10);

  const theme = useMantineTheme();
  const ruleOutput = 72 / rate;
  const compoundInterestOutput =
    principal * Math.pow(1 + rate / 100, iterations);

  return (
    <Container color={theme.colors.indigo[0]}>
      <Grid grow>
        <Grid.Col
          span={4}
          style={{ borderRight: `1px solid ${theme.colors.blue[1]}` }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
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
              value={iterations}
              onChange={(val) => {
                if (isNaN(val)) {
                  val = 0;
                }
                setIterations(val);
              }}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={5}>
          <SimpleGrid cols={2}>
            <div>
              <Text mt="sm" ml="md">
                Rule of 72
              </Text>
              <Title order={5} mt="sm" ml="md">
                72 / {rate} = {Math.round(ruleOutput)} (years)
              </Title>
            </div>
            <div>
              <Text mt="sm" ml="md">
                (A = P(1+r)^t)
              </Text>
              <Title order={5} mt="sm" ml="md">
                Total After {iterations} {iterations === 1 ? "Year" : "Years"}:
                ${compoundInterestOutput.toFixed(2)}
              </Title>
            </div>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
