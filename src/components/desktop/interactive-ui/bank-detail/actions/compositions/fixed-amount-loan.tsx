import { forwardRef } from "react";

import {
  Button,
  Group,
  Input,
  NumberInput,
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
  setSubject: (v: any, x: any) => void;
  amount: number;
  setAmount: (v: any) => void;
  dispatchFunction: () => void;
  btnText: string;
  validation: {
    error: boolean;
    errorMessage: string;
    disabled: boolean;
  };
  isLoan?: boolean;
}
export default function FixedAmountLoan({
  bank,
  label,
  placeholder,
  value,
  data,
  setSubject,
  amount,
  setAmount,
  dispatchFunction,
  btnText,
  validation,
}: Props) {
  const theme = useMantineTheme();
  const formatted = parseFloat(`${amount}`);
  return (
    <Stack spacing="md">
      <Select
        size="xs"
        label={
          <Text size="xs"  color={theme.colors[bank.color][9]}>
            {label}
          </Text>
        }
        placeholder={placeholder}
        value={value}
        itemComponent={SelectItem}
        data={data}
        onChange={(value) => setSubject(value, data)}
      />
      <Input.Wrapper error={validation.errorMessage}>
        <NumberInput
          size="xs"
          icon={<CurrencyDollar />}
          value={amount}
          formatter={() =>
            !Number.isNaN(amount) ? `${formatted}` : `${amount}`
          }
          placeholder="0"
          radius="xs"
          error={validation.error}
          onChange={(amount) => setAmount(amount)}
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
  interest: number;
  interestRate: number;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, owed, interest, interestRate, ...others }: ItemProps, ref) => {
    const plusInterest = owed + interest;
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
          <div>
            <Text>
              {label}: ${owed}{" "}
              <Text size="xs">
                + {interestRate}% interest: ${plusInterest}
              </Text>
            </Text>
          </div>
        </Group>
      </div>
    );
  }
);
