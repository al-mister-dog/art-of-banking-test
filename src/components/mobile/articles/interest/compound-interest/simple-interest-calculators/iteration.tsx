import {
  Box,
  Center,
  NumberInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Container from "../../../../../shared-ui/widget-container/mobile";

export default function SimpleInterestCalculator() {
  const [rate, setRate] = useState(10);
  const [principal, setPrincipal] = useState(100);
  const [iterations, setIterations] = useState(10);

  const theme = useMantineTheme();

  const output = principal + (principal / 100) * (rate * iterations);
  return (
    <Container color={theme.colors.indigo[0]}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
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
      <Center>
        <Title order={5} mt="sm" align="left">
          Initial Amount: {principal}
        </Title>
      </Center>

      <Center>
        <Title order={5} mt="sm" align="left">
          Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
          {output}
        </Title>
      </Center>
    </Container>
  );
}
