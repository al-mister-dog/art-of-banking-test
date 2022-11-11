import { createStyles, Grid, SimpleGrid } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectActions } from "../../../features/actions/actionsSlice";

import CardGrid from "./cards/card/card-grid";
import BankDetail from "./bank-detail/panel";
import { CardInfo } from "./types";
import Charts from "./charts/charts";
import Settings from "./settings/container";
import { selectBanks } from "../../../features/banks/banksSlice";
import { Bank } from "../../../domain/structures/types";
import { Balancesheets } from "../../../domain/analytics/balancesheets-beta";
import Toolbar from "./settings/toolbar";

const useStyles = createStyles(() => ({
  parent: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    gridColumnGap: "0px",
    gridRowGap: "0px",
  },

  div1: { gridArea: "1 / 1 / 5 / 5" },
  div2: { gridArea: "5 / 1 / 7 / 5" },
  div3: { gridArea: "1 / 5 / 4 / 7" },
  div4: { gridArea: "4 / 5 / 7 / 7" },
}));

interface Colors {
  [index: string]: any;
}

export default function LayoutDesktop() {
  const { currentLectureId } = useAppSelector(selectActions);
  const { banks } = useAppSelector(selectBanks);
  const colors: Colors = {
    customer: "pink",
    bank: "orange",
    centralbank: "teal",
    clearinghouse: "teal",
  };

  function getCardInfo(bank: Bank): CardInfo {
    const cardInfo = { ...bank };

    const balanceSheet = Balancesheets.get(bank.id);
    const color = colors[`${bank.type}`] as keyof Colors;
    return { cardInfo, balanceSheet, color };
  }

  const banksArray: CardInfo[] = Object.keys(banks)
    .map((bank) => banks[bank])
    .map((bank) => getCardInfo(bank));
  const [bankDetail, setBankDetail] = useState(banksArray[0]);

  useEffect(() => {
    setBankDetail(banksArray[0]);
  }, [currentLectureId]);

  const handleSetBankDetail = useCallback((bank: CardInfo) => {
    setBankDetail(bank);
  }, []);
  return (
    <>
      <Grid gutter="sm" grow style={{ margin: 0, paddingBottom: 5 }}>
        <Grid.Col span={6}>
          <CardGrid
            group={banksArray}
            handleSetBankDetail={handleSetBankDetail}
          />
          <Charts />
        </Grid.Col>
        <Grid.Col span={1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "64.5rem",
            }}
          >
            <BankDetail key={bankDetail.cardInfo.id} bank={bankDetail} />
            <Toolbar />
            <Settings />
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
}
