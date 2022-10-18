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

export const DrawerContext = createContext((v: boolean) => {});

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.violet[1],
    paddingBottom: "0px",
    width: "100%",
    height: "11.75rem",
    margin: "auto",
  },
  header: { padding: "3px", cursor: "pointer" },
  grape: {
    backgroundColor: theme.colors.grape,
    "&:hover": {
      backgroundColor: theme.colors.grape[3],
    },
  },
  violet: {
    backgroundColor: theme.colors.violet,
    "&:hover": {
      backgroundColor: theme.colors.violet[3],
    },
  },
  indigo: {
    backgroundColor: theme.colors.violet,
    "&:hover": {
      backgroundColor: theme.colors.violet[3],
    },
  },
  pink: {
    backgroundColor: theme.colors.pink,
    "&:hover": {
      backgroundColor: theme.colors.pink[3],
    },
  },
  teal: {
    backgroundColor: theme.colors.teal,
    "&:hover": {
      backgroundColor: theme.colors.teal[3],
    },
  },
  blue: {
    backgroundColor: theme.colors.blue,
    "&:hover": {
      backgroundColor: theme.colors.blue[3],
    },
  },
}));

export default function CardUI({ bank }: { bank: CardInfo }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const { displaySettings, spreadsheetSettings } =
    useAppSelector(selectSettings);

  let spreadsheetBalances = { assets: undefined, liabilities: undefined };
  if (spreadsheetSettings.each) {
    spreadsheetBalances = Record.getLastTwo(bank.cardInfo.id);
  } else if (spreadsheetSettings.all) {
    spreadsheetBalances = Record.getAllTransactions(bank.cardInfo.id);
  }

  return (
    <Card
      key={bank.cardInfo.id}
      shadow="sm"
      p="sm"
      radius="xs"
      className={classes.card}
    >
      <Card.Section
        className={`${classes.header} ${classes[bank.color]}`}
        onClick={() => setOpened(true)}
      >
        <Center>
          <Title order={4} color="white">
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
    </Card>
  );
}
