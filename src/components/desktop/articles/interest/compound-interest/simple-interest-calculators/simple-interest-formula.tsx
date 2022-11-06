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
  const [rate, setRate] = useState(5);
  const [principal, setPrincipal] = useState(100);

  const theme = useMantineTheme();
  const output = (principal / 100) * rate;
  return (
    <Container color={theme.colors.indigo[0]}>
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
        </Grid.Col>
        <Grid.Col span={4}>
          <SimpleGrid cols={2} mt={20}>
            <Center>
              <WidgetCaption>
                ({principal} / 100) x {rate} = {output.toFixed(2)}
              </WidgetCaption>
            </Center>

            <Center>
              <WidgetCaption>
                ${output.toFixed(2)} is {rate}% of ${principal}
              </WidgetCaption>
            </Center>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
