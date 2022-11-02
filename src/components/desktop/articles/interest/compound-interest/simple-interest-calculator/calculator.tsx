import { useState } from "react";

import { Box, Text, useMantineTheme } from "@mantine/core";
import {
  simpleInterest,
  initialData,
} from "../../../../../../domain/calculators/simpleInterest";
import Inputs from "./inputs";
import Table from "./table";
import Chart from "./chart";

export default function SimpleInterestCalculator() {
  const [graphResult, setGraphResult] = useState<any>(initialData);

  const [interestLabel, setInterestLabel] = useState(0);
  const [inflationLabel, setInflationLabel] = useState(0);

  const theme = useMantineTheme();

  function getSimpleInterest(principal, interestRate, years) {
    const graphData = simpleInterest(
      parseInt(principal),
      parseInt(interestRate),
      parseInt(years)
    );

    setGraphResult(graphData);
    setInterestLabel(interestRate);
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
        border: `1px solid ${theme.colors.violet[1]}`,
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
        <Inputs getSimpleInterest={getSimpleInterest} />
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
            Rate of Return Over {graphResult.length} years:{" "}
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
