import React from "react";
import { splitArray } from "../../../../helpers";
import { Card, Center, Grid, Text, useMantineTheme } from "@mantine/core";
import BankCard from "./card";
import { ThemeContext } from "@emotion/react";
import { colors } from "../../../../../config/colorPalette";

function CardGrid({ group, handleSetBankDetail }) {
  const [group1, group2] = splitArray(group);
  const theme = useMantineTheme();
  return (
    <Grid gutter="sm" grow>
      <Grid.Col span={1}>
        <div
          style={{
            maxHeight: "40rem",
            overflow: "auto",
          }}
        >
          {group1.map((bank) => (
            <div key={bank.cardInfo.id} style={{ marginBottom: "5px" }}>
              <BankCard bank={bank} handleSetBankDetail={handleSetBankDetail} />
            </div>
          ))}
        </div>
      </Grid.Col>
      <Grid.Col span={1}>
        <div style={{ maxHeight: "40rem", overflow: "auto" }}>
          {group2.map((bank) => (
            <div key={bank.cardInfo.id} style={{ marginBottom: "5px" }}>
              <BankCard bank={bank} handleSetBankDetail={handleSetBankDetail} />
            </div>
          ))}
        </div>
      </Grid.Col>
    </Grid>
  );
}

export default React.memo(CardGrid); //may not be needed thanks to useCallback
