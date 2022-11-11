import { Drawer, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { RefreshDot } from "tabler-icons-react";
import { useAppDispatch, useAppSelector } from "../../../../../../../app/hooks";
import {
  reset,
  selectBankers,
  selectTraders,
} from "../../../../../../../features/renaissance/renaissanceSlice";
import BankDetail from "./bank-detail";
import CardGrid from "./card-grid";

export default function Board({ florencePlayers, lyonsPlayers }) {
  const theme = useMantineTheme();
  const dispatch = useAppDispatch();
  const { me, salviati, federigo, piero } = useAppSelector(selectTraders);
  const { you, tomasso } = useAppSelector(selectBankers);

  const [selected, setSelected] = useState<string>("me");
  const [opened, setOpened] = useState(false);

  function selectPlayer(player: any) {
    setSelected(player.id);
    setOpened(true);
  }

  function handleRefresh() {
    dispatch(reset());
  }
  return (
    <>
      <RefreshDot size={40} color={`${theme.colors.violet[9]}`} />
      <CardGrid
        florencePlayers={florencePlayers}
        lyonsPlayers={lyonsPlayers}
        selectPlayer={selectPlayer}
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
      >
        {selected === "me" && <BankDetail player={me} setOpened={setOpened} />}
        {selected === "you" && (
          <BankDetail player={you} setOpened={setOpened} />
        )}
        {selected === "salviati" && (
          <BankDetail player={salviati} setOpened={setOpened} />
        )}
        {selected === "tomasso" && (
          <BankDetail player={tomasso} setOpened={setOpened} />
        )}
        {selected === "piero" && (
          <BankDetail player={piero} setOpened={setOpened} />
        )}
        {selected === "federigo" && (
          <BankDetail player={federigo} setOpened={setOpened} />
        )}
      </Drawer>
    </>
  );
}

{
  /* <Card
style={{
  height: "4rem",
  marginBottom: "0.55rem",
  backgroundColor: theme.colors.violet[1],
}}
>
<Tooltip color="violet" label="Reset Balancesheets" position="right">
  <ActionIcon size="lg" onClick={handleRefresh}>
    <RefreshDot size={40} color={`${theme.colors.violet[9]}`} />
  </ActionIcon>
</Tooltip>

{selected === "me" && <BankDetail player={me} />}
{selected === "you" && <BankDetail player={you} />}
{selected === "salviati" && <BankDetail player={salviati} />}
{selected === "tomasso" && <BankDetail player={tomasso} />}
{selected === "piero" && <BankDetail player={piero} />}
{selected === "federigo" && <BankDetail player={federigo} />}
</Card> */
}
