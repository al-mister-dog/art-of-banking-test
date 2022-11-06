import {
  Box,
  Center,
  Grid,
  NumberInput,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import WidgetCaption from "../../../../../shared-ui/texts/Widget-Caption";
import Container from "../../../../../shared-ui/widget-container/desktop";

export default function SimpleInterestCalculator() {
  const [interest, setInterest] = useState(5);
  const [inflation, setInflation] = useState(2);
  const [principal, setPrincipal] = useState(100);

  const theme = useMantineTheme();

  const output = (principal / 100) * (interest - inflation);
  return (
    <Container color={theme.colors.violet[0]}>
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
            <NumberInput
              label="Inflation Rate"
              radius="xs"
              size="xs"
              min={0}
              max={100}
              value={inflation}
              onChange={(val) => {
                if (isNaN(val)) {
                  val = 0;
                } else if (val > 100) {
                  val = 100;
                }
                setInflation(val);
              }}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <SimpleGrid cols={2} mt={20}>
            <Center>
              <WidgetCaption>
                ({principal} / 100) x ({interest} - {inflation}) ={" "}
                {output.toFixed(2)}
              </WidgetCaption>
            </Center>
            <Center>
              <WidgetCaption>
                ${output.toFixed(2)} is {interest - inflation}% of ${principal}
              </WidgetCaption>
            </Center>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
