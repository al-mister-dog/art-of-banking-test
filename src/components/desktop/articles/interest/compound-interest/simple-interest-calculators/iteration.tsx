import {
  Box,
  Grid,
  NumberInput,
  SimpleGrid,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Container from "./widget-container";

export default function SimpleInterestCalculator() {
  const [rate, setRate] = useState(10);
  const [principal, setPrincipal] = useState(100);
  const [iterations, setIterations] = useState(10);

  const theme = useMantineTheme();

  const output = principal + (principal / 100) * (rate * iterations);
  return (
    <Container>
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
            <Title order={5} mt="sm" ml="xl">
              Initial Amount: {principal}
            </Title>
            <Title order={5} mt="sm" ml="xl">
              Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
              {output}
            </Title>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
