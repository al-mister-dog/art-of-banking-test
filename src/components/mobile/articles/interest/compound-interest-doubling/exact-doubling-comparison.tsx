import {
  Box,
  Text,
  Grid,
  NumberInput,
  SimpleGrid,
  useMantineTheme,
  Center,
} from "@mantine/core";
import { useState } from "react";
import WidgetCaption from "../../../../shared-ui/texts/Widget-Caption";
import Container from "../../../../shared-ui/widget-container/mobile";

export default function ExactDoublingComparison() {
  const [rate, setRate] = useState(10);
  const [principal, setPrincipal] = useState(100);
  const [iterations, setIterations] = useState(10);

  const theme = useMantineTheme();

  function getDoublingTime(r: number) {
    const rate = r / 100;
    return (Math.log(2) / Math.log(1 + rate)).toFixed(2);
  }
  const doublingTime = getDoublingTime(rate);
  const compoundInterestOutput =
    principal * Math.pow(1 + rate / 100, iterations);

  return (
    <Container color={theme.colors.indigo[0]}>
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

      <SimpleGrid cols={2}>
        <div>
          <Text mt="sm">Exact Doubling Time Formula</Text>
          <WidgetCaption>
            At {rate}% interest ${principal} will double in exactly{" "}
            {doublingTime} years
          </WidgetCaption>
        </div>
        <div>
          <Text mt="sm">(A = P(1+r)^t)</Text>
          <WidgetCaption>
            Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
            {compoundInterestOutput.toFixed(2)}
          </WidgetCaption>
        </div>
      </SimpleGrid>
    </Container>
  );
}
