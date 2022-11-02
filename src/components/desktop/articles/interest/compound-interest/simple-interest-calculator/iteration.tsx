import { Box, NumberInput, Text, Title, useMantineTheme } from "@mantine/core";
import { useState } from "react";

export default function SimpleInterestCalculator() {
  const [interest, setInterest] = useState(10);
  const [principal, setPrincipal] = useState(100);
  const [iterations, setIterations] = useState(10);
  const theme = useMantineTheme();
  const output = principal + (principal / 100) * (interest * iterations);
  return (
    <Box
      style={{
        width: "70vw",
        margin: "auto",
        marginTop: "-25px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px",
        border: `1px solid ${theme.colors.violet[1]}`,
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
        value={iterations}
        onChange={(val) => {
          if (isNaN(val)) {
            val = 0;
          }
          setIterations(val);
        }}
      />
      <Title order={5}>Initial Amount: {principal}</Title>
      <Title order={5}>
        Total After {iterations} {iterations === 1 ? "Year" : "Years"}: $
        {output}
      </Title>
    </Box>
  );
}