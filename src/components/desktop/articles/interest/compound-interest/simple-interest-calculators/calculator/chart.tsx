import { Box } from "@mantine/core";
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

export default function SimpleInterestChart({ data }) {
  return (
    <Box style={{ width: "85%", margin: "auto", marginTop: "10px" }}>
      <ResponsiveContainer height={300}>
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
          <XAxis
            dataKey="year"
            style={{
              fontSize: "0.7rem",
              fontFamily: "Poppins",
            }}
          />
          <YAxis
            style={{
              fontSize: "0.7rem",
              fontFamily: "Poppins",
            }}
          />
          <Tooltip />
          <Legend
            wrapperStyle={{
              fontSize: "0.8rem",
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          />

          <Line
            strokeWidth={2}
            name="Interest"
            type="monotone"
            dataKey="interest"
            stroke="#c92a2a"
            activeDot={{ r: 8 }}
          />

          <Line
            strokeWidth={2}
            name="Accrued"
            type="monotone"
            dataKey="accruedInterest"
            stroke="#1864ab"
            activeDot={{ r: 8 }}
          />

          <Line
            strokeWidth={2}
            name="Balance"
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
