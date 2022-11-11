import { useAppSelector } from "../../../../../app/hooks";
import { selectSettings } from "../../../../../features/settings/settingsSlice";
import { createContext, useState } from "react";
import { Record } from "../../../../../domain/services/records";
import { CardInfo } from "../../types";
import {
  Card,
  Center,
  SimpleGrid,
  Text,
  Title,
  createStyles,
  Drawer,
  useMantineTheme,
} from "@mantine/core";
import BankDetail from "../../bank-detail/panel";
import BalanceSheetRowHeading from "../balances/balance-sheet-heading";
import SpreadsheetList from "../balances/balance-displays/spreadsheet-list";
import { useHover } from "@mantine/hooks";
import { colors } from "../../../../../config/colorPalette";

export const DrawerContext = createContext((v: boolean) => {});

export default function CardUI({ bank }: { bank: CardInfo }) {
  const { displaySettings, spreadsheetSettings } =
    useAppSelector(selectSettings);
  const [opened, setOpened] = useState(false);
  const { hovered, ref } = useHover();
  const theme = useMantineTheme();

  let spreadsheetBalances = { assets: undefined, liabilities: undefined };
  if (spreadsheetSettings.each) {
    spreadsheetBalances = Record.getLastTwo(bank.cardInfo.id);
  } else if (spreadsheetSettings.all) {
    spreadsheetBalances = Record.getAllTransactions(bank.cardInfo.id);
  }

  return (
    <>
      <Card
        key={bank.cardInfo.id}
        ref={ref}
        shadow="sm"
        p="sm"
        radius="xs"
        style={{
          backgroundColor: colors.background2,
          paddingBottom: "0px",
          width: "100%",
          height: "11.75rem",
          margin: "auto",
          border: hovered ? `2px solid ${theme.colors[bank.color][2]}` : "",
        }}
        onClick={() => setOpened(true)}
      >
        <Card.Section style={{ padding: "3px", cursor: "pointer" }}>
          <Center>
            <h4
              style={{
                color: theme.colors[bank.color][9],
                padding: 0,
                margin: 0,
              }}
            >
              {bank.cardInfo.name}
            </h4>
          </Center>
        </Card.Section>
        <Card.Section>
          <SimpleGrid
            cols={2}
            sx={{
              borderBottom: `1px solid ${theme.colors[bank.color][2]}`,
              height: "1.25rem",
            }}
          >
            <Text
              size="xs"
              align="center"
              color={`${theme.colors[bank.color][9]}`}
            >
              Assets
            </Text>
            <Text
              size="xs"
              align="center"
              color={`${theme.colors[bank.color][9]}`}
            >
              Liabilities
            </Text>
          </SimpleGrid>
        </Card.Section>
        <Card.Section style={{ padding: "5px" }}>
          {displaySettings.spreadsheet &&
          spreadsheetBalances.assets !== undefined ? (
            <SpreadsheetList
              assets={spreadsheetBalances.assets}
              liabilities={spreadsheetBalances.liabilities}
              bank={bank}
            />
          ) : (
            <SimpleGrid
              cols={2}
              style={{ height: "7.5rem", overflowX: "hidden" }}
            >
              <div
                style={{
                  borderRight: `1px solid ${theme.colors[bank.color][2]}`,
                }}
              >
                {bank.balanceSheet.assets.map((asset: any) => {
                  return (
                    <BalanceSheetRowHeading
                      key={asset.instrument}
                      side={asset}
                      id={bank.cardInfo.id}
                      textColor={bank.color}
                      bank={bank}
                    />
                  );
                })}
              </div>
              <div>
                {bank.balanceSheet.liabilities.map((liability: any) => {
                  return (
                    <BalanceSheetRowHeading
                      key={liability.instrument}
                      side={liability}
                      id={bank.cardInfo.id}
                      textColor={bank.color}
                      bank={bank}
                    />
                  );
                })}
              </div>
            </SimpleGrid>
          )}
        </Card.Section>
      </Card>
      <DrawerContext.Provider value={setOpened}>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          padding="xl"
          size="lg"
        >
          <BankDetail bank={bank} />
        </Drawer>
      </DrawerContext.Provider>
    </>
  );
}
