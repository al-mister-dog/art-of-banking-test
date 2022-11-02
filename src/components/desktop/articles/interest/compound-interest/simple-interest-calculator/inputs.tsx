import { useState } from "react";

import { Box, TextInput, Button, createStyles } from "@mantine/core";

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

export default function SimpleInterestCalculator({ getSimpleInterest }) {
  const { classes } = useStyles();
  const [principal, setPrincipal] = useState("1000");
  const [interestRate, setInterestRate] = useState("0.05");
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
        placeholder={`${years}`}
        label="Years"
        max={100}
        onChange={(e) => setYears(e.target.value)}
      />

      <Button
        variant="filled"
        className={classes.calculateBtn}
        onClick={() => getSimpleInterest(principal, interestRate, years)}
      >
        Calculate
      </Button>
    </Box>
  );
}
