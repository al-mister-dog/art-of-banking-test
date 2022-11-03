import { useState } from "react";

import {
  Box,
  Button,
  createStyles,
  NumberInput,
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

export default function SimpleInterestCalculator({ getSimpleInterest }) {
  const { classes } = useStyles();
  const [principal, setPrincipal] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.05);
  const [years, setYears] = useState(10);
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <NumberInput
        label="Principal"
        radius="xs"
        min={0}
        max={9999}
        value={principal}
        onChange={(val) => {
          if (isNaN(val)) {
            val = 0;
          } else if (val > 9999) {
            val = 9999;
          }
          setPrincipal(val);
        }}
      />
      <NumberInput
        label="Interest Rate (%)"
        radius="xs"
        min={0}
        max={100}
        value={interestRate}
        onChange={(val) => {
          if (isNaN(val)) {
            val = 0;
          } else if (val > 100) {
            val = 100;
          }
          setInterestRate(val);
        }}
      />

      <NumberInput
        label="Years"
        radius="xs"
        min={0}
        max={100}
        value={years}
        onChange={(val) => {
          if (isNaN(val)) {
            val = 0;
          } else if (val > 100) {
            val = 100;
          }
          setYears(val);
        }}
      />

      <Button
        variant="filled"
        color="blue"
        className={classes.calculateBtn}
        onClick={() => getSimpleInterest(principal, interestRate, years)}
      >
        Calculate
      </Button>
    </Box>
  );
}
