import { useState } from "react";
import { Select } from "@mantine/core";

import {
  Paper,
  Box,
  TextInput,
  Button,
  createStyles,
  Table,
  Center,
} from "@mantine/core";

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

export default function CompoundInterestCalculator({ getCompoundInterest }) {
  const { classes } = useStyles();
  const [principal, setPrincipal] = useState("1000");
  const [interestRate, setInterestRate] = useState("0.05");
  const [inflationRate, setInflationRate] = useState("0.02");
  const [compoundPeriod, setCompoundPeriod] = useState(1);
  const [years, setYears] = useState("10");
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
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
        onClick={() =>
          getCompoundInterest(principal, interestRate, years, compoundPeriod)
        }
      >
        Calculate
      </Button>
    </Box>
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
