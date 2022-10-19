import { useState } from "react";
import { useAppDispatch } from "../../../../../../app/hooks";
import { InterestRates } from "../../../../../../domain/calculators/interest-rates";
import { Banks } from "../../../../../../domain/services/bank";
import { buySecurities } from "../../../../../../features/banks/banksSlice";
import { useValidator } from "../../../../../../hooks/useValidator/useValidator";
import { CardInfo } from "../../../types";
import SelectLoan from "../compositions/select-loan";

export default function SellTreasuries({ bank }: { bank: CardInfo }) {
  const dispatch = useAppDispatch();
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);

  function getLoanPayload() {
    const interest = parseFloat(InterestRates.percentage(interestRate, amount));
    const payload = {
      amount,
      b1: Banks.getById(parseInt(selectedBank)),
    };
    dispatch(buySecurities(payload));
  }

  const thisBankId = bank.cardInfo.id;
  const banks = Banks.getAll()
    .filter((bank) => bank.type === "bank" && bank.id !== thisBankId)
    .map((bank) => {
      return { value: `${bank.id}`, label: bank.name };
    });

  const validation = useValidator("buySecurities", bank, amount, selectedBank);

  function onSetInterestRate(value) {
    if (value === undefined) {
      setInterestRate(0);
    } else {
      setInterestRate(value);
    }
  }

  return (
    <SelectLoan
      bank={bank}
      label="Buy Treasuries From"
      placeholder="Pick a Bank"
      value={selectedBank}
      data={banks}
      setSubject={setSelectedBank}
      amount={amount}
      setAmount={setAmount}
      interestRate={interestRate}
      setInterestRate={onSetInterestRate}
      dispatchFunction={getLoanPayload}
      btnText="Buy"
      validation={validation}
    />
  );
}
