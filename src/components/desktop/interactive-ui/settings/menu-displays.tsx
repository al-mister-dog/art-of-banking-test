import { Box, Radio, Text } from "@mantine/core";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  selectSettings,
  setDisplay,
} from "../../../../features/settings/settingsSlice";
import { useRadioSettings } from "../../../../hooks/useRadioSettings";

export default function DisplayRadioGroup() {
  const dispatch = useAppDispatch();
  const { displaySettings } = useAppSelector(selectSettings);
  const displayButton = useRadioSettings(displaySettings);

  function handleOnChange(value: string) {
    dispatch(setDisplay({ key: value }));
  }

  // this sets display back to "balances" on page change
  useEffect(() => {
    dispatch(setDisplay({ key: "balances" }));
  }, []);

  return (
    <Box>
      <Radio.Group
        value={displayButton}
        orientation="vertical"
        onChange={(value) => handleOnChange(value)}
        name="Display"
      >
        <Radio
          color="violet"
          value="balances"
          label={<Text size="xs">Balances</Text>}
        />

        <Radio
          color="violet"
          value="taccounts"
          label={<Text size="xs">T-Accounts</Text>}
        />

        <Radio
          color="violet"
          value="spreadsheet"
          label={<Text size="xs">Spreadsheet</Text>}
        />
      </Radio.Group>
    </Box>
  );
}
