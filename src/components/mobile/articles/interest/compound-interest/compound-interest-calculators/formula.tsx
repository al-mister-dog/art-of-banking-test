import { Box, Center, NumberInput, Text, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import WidgetCaption from "../../../../../shared-ui/texts/Widget-Caption";
import Container from "../../../../../shared-ui/widget-container/mobile";

export default function SimpleInterestCalculator() {
  const [interest, setInterest] = useState(5);
  const [principal, setPrincipal] = useState(100);
  const theme = useMantineTheme();
  const firstIteration = (principal / 100) * interest;
  const secondIteration = ((principal + firstIteration) / 100) * interest;
  return (
    <Container color={theme.colors.violet[0]}>
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

      <Box mt="md">
        <Center>
          <Text>1st Iteration:</Text>
        </Center>
        <Center>
          <WidgetCaption>
            ({principal} / 100) x {interest} = {firstIteration.toFixed(2)}
          </WidgetCaption>
        </Center>
        <Center>
          <WidgetCaption>
            ${firstIteration.toFixed(2)} is {interest}% of ${principal}
          </WidgetCaption>
        </Center>
        <Center>
          <WidgetCaption>
            Total: $
            <span style={{ color: theme.colors.green[9] }}>
              {(principal + firstIteration).toFixed(2)}
            </span>
          </WidgetCaption>
        </Center>
      </Box>
      <Box mt="md">
        <Center>
          <Text align="left">2nd Iteration:</Text>
        </Center>
        <Center>
          <WidgetCaption>
            (
            <span style={{ color: theme.colors.green[9] }}>
              {(principal + firstIteration).toFixed(2)}
            </span>
            / 100) x {interest} = {secondIteration.toFixed(2)}
          </WidgetCaption>
        </Center>
        <Center>
          <WidgetCaption>
            ${secondIteration.toFixed(2)} is {interest}% of $
            <span style={{ color: theme.colors.green[9] }}>
              {(principal + firstIteration).toFixed(2)}
            </span>
          </WidgetCaption>
        </Center>
        <Center>
          <WidgetCaption>
            Total: ${(principal + firstIteration + secondIteration).toFixed(2)}
          </WidgetCaption>
        </Center>
      </Box>
    </Container>
  );
}
