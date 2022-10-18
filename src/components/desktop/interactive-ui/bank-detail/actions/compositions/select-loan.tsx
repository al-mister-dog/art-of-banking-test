import { useContext } from "react";
import { useMediaQuery } from "@mantine/hooks";
import {
  Button,
  Input,
  NumberInput,
  Select,
  SelectItem,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { CurrencyDollar, Percentage } from "tabler-icons-react";
import { CardInfo } from "../../../types";

interface Props {
  bank: CardInfo;
  label: string;
  placeholder: string;
  value: string;
  data: (string | SelectItem)[];
  setSubject: (v: any) => void;
  amount: number;
  setAmount: (v: any) => void;
  interestRate: number;
  setInterestRate: (v: any) => void;
  dispatchFunction: () => void;
  btnText: string;
  validation: {
    error: boolean;
    errorMessage: string;
    disabled: boolean;
  };
}
export default function SelectAndPay({
  bank,
  label,
  placeholder,
  value,
  data,
  setSubject,
  amount,
  setAmount,
  interestRate,
  setInterestRate,
  dispatchFunction,
  btnText,
  validation,
}: Props) {
  const theme = useMantineTheme();

  return (
    <Stack spacing="md">
      <Select
        size="xs"
        label={
          <Text size="xs" weight="bold" color={theme.colors[bank.color][9]}>
            {label}
          </Text>
        }
        placeholder={placeholder}
        value={value}
        data={data}
        onChange={setSubject}
      />
      <Input.Wrapper error={validation.errorMessage}>
        <NumberInput
          size="xs"
          icon={<CurrencyDollar />}
          value={amount}
          placeholder="0"
          radius="xs"
          error={validation.error}
          onChange={(amount) => setAmount(amount)}
        />
      </Input.Wrapper>
      <NumberInput
        icon={<Percentage />}
        value={interestRate}
        placeholder="0"
        radius="xs"
        onChange={(interestRate) => setInterestRate(interestRate)}
      />
      <Text size="xs" color="dimmed">
        + {interestRate}% interest
      </Text>

      <Button
        color={`${bank.color}`}
        onClick={dispatchFunction}
        disabled={validation.disabled}
      >
        {btnText}
      </Button>
    </Stack>
  );
}
