import {
  Box,
  Grid,
  NumberInput,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";

export default function SimpleInterestCalculator() {
  const [interest, setInterest] = useState(10);
  const [principal, setPrincipal] = useState(100);
  const [iterations, setIterations] = useState(10);
  const theme = useMantineTheme();
  const simpleInterestOutput =
    principal + (principal / 100) * (interest * iterations);

  const compoundInterest = principal * Math.pow(1 + interest / 100, iterations);

  return (
    <Box
      style={{
        width: "70vw",
        margin: "auto",
        marginTop: "-25px",
        padding: "25px",
        border: `1px solid ${theme.colors.violet[1]}`,
      }}
    >
      <Grid grow>
        <Grid.Col span={4}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "space-between",
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
              value={interest}
              onChange={(val) => {
                if (isNaN(val)) {
                  val = 0;
                } else if (val > 100) {
                  val = 100;
                }
                setInterest(val);
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
        <Grid.Col style={{borderLeft: `1px solid ${theme.colors.violet[1]}`}}span={5}>
          <Box style={{ margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Text  >Initial Amount: ${principal}</Text>
            <Text  size="xs" mt="lg">
              Simple Interest
            </Text>
            <Title  order={5}>
              Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
              {simpleInterestOutput.toFixed(2)}
            </Title>
            <Text  size="xs" mt="lg">
              Compound Interest
            </Text>
            <Title  order={5}>
              Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
              {compoundInterest.toFixed(2)}
            </Title>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
