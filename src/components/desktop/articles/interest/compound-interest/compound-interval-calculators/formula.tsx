import {
  Box,
  Grid,
  NumberInput,
  Select,
  SimpleGrid,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Container from "../../../../../shared-ui/widget-container/desktop";

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
  const [compoundPeriod, setCompoundPeriod] = useState(2);

  const theme = useMantineTheme();

  return (
    <Container color={theme.colors.grape[0]}>
      <Grid grow>
        <Grid.Col
          span={2}
          style={{ borderRight: `1px solid ${theme.colors.blue[1]}` }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
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
            <CompoundPeriod
              value={compoundPeriod}
              setValue={setCompoundPeriod}
              data={compoundPeriods}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <SimpleGrid cols={2}>
            <Title order={5} mt="sm" ml="xl">
              {rate}% / {compoundPeriod} = {(rate / compoundPeriod).toFixed(2)}%
            </Title>
            <Title order={5} mt="sm" ml="xl"></Title>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
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
