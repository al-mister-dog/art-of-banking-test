import { useAppSelector } from "../../../../app/hooks";
import { selectBanks } from "../../../../features/banks/banksSlice";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { useMantineTheme } from "@mantine/core";
import ChartContainer from "./chart-container";

Chart.register(annotationPlugin);

export default function EffectiveRate() {
  const { analytics } = useAppSelector(selectBanks);
  const theme = useMantineTheme();
  
  const loanData = analytics.graphs.loanData;
  const labels = loanData.associatedData.map((data) => `${data.rate}%`);
  const options = {
    maintainAspectRatio: true,
    elements: {
      line: {
        borderWidth: 10,
        // tension: 1,
        // borderJoinStyle: "bevel" as const,
      },
    },
    scales: {
      y: {
        // beginAtZero: true,
        title: {
          display: true,
          text: "Dollars",
        },
      },
      x: {
        // beginAtZero: true,
        title: {
          display: true,
          text: "Interest Rates",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        label: {
          enabled: true,
          content: "Effective Rate",
        },
      },
      annotation: {
        annotations: [
          {
            id: "a-line-1",
            type: "line", // important, otherwise typescript complains
            backgroundColor: theme.colors.violet[3],
            borderColor: theme.colors.violet[3],
            borderWidth: 2,
            scaleID: "x",
            borderDash: [2, 2],
            value: loanData.associatedData.findIndex(
              (d) => d.rate === loanData.volumeWeightedMedian
            ),
            label: {
              display: true,
              content: `EFFR: ${loanData.volumeWeightedMedian}%`,
              position: "start",
              backgroundColor: theme.colors.violet[3],
            },
          },
        ],
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Fed Funds",
        backgroundColor: theme.colors.blue[7],
        data: loanData.associatedData.map((data) => data.volume),
        borderColor: theme.colors.blue[0],
        borderWidth: 1,
      },
      {
        type: "line",
        label: "Cumulative Dollar Weight",
        backgroundColor: theme.colors.violet[7],
        data: loanData.associatedData.map((data) => data.cumulativeFrequency),
        borderColor: theme.colors.violet[7],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartContainer>
      <Bar options={options} data={data}   />
    </ChartContainer>
  );
}
