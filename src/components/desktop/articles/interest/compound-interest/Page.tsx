import { useState } from "react";

import { Paper, Box } from "@mantine/core";
import { compoundInterest } from "../../../../../domain/calculators/compoundInterest";
import Calculator from "./calculator";
import Table from "./table";
import Chart from "./chart";

export default function CompoundInterestCalculator() {
  const [graphResult, setGraphResult] = useState([]);

  function getCompoundInterest(principal, interestRate, years, compoundPeriod) {
    const graphData = compoundInterest(
      parseInt(principal),
      parseInt(interestRate),
      parseInt(years),
      compoundPeriod
    );
    setGraphResult(graphData);
  }
  return (
    <>
      <Paper
        style={{
          width: "70vw",
          height: "80vh",
          margin: "auto",
          marginTop: "2rem",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "30%",
            margin: "auto",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Calculator getCompoundInterest={getCompoundInterest} />
        </Box>

        <Box
          sx={{
            width: "70%",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              height: "50%",
              margin: "auto",
            }}
          >
            <Table graphResult={graphResult} />
          </Box>
          <Box
            sx={{
              height: "50%",
              margin: "auto",
            }}
          >
            <Chart data={graphResult} />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
