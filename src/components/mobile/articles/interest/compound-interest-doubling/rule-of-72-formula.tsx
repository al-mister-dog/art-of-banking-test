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
import Container from "../../../../shared-ui/widget-container/mobile";

export default function RuleOf72Formula() {
  const [rate, setRate] = useState(5);
  const [principal, setPrincipal] = useState(100);

  const theme = useMantineTheme();
  const output = 72 / rate;
  return (
    <Container color={theme.colors.indigo[0]}>
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
        <Title order={5} mt="sm" ml="xl">
          At {rate}% interest ${principal} will double in approximately {""}
          {Math.round(output)} years
        </Title>
      </Center>
      <Center>
        <Title order={5} mt="sm" mr="xl">
          72 / {rate} = {Math.round(output)}
        </Title>
      </Center>
    </Container>
  );
}
