import { Button, Collapse, Title } from "@mantine/core";
import { useState } from "react";
import { Balancesheets } from "../../../../../domain/analytics/balancesheets-beta";

export default function AccountsPanel({ bank }) {
  const allAccounts = Balancesheets.getAccounts(bank.cardInfo.id);
  const treasuries = allAccounts.liabilities[0];
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Title order={5}>Accounts Content</Title>
      <Button onClick={() => setOpened((o) => !o)}>Treasury Bills</Button>
      <Collapse
        in={opened}
        transitionDuration={1000}
        transitionTimingFunction="linear"
      >
        <TreasuryBills treasuries={treasuries} />
      </Collapse>
    </>
  );
}

function TreasuryBills({ treasuries }) {
  return <>{JSON.stringify(treasuries)}</>;
}
