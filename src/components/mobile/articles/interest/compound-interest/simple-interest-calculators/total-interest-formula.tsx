import {
  Box,
  Center,
  Grid,
  NumberInput,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Container from "./widget-container";

export default function SimpleInterestCalculator() {
  const [interest, setInterest] = useState(5);
  const [principal, setPrincipal] = useState(100);

  const theme = useMantineTheme();

  const output = (principal / 100) * interest;
  return (
    <Container>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
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
      </Box>
      <Center>
        <Title order={5} mt="sm" align="left">
          Initial Amount: {principal}
        </Title>
      </Center>
      <Center>
        <Title order={5} mt="sm" align="left">
          Total after interest: {principal + output}
        </Title>
      </Center>
    </Container>
  );
}
