import { Box, Radio, Text, useMantineTheme } from "@mantine/core";
import Pill from "../../../../../../shared-ui/components/Pill";

export default function ToggleOrder({ bank, order, setOrder }) {
  const theme = useMantineTheme();
  return (
    <Pill color={theme.colors[bank.color][1]}>
      <Text size="xs" color={theme.colors[bank.color][9]}>
        Sort By
      </Text>
      <Radio.Group name="sortBy" value={order} onChange={setOrder}>
        <Radio
          styles={{ labelWrapper: { display: "flex" } }}
          size="xs"
          color={`${bank.color}`}
          value="newest"
          label={
            <Text size="xs" color={theme.colors[bank.color][9]}>
              newest
            </Text>
          }
        />
        <Radio
          styles={{ labelWrapper: { display: "flex" } }}
          size="xs"
          color={`${bank.color}`}
          value="oldest"
          label={
            <Text size="xs" color={theme.colors[bank.color][9]}>
              oldest
            </Text>
          }
        />
      </Radio.Group>
    </Pill>
  );
}
