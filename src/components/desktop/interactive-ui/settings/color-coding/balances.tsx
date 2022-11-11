import { useState } from "react";

import {
  Box,
  Button,
  Modal,
  Radio,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import AboutColors from "../about/about-colors";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import {
  selectSettings,
  setColors,
} from "../../../../../features/settings/settingsSlice";
import { useRadioSettings } from "../../../../../hooks/useRadioSettings";

export default function ColorsMenu() {
  const dispatch = useAppDispatch();
  const { colorSettings } = useAppSelector(selectSettings);
  const [aboutOpened, setAboutOpened] = useState(false);
  const colorCoding = useRadioSettings(colorSettings);
  const theme = useMantineTheme();

  function handleOnChangeRadioColors(value: string) {
    dispatch(setColors({ key: value }));
  }

  return (
    <Box>
      <Text size="sm" color="violet">
        Balancesheet Colors
      </Text>
      <Radio.Group
        value={colorCoding}
        orientation="vertical"
        onChange={(value) => handleOnChangeRadioColors(value)}
        name="Transactions"
      >
        <Radio
          styles={{ labelWrapper: { display: "flex" } }}
          color="violet"
          value="static"
          label={<Text size="xs">Each Transaction</Text>}
        />
        <Radio
          styles={{ labelWrapper: { display: "flex" } }}
          color="violet"
          value="round"
          label={<Text size="xs">All Transactions</Text>}
        />
        <Radio
          styles={{ labelWrapper: { display: "flex" } }}
          color="violet"
          value="flash"
          label={<Text size="xs">Flash</Text>}
        />
        <Radio
          styles={{ labelWrapper: { display: "flex" } }}
          color="violet"
          value="off"
          label={<Text size="xs">Off</Text>}
        />
      </Radio.Group>
      <Stack>
        <Button
          size="xs"
          color="violet"
          mt="md"
          variant="filled"
          onClick={() => setAboutOpened(true)}
        >
          About Credit-Notation
        </Button>
      </Stack>

      <Modal
        opened={aboutOpened}
        onClose={() => setAboutOpened(false)}
        title="Credit-Notation"
        styles={{
          modal: {
            backgroundColor: theme.colors.red[0],
          },
        }}
      >
        <AboutColors />
      </Modal>
    </Box>
  );
}
