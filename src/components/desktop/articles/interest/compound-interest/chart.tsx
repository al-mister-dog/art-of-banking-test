import { Center, Text, Box } from "@mantine/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function CompoundInterestChart({ data }) {
  return (
    <Box
      style={{
        width: "95%",
        marginTop: "25px"
      }}
    >
      <Text size={15} ml={8}>
        Compound Interest Rates Over {data.length} years
      </Text>

      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="interest"
            stroke="#c92a2a"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="accruedInterest"
            stroke="#1864ab"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#e67700"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
