import { useState } from "react";
import { Box, Text, useMantineTheme } from "@mantine/core";
import {
  simpleInterest,
  initialData,
} from "../../../../../../../domain/calculators/simpleInterest";
import Inputs from "./inputs";
import Table from "./table";
import Chart from "./chart";

export default function SimpleInterestCalculator() {
  const [graphResult, setGraphResult] = useState<any>(initialData);
  const [interestLabel, setInterestLabel] = useState(0);

  const theme = useMantineTheme();

  function getSimpleInterest(
    principal: number,
    interestRate: number,
    years: number
  ) {
    const graphData = simpleInterest(principal, interestRate, years);

    setGraphResult(graphData);
    setInterestLabel(interestRate);
  }

  return (
    <Box
      pt={25}
      style={{
        width: "100vw",
        margin: "auto",
        marginTop: "2rem",
        backgroundColor: theme.colors.indigo[0],
      }}
    >
      <Box p={5}>
        <Inputs getSimpleInterest={getSimpleInterest} />
      </Box>

      <Box mt={25} pb={25}>
        <Box>
          <Text size="xs" weight="bold" align="center">
            Rate of Return Over {graphResult.length} years at {interestLabel}%
            interest
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
