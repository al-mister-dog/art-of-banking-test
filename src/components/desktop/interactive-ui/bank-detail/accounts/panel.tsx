import { Box, Button, Collapse } from "@mantine/core";
import { useState } from "react";
import { Accounts } from "../../../../../domain/analytics/accounts";
import uuid from "react-uuid";
import TreasuryBills from "./tables/treasurybills";
import DepositAccounts from "./tables/depositaccounts";
import CustomerAccounts from "./tables/depositaccounts";
import FedFunds from "./tables/fedfunds";
import Loans from "./tables/loans";

import DuesAccounts from "./tables/dues";

function AccountsDisplay({ bank, label, children }) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button
        style={{ width: "100%", marginTop: "5px" }}
        color={bank.color}
        // variant={opened ? "filled" : "outline"}
        variant="outline"
        radius="xs"
        onClick={() => setOpened((o) => !o)}
      >
        {label}
      </Button>
      <Collapse
        in={opened}
        transitionDuration={100}
        transitionTimingFunction="linear"
      >
        {children}
      </Collapse>
    </>
  );
}

export default function AccountsPanel({ bank }) {
  const allAccounts = Accounts.getAccounts(bank.cardInfo.id);

  // const assets = allAccounts.assets;
  // const liabilities = allAccounts.liabilities;

  // const treasuries = allAccounts.liabilities[0];
  // const depositAccounts = allAccounts.liabilities[1];

  return (
    <Box style={{ maxHeight: "18.2rem", overflowX: "auto" }}>
      {allAccounts.accounts.map((accs) => (
        <div key={uuid()}>
          {accs.instrument === "Bank Deposits" && (
            <AccountsDisplay bank={bank} label="Deposit Accounts">
              <DepositAccounts bank={bank} accounts={accs} />
            </AccountsDisplay>
          )}
          {accs.instrument === "Customer Deposits" && (
            <AccountsDisplay bank={bank} label="Customer Accounts">
              <CustomerAccounts bank={bank} accounts={accs} />
            </AccountsDisplay>
          )}
          {accs.instrument === "Treasury Bills" && (
            <AccountsDisplay bank={bank} label="Treasury Bills">
              <TreasuryBills accounts={accs} />
            </AccountsDisplay>
          )}
          {accs.instrument === "Dues" && (
            <AccountsDisplay bank={bank} label="Dues">
              <DuesAccounts bank={bank} accounts={accs} />
            </AccountsDisplay>
          )}
          {accs.instrument === "Fed Funds" && (
            <AccountsDisplay bank={bank} label="Fed Funds">
              <FedFunds bank={bank} accounts={accs} />
            </AccountsDisplay>
          )}
          {accs.instrument === "Loans" && (
            <AccountsDisplay bank={bank} label="Loans">
              <Loans bank={bank} accounts={accs} />
            </AccountsDisplay>
          )}
        </div>
      ))}
    </Box>
  );
}
