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
      style={{
        width: "70vw",
        height: "90vh",
        margin: "auto",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "row",
        backgroundColor: theme.colors.violet[0],
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
            Compound Interest Rate Over {graphResult.yearly.length} years:{" "}
            {interestLabel}% interest, {cpLabel} /{" "}
            <span style={{ color: theme.colors.red[9] }}>
              {inflationLabel}% inflation
            </span>
          </Text>
        </Box>
        <ResultsTabs graphResults={graphResult} compoundPeriod={cpLabel} />
      </Box>
    </Box>
  );
}

function ResultsTabs({ graphResults, compoundPeriod }) {
  return (
    <Tabs color="grape" defaultValue="Yearly">
      <Tabs.List ml={75}>
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
          ml={20}
        >
          <Table graphResult={graphResults.yearly} interval="Year" />
        </Box>
        <Box
          sx={{
            minHeight: "50%",
            width: "100%",
            margin: "auto",
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
          ml={20}
        >
          <Table graphResult={graphResults.monthly} interval="Month" compoundPeriod={compoundPeriod}/>
        </Box>
        <Box
          sx={{
            minHeight: "50%",
            width: "100%",
            margin: "auto",
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
          ml={20}
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
            margin: "auto",
          }}
        >
          <Chart data={graphResults.periodically} />
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
}
