import {
  Box,
  Center,
  Grid,
  NumberInput,
  SimpleGrid,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Container from "./widget-container";

export default function SimpleInterestCalculator() {
  const [rate, setRate] = useState(5);
  const [principal, setPrincipal] = useState(100);

  const output = (principal / 100) * rate;

  return (
    <Container>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
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
      </Box>
      <Center>
        <Title order={5} mt="sm" align="left">
          ({principal} / 100) x {rate} = {output.toFixed(2)}
        </Title>
      </Center>
      <Center>
        <Title order={5} mt="sm" align="left">
          ${output.toFixed(2)} is {rate}% of ${principal}
        </Title>
      </Center>
    </Container>
  );
}
