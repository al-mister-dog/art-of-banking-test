import { useState } from "react";
import { Select } from "@mantine/core";
import { compoundInterest } from "../../domain/calculators/compoundInterest";
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
import {
  Paper,
  Box,
  TextInput,
  Button,
  createStyles,
  Table,
  Center,
} from "@mantine/core";

export const compoundPeriods = [
  {
    value: 1,
    label: "Annually",
  },
  {
    value: 2,
    label: "Semi-annually",
  },
  {
    value: 4,
    label: "Quarterly",
  },
  {
    value: 12,
    label: "Monthly",
  },
  {
    value: 52,
    label: "Weekly",
  },
  {
    value: 365,
    label: "Daily",
  },
];

const useStyles = createStyles(() => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    height: "80vh",
    padding: "25px",
    margin: "auto",
    marginTop: "2rem",
    display: "flex",
    alignItems: "flex-start",
  },
  box: {
    width: "100%",
    height: 300,
    "@media (max-width: 620px)": {
      marginTop: "50px",
    },
  },
  form: {
    width: 300,
    padding: 25,
  },
  textField: {
    width: 200,
    marginBottom: 10,
  },
  calculateBtn: {
    width: 200,
    marginTop: 25,
  },
}));

export default function CompoundInterestCalculator() {
  const { classes } = useStyles();

  const [principal, setPrincipal] = useState("1000");
  const [interestRate, setInterestRate] = useState("0.05");
  const [inflationRate, setInflationRate] = useState("0.02");
  const [compoundPeriod, setCompoundPeriod] = useState(1);
  const [years, setYears] = useState("10");
  const [graphResult, setGraphResult] = useState([]);

  function getCompoundInterest() {
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
      <Paper className={classes.paper}>
        <Box
          sx={{
            width: "30%",
            margin: "auto",
            marginBottom: 190,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextInput
            className={classes.textField}
            type="number"
            placeholder={principal}
            label="Principal"
            onChange={(e) => setPrincipal(e.target.value)}
          />
          <TextInput
            className={classes.textField}
            type="number"
            placeholder={interestRate}
            label="Interest Rate (%)"
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <TextInput
            className={classes.textField}
            type="number"
            placeholder={inflationRate}
            label="Inflation Rate (%)"
            onChange={(e) => setInflationRate(e.target.value)}
          />
          <TextInput
            className={classes.textField}
            type="number"
            placeholder={`${years}`}
            label="Years"
            onChange={(e) => setYears(e.target.value)}
          />

          <CompoundPeriod
            value={compoundPeriod}
            setValue={setCompoundPeriod}
            data={compoundPeriods}
          />
          <Button
            variant="filled"
            className={classes.calculateBtn}
            onClick={getCompoundInterest}
          >
            Calculate
          </Button>
        </Box>
        <Box>
          <Table
            sx={{
              height: "50%",
              width: "70%",
              margin: "auto",
            }}
          >
            <thead>
              <tr
                style={{
                  display: "table",
                  width: "100%",
                  tableLayout: "fixed",
                }}
              >
                <th>Year</th>
                <th>Interest</th>
                <th>Accrued Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody
              style={{
                display: "block",
                height: "250px",
                overflow: "auto",
              }}
            >
              {graphResult.map((element) => (
                <tr
                  key={element.year}
                  style={{
                    display: "table",
                    width: "100%",
                    tableLayout: "fixed",
                  }}
                >
                  <td>{element.year}</td>
                  <td>${element.interest}</td>
                  <td>${element.accruedInterest}</td>
                  <td>${element.balance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Box
            sx={{
              height: "50%",
              width: "70%",
              margin: "auto",
            }}
          >
            <InterestChart data={graphResult} />
          </Box>
        </Box>
      </Paper>
    </>
  );
}

function CompoundPeriod({ value, setValue, data }) {
  return (
    <Select
      label="Compound Period"
      style={{ width: 200, marginBottom: 10 }}
      value={value}
      onChange={setValue}
      data={data}
    />
  );
}

function InterestChart({ data }) {
  const { classes } = useStyles();
  return (
    <Box className={classes.box}>
      <Center>
        <p>% Rate of Inflation</p>
      </Center>

      <ResponsiveContainer width="90%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -20,
            bottom: 5,
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
