import { useAppSelector } from "../../../../../app/hooks";
import { selectActions } from "../../../../../features/actions/actionsSlice";
import { useState, useCallback, useEffect } from "react";
import { Card, Grid } from "@mantine/core";
import { CardInfo } from "../../types";
import CardGrid from "./card-grid";
import BankDetail from "../../bank-detail/panel";

export default function LayoutDesktop({
  banksArray,
}: {
  banksArray: CardInfo[];
}) {
  const { currentLectureId } = useAppSelector(selectActions);
  const [bankDetail, setBankDetail] = useState(banksArray[0]);

  useEffect(() => {
    setBankDetail(banksArray[0]);
  }, [currentLectureId]);

  const handleSetBankDetail = useCallback((bank: CardInfo) => {
    setBankDetail(bank);
  }, []);

  return (
    <Grid grow>
      <Grid.Col span={6}>
        <CardGrid
          group={banksArray}
          handleSetBankDetail={handleSetBankDetail}
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <BankDetail key={bankDetail.cardInfo.id} bank={bankDetail} />
      </Grid.Col>
    </Grid>
  );
}
