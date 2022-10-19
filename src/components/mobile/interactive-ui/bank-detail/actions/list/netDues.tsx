import { useState } from "react";
import { useAppDispatch } from "../../../../../../app/hooks";
import { Banks } from "../../../../../../domain/services/bank";
import { creditData } from "../../../../../../domain/structures/objects";
import { netDues } from "../../../../../../features/banks/banksSlice";
import { useValidator } from "../../../../../../hooks/useValidator/useValidator";
import { CardInfo } from "../../../types";
import FixedAction from "../compositions/fixed-action";
import { Text } from "@mantine/core";


export default function NetDues({ bank }: { bank: CardInfo }) {
  const dispatch = useAppDispatch();
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);

  function netDuesPayload() {
    const payload = {
      amount,
      b1: Banks.getById(bank.cardInfo.id),
      b2: Banks.getById(parseInt(selectedBank)),
    };
    dispatch(netDues(payload));
  }

  const owingBanks = creditData.allIds
    .map((id) => creditData.accounts[id])
    .filter(
      (account) =>
        account.subordinateId === bank.cardInfo.id &&
        account.category === "Dues" &&
        !account.netted
    )
    .map((account) => {
      const bank = Banks.getById(account.superiorId);
      return {
        value: `${bank.id}`,
        label: bank.name,
        owed: account.balance,
      };
    });

  const validation = useValidator("netDues", bank, amount, selectedBank);

  if (
    owingBanks.length === 0 ||
    owingBanks[0].value === bank.cardInfo.id.toString()
  ) {
    return <Text>No Dues To Net</Text>;
  }
  return (
    <FixedAction
      bank={bank}
      label="Net Dues With"
      placeholder="Pick a Bank"
      value={selectedBank}
      data={owingBanks}
      setSubject={setSelectedBank}
      amount={amount}
      setAmount={setAmount}
      dispatchFunction={netDuesPayload}
      btnText="Net Dues"
      validation={validation}
    />
  );
}
