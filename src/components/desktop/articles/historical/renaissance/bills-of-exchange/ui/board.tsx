import {
  ActionIcon,
  Card,
  Grid,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
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

  function selectPlayer(player: any) {
    setSelected(player.id);
  }

  function handleRefresh() {
    dispatch(reset());
  }
  return (
    <Grid grow>
      <Grid.Col span={4}>
        <CardGrid
          florencePlayers={florencePlayers}
          lyonsPlayers={lyonsPlayers}
          selectPlayer={selectPlayer}
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Card
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
        </Card>
        {selected === "me" && <BankDetail player={me} />}
        {selected === "you" && <BankDetail player={you} />}
        {selected === "salviati" && <BankDetail player={salviati} />}
        {selected === "tomasso" && <BankDetail player={tomasso} />}
        {selected === "piero" && <BankDetail player={piero} />}
        {selected === "federigo" && <BankDetail player={federigo} />}
      </Grid.Col>
    </Grid>
  );
}
