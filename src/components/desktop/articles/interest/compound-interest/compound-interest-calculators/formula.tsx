import {
  Box,
  Grid,
  NumberInput,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Container from "./widget-container";

export default function SimpleInterestCalculator() {
  const [interest, setInterest] = useState(5);
  const [principal, setPrincipal] = useState(100);
  const theme = useMantineTheme();
  const firstIteration = (principal / 100) * interest;
  const secondIteration = ((principal + firstIteration) / 100) * interest;
  return (
    <Container
    >
      <Grid grow>
        <Grid.Col
          span={2}
          style={{ borderRight: `1px solid ${theme.colors.violet[1]}` }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <NumberInput
              defaultValue={18}
              label="Principal Amount"
              radius="xs"
              size="xs"
              min={0}
              max={1000}
              value={principal}
              onChange={(val) => {
                if (isNaN(val)) {
                  val = 0;
                } else if (val > 1000) {
                  val = 1000;
                }
                setPrincipal(val);
              }}
            />
            <NumberInput
              defaultValue={18}
              label="Interest Rate"
              radius="xs"
              size="xs"
              min={0}
              max={100}
              value={interest}
              onChange={(val) => {
                if (isNaN(val)) {
                  val = 0;
                } else if (val > 100) {
                  val = 100;
                }
                setInterest(val);
              }}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <SimpleGrid cols={2}>
            <div>
              <Text>1st Iteration:</Text>
              <Title order={5}>
                ({principal} / 100) x {interest} = {firstIteration.toFixed(2)}
              </Title>
              <Title order={5}>
                ${firstIteration.toFixed(2)} is {interest}% of ${principal}
              </Title>
              <Title order={5}>
                Total: $
                <span style={{ color: theme.colors.green[9] }}>
                  {(principal + firstIteration).toFixed(2)}
                </span>
              </Title>
            </div>
            <div>
              <Text>2nd Iteration:</Text>
              <Title order={5}>
                (
                <span style={{ color: theme.colors.green[9] }}>
                  {(principal + firstIteration).toFixed(2)}
                </span>{" "}
                / 100) x {interest} = {secondIteration.toFixed(2)}
              </Title>
              <Title order={5}>
                ${secondIteration.toFixed(2)} is {interest}% of $
                <span style={{ color: theme.colors.green[9] }}>
                  {(principal + firstIteration).toFixed(2)}
                </span>
              </Title>
              <Title order={5}>
                Total: $
                {(principal + firstIteration + secondIteration).toFixed(2)}
              </Title>
            </div>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
