import { useAppSelector } from "../../../../app/hooks";
import { selectBanks } from "../../../../features/banks/banksSlice";
import React from "react";
import { MantineProvider } from "@mantine/core";
import { Bank } from "../../../../domain/structures/types";
import { Display } from "../../../../domain/analytics/display";
import Layout from "./card/layout";
import { CardInfo } from "../types";
import { Balancesheets } from "../../../../domain/analytics/balancesheets-beta";

interface Colors {
  [index: string]: any;
}

function BalanceSheetsContainer() {
  const { banks } = useAppSelector(selectBanks);
  const colors: Colors = {
    customer: "grape",
    bank: "violet",
    centralbank: "blue",
    clearinghouse: "blue",
  };

  function getCardInfo(bank: Bank): CardInfo {
    const cardInfo = { ...bank };
    const balanceSheet = Display.balanceSheet(cardInfo);
    // const balanceSheet = Balancesheets.get(bank.id);
    const color = colors[`${bank.type}`] as keyof Colors;
    return { cardInfo, balanceSheet, color };
  }

  const banksArray: CardInfo[] = Object.keys(banks)
    .map((bank) => banks[bank])
    .map((bank) => getCardInfo(bank));
  
  if (banksArray.length > 0) {
    return (
      <>
        <MantineProvider theme={{ fontFamily: `"Poppins"` }}>
          <Layout banksArray={banksArray} />
        </MantineProvider>
      </>
    );
  }
}

const Memoized = React.memo(BalanceSheetsContainer);

export default Memoized;

const bla = [
  {
    cardInfo: {
      id: 0,
      name: "Central Bank",
      type: "centralbank",
      accountIds: [0, 1, 2, 3],
      creditIds: [],
    },
    balanceSheet: {
      assets: [],
      liabilities: [
        {
          instrument: "Bank Deposits",
          accounts: [
            {
              id: 0,
              subordinateId: 1,
              superiorId: 0,
              type: "Bank Deposits",
              instrument: "Bank Deposits",
              balance: 40,
              category: "Bank Deposits",
            },
            {
              id: 1,
              subordinateId: 2,
              superiorId: 0,
              type: "Bank Deposits",
              instrument: "Bank Deposits",
              balance: 160,
              category: "Bank Deposits",
            },
            {
              id: 2,
              subordinateId: 3,
              superiorId: 0,
              type: "Bank Deposits",
              instrument: "Bank Deposits",
              balance: 100,
              category: "Bank Deposits",
            },
            {
              id: 3,
              subordinateId: 4,
              superiorId: 0,
              type: "Bank Deposits",
              instrument: "Bank Deposits",
              balance: 100,
              category: "Bank Deposits",
            },
          ],
        },
      ],
    },
    color: "blue",
  },
  {
    cardInfo: {
      id: 1,
      name: "Bank 1",
      type: "bank",
      accountIds: [0],
      creditIds: [0, 3, 4],
    },
    balanceSheet: {
      assets: [
        {
          instrument: "Bank Deposits",
          accounts: [
            {
              id: 0,
              subordinateId: 1,
              superiorId: 0,
              type: "Bank Deposits",
              instrument: "Bank Deposits",
              balance: 40,
              category: "Bank Deposits",
            },
          ],
        },
      ],
      liabilities: [],
    },
    color: "violet",
  },
  {
    cardInfo: {
      id: 2,
      name: "Bank 2",
      type: "bank",
      accountIds: [1],
      creditIds: [0, 1, 4],
    },
    balanceSheet: {
      assets: [
        {
          instrument: "Bank Deposits",
          accounts: [
            {
              id: 1,
              subordinateId: 2,
              superiorId: 0,
              type: "Bank Deposits",
              instrument: "Bank Deposits",
              balance: 160,
              category: "Bank Deposits",
            },
          ],
        },
      ],
      liabilities: [],
    },
    color: "violet",
  },
  {
    cardInfo: {
      id: 3,
      name: "Bank 3",
      type: "bank",
      accountIds: [2],
      creditIds: [1, 2],
    },
    balanceSheet: {
      assets: [
        {
          instrument: "Bank Deposits",
          accounts: [
            {
              id: 2,
              subordinateId: 3,
              superiorId: 0,
              type: "Bank Deposits",
              instrument: "Bank Deposits",
              balance: 100,
              category: "Bank Deposits",
            },
          ],
        },
      ],
      liabilities: [],
    },
    color: "violet",
  },
  {
    cardInfo: {
      id: 4,
      name: "Bank 4",
      type: "bank",
      accountIds: [3],
      creditIds: [2, 3],
    },
    balanceSheet: {
      assets: [
        {
          instrument: "Bank Deposits",
          accounts: [
            {
              id: 3,
              subordinateId: 4,
              superiorId: 0,
              type: "Bank Deposits",
              instrument: "Bank Deposits",
              balance: 100,
              category: "Bank Deposits",
            },
          ],
        },
      ],
      liabilities: [],
    },
    color: "violet",
  },
];
