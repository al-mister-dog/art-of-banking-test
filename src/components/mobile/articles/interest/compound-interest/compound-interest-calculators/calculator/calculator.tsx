import { useState } from "react";

import { Box, Text, useMantineTheme } from "@mantine/core";
import {
  compoundInterest,
  initialData,
} from "../../../../../../../domain/calculators/compoundInterest";
import Inputs from "./inputs";
import Table from "./table";
import Chart from "./chart";

const cpLabels = {
  1: "Annually",
  2: "Semi-Annually",
  4: "Quarterly",
  12: "Monthly",
  52: "Weekly",
  365: "Daily",
};

export default function CompoundInterestCalculator() {
  const [graphResult, setGraphResult] = useState<any>(initialData);
  const [cpLabel, setCpLabel] = useState(cpLabels[1]);
  const [interestLabel, setInterestLabel] = useState(0);
  const [inflationLabel, setInflationLabel] = useState(0);

  const theme = useMantineTheme();

  function getCompoundInterest(
    principal: number,
    interestRate: number,
    inflationRate: number,
    years: number,
    compoundPeriod: number
  ) {
    const graphData = compoundInterest(
      principal,
      interestRate,
      inflationRate,
      years,
      compoundPeriod
    );

    setGraphResult(graphData);
    setCpLabel(cpLabels[compoundPeriod]);
    setInterestLabel(interestRate);
    setInflationLabel(inflationRate);
  }

  return (
    <Box
      pt={25}
      style={{
        width: "100vw",
        margin: "auto",
        marginTop: "2rem",
        backgroundColor: theme.colors.violet[0],
      }}
    >
      <Box p={5}>
        <Inputs getCompoundInterest={getCompoundInterest} />
      </Box>

      <Box mt={25} pb={25}>
        <Box>
          <Text size="xs" weight="bold">
            Compound Interest Rate Over {graphResult.length} years:{" "}
            {interestLabel}% interest, {cpLabel}
          </Text>
        </Box>
        <Box
          sx={{
            height: "50%",
            width: "100%",
            margin: "auto",
          }}
        >
          <Table graphResult={graphResult} />
        </Box>
        <Box
          sx={{
            minHeight: "50%",
            width: "100%",
            marginTop: "25px",
          }}
        >
          <Chart data={graphResult} />
        </Box>
      </Box>
    </Box>
  );
}
