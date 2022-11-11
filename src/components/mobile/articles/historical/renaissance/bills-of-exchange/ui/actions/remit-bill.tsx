import {
  selectBankers,
  remitBill,
} from "../../../../../../../../features/renaissance/renaissanceSlice";

import { Stack, Button, Select, Text, useMantineTheme } from "@mantine/core";

import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../app/hooks";

const RemitBill: React.FunctionComponent<{
  selected: any;
  setOpened: (v: boolean) => void;
}> = ({ selected, setOpened }) => {
  const dispatch = useAppDispatch();
  const { you, tomasso } = useAppSelector(selectBankers);

  const theme = useMantineTheme();

  const bankersArray = [you, tomasso];
  const selectedBankers = bankersArray
    .filter((t) => selected.id !== t.id && t.type === "banker")
    .map((t) => {
      return { value: t.id, label: t.id };
    });

  const [selectedValueTo, setSelectedValuePlayer] = useState(null);
  const [selectedBill, setSelectedBill] = useState<any>(null);

  const bills = selected.assets
    .filter((asset) => asset.paid !== true)
    .map((b) => {
      return {
        value: b,
        label: `${b.amount}: Due From ${b.dueFrom}, ${b.city}`,
      };
    });

  const onClickremitBill = () => {
    dispatch(
      remitBill({
        presenter: selected,
        presentee: bankersArray.find((t) => t.id === selectedValueTo),
        bill: selectedBill,
      })
    );
    setSelectedValuePlayer(null);
    setSelectedBill(null);
  };

  return (
    <Stack>
      {selected.assets.length > 0 ? (
        <>
          <Select
            size="xs"
            label={
              <Text size="xs" weight="bold" color={theme.colors.violet[9]}>
                Bill To Remit
              </Text>
            }
            placeholder="Select Bill To Remit"
            value={selectedBill}
            onChange={(val) => setSelectedBill(val)}
            data={bills}
          />

          <Select
            size="xs"
            label={
              <Text size="xs" weight="bold" color={theme.colors.violet[9]}>
                Remit Bill To
              </Text>
            }
            placeholder="Find Banker Willing to Take Your Bill"
            value={selectedValueTo}
            onChange={(val) => setSelectedValuePlayer(val)}
            data={selectedBankers}
          />

          <Button
            variant="filled"
            disabled={!selectedValueTo || !selectedBill}
            onClick={() => {
              onClickremitBill();
              setOpened(false);
            }}
          >
            Ok
          </Button>
        </>
      ) : (
        <Text>There are no bills to remit</Text>
      )}
    </Stack>
  );
};

export default RemitBill;
