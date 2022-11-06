import { useState } from "react";
import { Box, Center, NumberInput, useMantineTheme } from "@mantine/core";
import Container from "../../../../../shared-ui/widget-container/mobile";
import WidgetCaption from "../../../../../shared-ui/texts/Widget-Caption";

export default function SimpleInterestCalculator() {
  const [interest, setInterest] = useState(5);
  const [principal, setPrincipal] = useState(100);

  const theme = useMantineTheme();

  const output = (principal / 100) * interest;
  return (
    <Container color={theme.colors.indigo[0]}>
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
      <Center mt={20}>
        <WidgetCaption>Initial Amount: {principal}</WidgetCaption>
      </Center>
      <Center mt={20}>
        <WidgetCaption>
          Total after interest: {principal + output}
        </WidgetCaption>
      </Center>
    </Container>
  );
}
