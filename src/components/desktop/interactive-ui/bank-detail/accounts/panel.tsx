import { Button, Collapse } from "@mantine/core";
import { useState } from "react";
import { Balancesheets } from "../../../../../domain/analytics/balancesheets-beta";
import TreasuryBills from "./treasurybills";
import DepositAccounts from "./depositaccounts";

function AccountsButton({ bank, onClick, children }) {
  return (
    <Button
      style={{ width: "100%", marginTop: "5px" }}
      color={bank.color}
      variant="outline"
      radius="xs"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

function AccountsDisplay({}) {
  return <></>;
}

export default function AccountsPanel({ bank }) {
  const [treasuriesOpened, setTreasuriesOpened] = useState(false);
  const [depositAccountsOpened, setDepositAccountsOpened] = useState(false);

  const allAccounts = Balancesheets.getAccounts(bank.cardInfo.id);
  const treasuries = allAccounts.liabilities[0];
  const depositAccounts = allAccounts.liabilities[1];

  return (
    <>
      <AccountsButton
        bank={bank}
        onClick={() => setTreasuriesOpened((o) => !o)}
      >
        Treasury Bills
      </AccountsButton>
      <Collapse
        in={treasuriesOpened}
        transitionDuration={200}
        transitionTimingFunction="linear"
      >
        <TreasuryBills treasuries={treasuries} />
      </Collapse>
      <AccountsButton
        bank={bank}
        onClick={() => setDepositAccountsOpened((o) => !o)}
      >
        Deposit Accounts
      </AccountsButton>
      <Collapse
        in={depositAccountsOpened}
        transitionDuration={200}
        transitionTimingFunction="linear"
      >
        <DepositAccounts depositAccounts={depositAccounts} />
      </Collapse>
    </>
  );
}
