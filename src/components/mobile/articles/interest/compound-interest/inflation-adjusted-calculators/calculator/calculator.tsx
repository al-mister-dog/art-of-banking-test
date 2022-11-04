import { useState } from "react";

import { Box, Tabs, Text, useMantineTheme } from "@mantine/core";
import {
  compoundInterval,
  initialDataTwo,
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
  const [graphResult, setGraphResult] = useState<any>(initialDataTwo);
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
    const graphData = compoundInterval(
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
          <Text size="xs" weight="bold" align="center">
            Compound Interest Rate Over {graphResult.length} years:{" "}
            {interestLabel}% interest, {cpLabel} /{" "}
            <span style={{ color: theme.colors.red[9] }}>
              {inflationLabel}% inflation
            </span>
          </Text>
        </Box>
        <ResultsTabs graphResults={graphResult} compoundPeriod={cpLabel} />
        {/* <Box
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
        </Box> */}
      </Box>
    </Box>
  );
}

function ResultsTabs({ graphResults, compoundPeriod }) {
  return (
    <Tabs color="grape" defaultValue="Yearly">
      <Tabs.List position="center">
        <Tabs.Tab value="Yearly">Yearly</Tabs.Tab>
        <Tabs.Tab value="Monthly">Monthly</Tabs.Tab>
        <Tabs.Tab value="CompoundPeriod">Compound Period</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Yearly" pt="xs">
        <Box
          sx={{
            height: "50%",
            width: "100%",
            margin: "auto",
          }}
        >
          <Table graphResult={graphResults.yearly} interval="Year" />
        </Box>
        <Box
          sx={{
            minHeight: "50%",
            width: "100%",
            marginTop: "25px",
          }}
        >
          <Chart data={graphResults.yearly} />
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="Monthly" pt="xs">
        <Box
          sx={{
            height: "50%",
            width: "100%",
            margin: "auto",
          }}
        >
          <Table
            graphResult={graphResults.monthly}
            interval="Month"
            compoundPeriod={compoundPeriod}
          />
        </Box>
        <Box
          sx={{
            minHeight: "50%",
            width: "100%",
            marginTop: "25px",
          }}
        >
          <Chart data={graphResults.monthly} />
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="CompoundPeriod" pt="xs">
        <Box
          sx={{
            height: "50%",
            width: "100%",
            margin: "auto",
          }}
        >
          <Table
            graphResult={graphResults.periodically}
            interval="Compound Period"
          />
        </Box>
        <Box
          sx={{
            minHeight: "50%",
            width: "100%",
            marginTop: "25px",
          }}
        >
          <Chart data={graphResults.periodically} />
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
}
