import { forwardRef } from "react";

import {
  Button,
  Group,
  Input,
  NumberInput,
  Radio,
  Select,
  SelectItem,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { CurrencyDollar } from "tabler-icons-react";
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
  paymentType: string;
  setPaymentType: (v: string) => void;
  dispatchFunction: () => void;
  btnText: string;
  validation: {
    error: boolean;
    errorMessage: string;
    disabled: boolean;
  };
  isLoan?: boolean;
}
export default function FixedAmount({
  bank,
  label,
  placeholder,
  value,
  data,
  setSubject,
  amount,
  setAmount,
  paymentType,
  setPaymentType,
  dispatchFunction,
  btnText,
  validation,
  isLoan,
}: Props) {
  const theme = useMantineTheme();

  return (
    <Stack spacing="md">
      <Select
        size="xs"
        label={
          <Text size="xs" color={theme.colors[bank.color][9]}>
            {label}
          </Text>
        }
        placeholder={placeholder}
        value={value}
        itemComponent={SelectItem}
        data={data}
        onChange={setSubject}
      />
      <Radio.Group
        value={paymentType}
        onChange={setPaymentType}
        name="PaymentType"
        label="Payment Type"
      >
        <Radio
          color={`${theme.colors[bank.color]}`}
          value="deposits"
          label="Deposits"
        />
        <Radio
          color={`${theme.colors[bank.color]}`}
          value="cash"
          label="Cash"
        />
      </Radio.Group>
      <Input.Wrapper error={validation.errorMessage}>
        <NumberInput
          size="xs"
          icon={<CurrencyDollar />}
          value={amount}
          placeholder="0"
          radius="xs"
          error={validation.error}
          onChange={setAmount}
        />
      </Input.Wrapper>

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

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  label: string;
  owed: any;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, owed, ...others }: ItemProps, ref) => {
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
          <div>
            <Text>
              {label}: ${owed}{" "}
            </Text>
          </div>
        </Group>
      </div>
    );
  }
);
