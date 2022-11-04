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
      style={{
        width: "70vw",
        height: "80vh",
        margin: "auto",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "row",
        backgroundColor: theme.colors.grape[0],
      }}
    >
      <Box
        sx={{
          width: "30%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Inputs getCompoundInterest={getCompoundInterest} />
      </Box>

      <Box
        sx={{
          width: "70%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box ml={80}>
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
          ml={20}
        >
          <Table graphResult={graphResult} />
        </Box>
        <Box
          sx={{
            minHeight: "50%",
            width: "100%",
            margin: "auto",
          }}
        >
          <Chart data={graphResult} />
        </Box>
      </Box>
    </Box>
  );
}
