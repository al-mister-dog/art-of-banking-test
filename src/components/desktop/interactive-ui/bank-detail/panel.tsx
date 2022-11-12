import {
  Card,
  Center,
  Title,
  Tabs,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { CardInfo } from "../types";
import ActionsPanel from "./actions/panel";
import React from "react";
import RecordsPanel from "./records/panel";
import AccountsPanel from "./accounts/panel";
import { colors } from "../../../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  header: { padding: "5px" },
  grape: {
    backgroundColor: theme.colors.grape[8],
  },
  violet: {
    backgroundColor: theme.colors.violet[8],
  },
  indigo: {
    backgroundColor: theme.colors.indigo[8],
  },
  blue: {
    backgroundColor: theme.colors.blue[8],
  },
}));

function SidePanel({ bank }: { bank: CardInfo }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Card
      p="sm"
      radius="xs"
      shadow="sm"
      style={{
        paddingBottom: "0px",
        height: "26.35rem",
        backgroundColor: colors.background2,
        
      }}
    >
      <Card.Section className={classes.header}>
        <Center>
          <h2
            style={{
              color: theme.colors[bank.color][9],
              margin: 0,
              padding: 0,
            }}
          >
            {bank.cardInfo.name}
          </h2>
        </Center>
      </Card.Section>
      <Tabs color={`${bank.color}`} defaultValue="actions">
        <Tabs.List grow>
          <Tabs.Tab value="records">
            <Text color={theme.colors[bank.color][9]}>Records</Text>
          </Tabs.Tab>
          <Tabs.Tab value="actions">
            <Text color={theme.colors[bank.color][9]}>Actions</Text>
          </Tabs.Tab>
          <Tabs.Tab value="accounts">
            <Text color={theme.colors[bank.color][9]}>Accounts</Text>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="records" pt="xs">
          <RecordsPanel bank={bank} />
        </Tabs.Panel>
        <Tabs.Panel value="actions" pt="xs">
          <ActionsPanel bank={bank} />
        </Tabs.Panel>

        <Tabs.Panel value="accounts" pt="xs">
          <AccountsPanel bank={bank} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}

export default React.memo(SidePanel);
