import { useState } from "react";
import {
  Box,
  Center,
  Grid,
  NumberInput,
  Select,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Container from "../../../../shared-ui/widget-container/mobile";
import WidgetCaption from "../../../../shared-ui/texts/Widget-Caption";

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

export default function SimpleInterestCalculator() {
  const [rate, setRate] = useState(10);
  const [compoundPeriod, setCompoundPeriod] = useState(1);
  const theme = useMantineTheme();

  function getDoublingTime(r: number, n: number) {
    const compoundRate = r / n / 100;
    const times = Math.log(2) / Math.log(1 + compoundRate) / n;
    return times;
  }

  function parseDate(value) {
    const totalDays = value * 365;
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays - years * 365) / 30);
    const days = Math.floor(totalDays - years * 365 - months * 30);
    const result = years + " years, " + months + " months, " + days + " days";
    return result;
  }

  const doublingTime = getDoublingTime(rate, compoundPeriod);

  const date = parseDate(doublingTime);

  return (
    <Container color={theme.colors.indigo[0]}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "space-between",
          margin: "auto",
        }}
      >
        <Box p={10}>
          <NumberInput
            label="Interest Rate"
            radius="xs"
            size="xs"
            min={0}
            max={100}
            value={rate}
            onChange={(val) => {
              if (isNaN(val)) {
                val = 0;
              } else if (val > 100) {
                val = 100;
              }
              setRate(val);
            }}
          />
        </Box>
        <Box p={10}>
          <CompoundPeriod
            value={compoundPeriod}
            setValue={setCompoundPeriod}
            data={compoundPeriods}
          />
        </Box>
      </Box>

      <Center mt={20}>
        <Text>
          Compound Interval :{" "}
          {compoundPeriods.find((c) => c.value === compoundPeriod).label}
        </Text>
      </Center>
      <Center mt={20} pl={20} pr={20}>
        <WidgetCaption>
          At {rate}% interest, amount will double in exactly {date}{" "}
        </WidgetCaption>
      </Center>
      <Center mt={20}>
        <WidgetCaption>
          (log(2) / log({rate}/{compoundPeriod}/100)) / {compoundPeriod} ={" "}
          {doublingTime.toFixed(2)}
        </WidgetCaption>
      </Center>
    </Container>
  );
}

function CompoundPeriod({ value, setValue, data }) {
  return (
    <Select
      label="Compound Period"
      size="xs"
      style={{ width: 200, marginBottom: 10 }}
      value={value}
      onChange={setValue}
      data={data}
    />
  );
}
