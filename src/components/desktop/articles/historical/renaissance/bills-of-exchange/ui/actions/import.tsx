import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../app/hooks";
import {
  selectTraders,
  trade,
} from "../../../../../../../../features/renaissance/renaissanceSlice";
import {
  Box,
  Text,
  Select,
  useMantineTheme,
  Button,
  NumberInput,
  Stack,
} from "@mantine/core";
import { useState } from "react";

interface Trader {
  id: string;
  city: string;
  type: string;
  assets: any;
  liabilities: any;
  coins: any;
  goods: number;
  coinAsset: any;
  coinLiability: any;
}

interface Accordions {
  export: boolean;
  import: boolean;
  drawBill: boolean;
  remitBill: boolean;
}

const ExportCard: React.FunctionComponent<{
  selected: any;
}> = ({ selected }) => {
  const dispatch = useAppDispatch();
  const { me, salviati, federigo, piero } = useAppSelector(selectTraders);
  const tradersArray = [me, salviati, federigo, piero];
  const selectedTraders = tradersArray
    .filter(
      (t) =>
        selected.id !== t.id &&
        selected.city !== t.city &&
        t.type === "exporter"
    )
    .map((t) => {
      return { value: t.id, label: t.id };
    });

  const theme = useMantineTheme();
  const [selectedValueTo, setSelectedValuePlayer] = useState(null);

  const [selectedValueAmount, setSelectedValueAmount] = useState<number>(0);

  const onClickTrade = () => {
    dispatch(
      trade({
        importer: selected,
        exporter: tradersArray.find((t) => t.id === selectedValueTo),
        amount: selectedValueAmount,
      })
    );
    setSelectedValuePlayer(null);
    setSelectedValueAmount(0);
  };

  return (
    <Stack spacing="md">
      <Select
        size="xs"
        label={
          <Text size="xs" weight="bold" color={theme.colors.violet[9]}>
            Import From
          </Text>
        }
        placeholder="Find an exporter willing to ship goods"
        value={selectedValueTo}
        onChange={(val) => setSelectedValuePlayer(val)}
        data={selectedTraders}
      />
      <NumberInput
        size="xs"
        label={
          <Text size="xs" weight="bold" color={theme.colors.violet[9]}>
            Amount
          </Text>
        }
        value={selectedValueAmount}
        onChange={(val) => setSelectedValueAmount(val)}
      />

      <Button
        variant="filled"
        disabled={isNaN(selectedValueAmount) || selectedValueAmount <= 0}
        onClick={onClickTrade}
      >
        Export
      </Button>
    </Stack>
  );
};

export default ExportCard;
