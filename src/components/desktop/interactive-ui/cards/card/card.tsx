import { useAppSelector } from "../../../../../app/hooks";
import { selectSettings } from "../../../../../features/settings/settingsSlice";
import { useCallback } from "react";
import { useHover } from "@mantine/hooks";
import {
  Card,
  Center,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { CardInfo } from "../../types";
import { Record } from "../../../../../domain/services/records";
import BalanceSheetRowHeading from "../balances/balance-sheet-heading";
import SpreadsheetList from "../balances/balance-displays/spreadsheet-list";

interface Props {
  bank: CardInfo;
  handleSetBankDetail: (v: CardInfo) => void;
}

export default function CardUI({ bank, handleSetBankDetail }: Props) {
  const { displaySettings, spreadsheetSettings } =
    useAppSelector(selectSettings);
  const { hovered, ref } = useHover();
  const theme = useMantineTheme();

  const onSelectBank = useCallback((bank: CardInfo) => {
    handleSetBankDetail(bank);
  }, []);

  let spreadsheetBalances = { assets: undefined, liabilities: undefined };
  if (spreadsheetSettings.each) {
    spreadsheetBalances = Record.getLastTwo(bank.cardInfo.id);
  } else if (spreadsheetSettings.all) {
    spreadsheetBalances = Record.getAllTransactions(bank.cardInfo.id);
  }

  return (
    <Card
      key={bank.cardInfo.id}
      ref={ref}
      shadow="sm"
      p="sm"
      radius="xs"
      style={{
        height: "12.75rem",
        backgroundColor: theme.colors.violet[1],
        paddingBottom: "0px",
        cursor: "pointer",
        border: hovered ? `2px solid ${theme.colors[bank.color][2]}` : "",
      }}
      onClick={() => onSelectBank(bank)}
    >
      <Card.Section style={{ padding: "3px", cursor: "pointer" }}>
        <Center>
          <Title order={4} color={theme.colors[bank.color][9]}>
            {bank.cardInfo.name}
          </Title>
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
            weight="bold"
            align="center"
            color={`${theme.colors[bank.color][9]}`}
          >
            Assets
          </Text>
          <Text
            size="xs"
            weight="bold"
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
            spacing={5}
            style={{ height: "8.8rem", overflowX: "hidden" }}
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
  );
}
