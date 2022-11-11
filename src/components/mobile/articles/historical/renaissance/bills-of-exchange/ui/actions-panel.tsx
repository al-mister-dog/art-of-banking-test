import { useState } from "react";
import { Text, Center, Stack, useMantineTheme, Select } from "@mantine/core";

import ActionForms from "./action-forms";

const actionData = {
  me: [
    { value: "export", label: "Export" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  piero: [
    { value: "export", label: "Export" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  federigo: [
    { value: "import", label: "Import" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  salviati: [
    { value: "import", label: "Import" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  you: [
    { value: "remitBill", label: "Remit Bill" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  tomasso: [
    { value: "remitBill", label: "Remit Bill" },
    { value: "drawBill", label: "Draw Bill" },
  ],
};
export default function ActionsPanel({ player, setOpened }) {
  const [action, setAction] = useState<string | null>(null);
  const theme = useMantineTheme();

  return (
    <Stack spacing="xl">
      <Select
        size="xs"
        label={
          <Text size="xs" weight="bold" color={theme.colors.violet[9]}>
            Actions
          </Text>
        }
        placeholder="Choose an Action"
        value={action}
        onChange={setAction}
        data={actionData[player.id]}
      />

      {action && <ActionForms action={action} player={player} setOpened={setOpened}/>}
    </Stack>
  );
}
