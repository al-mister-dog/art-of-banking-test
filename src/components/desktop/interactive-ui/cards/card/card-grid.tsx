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
    <Card
      style={{ background: theme.colors.violet[0], padding: 0 }}
      shadow="sm"
      radius="xs"
    >
      <div
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          position: "relative",
          backgroundColor: theme.colors.violet[9],
          // boxShadow: "0 2px 4px rgb(208, 191, 255 / 50%)",
          borderBottom: "1px solid rgb(208, 191, 255)",
          boxShadow:
            "0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px",
          zIndex: 99999,
        }}
      >
        <Center>
          <Text color="white" weight="bold">
            Balancesheets
          </Text>
        </Center>
      </div>

      <Grid gutter={5} grow style={{ margin: 0, paddingBottom: 5 }}>
        <Grid.Col span={1} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div
            style={{
              height: "25rem",
              overflow: "auto",
            }}
          >
            {group1.map((bank) => (
              <div key={bank.cardInfo.id} style={{ marginBottom: "5px" }}>
                <BankCard
                  bank={bank}
                  handleSetBankDetail={handleSetBankDetail}
                />
              </div>
            ))}
          </div>
        </Grid.Col>
        <Grid.Col span={1} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ height: "25rem", overflow: "auto" }}>
            {group2.map((bank) => (
              <div key={bank.cardInfo.id} style={{ marginBottom: "5px" }}>
                <BankCard
                  bank={bank}
                  handleSetBankDetail={handleSetBankDetail}
                />
              </div>
            ))}
          </div>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default React.memo(CardGrid); //may not be needed thanks to useCallback
