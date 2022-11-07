import {
  Box,
  Center,
  Grid,
  NumberInput,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import WidgetCaption from "../../../../shared-ui/texts/Widget-Caption";
import Container from "../../../../shared-ui/widget-container/mobile";

export default function ExactDoublingFormula() {
  const [rate, setRate] = useState(5);
  const [principal, setPrincipal] = useState(100);

  function getDoublingTime(r: number) {
    const rate = r / 100;
    return (Math.log(2) / Math.log(1 + rate)).toFixed(2);
  }

  const theme = useMantineTheme();
  const output = getDoublingTime(rate);
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
      <Center mt={20}>
        <WidgetCaption>log(2) / log({rate}/100) = {output}</WidgetCaption>
      </Center>
      <Center mt={20}>
        <WidgetCaption>
          At {rate}% interest ${principal} will double in exactly {output} years
        </WidgetCaption>
      </Center>
    </Container>
  );
}
