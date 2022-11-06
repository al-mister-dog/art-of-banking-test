import {
  Box,
  Center,
  Grid,
  NumberInput,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import WidgetCaption from "../../../../shared-ui/texts/Widget-Caption";
import Container from "../../../../shared-ui/widget-container/desktop";

export default function RuleOf72Formula() {
  const [rate, setRate] = useState(5);
  const [principal, setPrincipal] = useState(100);

  const theme = useMantineTheme();
  const output = 72 / rate;
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
                72 / {rate} = {Math.round(output)}
              </WidgetCaption>
            </Center>
            <Center>
              <WidgetCaption>
                At {rate}% interest ${principal} will double in approximately{" "}
                {Math.round(output)} years
              </WidgetCaption>
            </Center>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
