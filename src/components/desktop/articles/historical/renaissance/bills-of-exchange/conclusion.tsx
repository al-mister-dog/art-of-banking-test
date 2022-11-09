import { useAppSelector } from "../../../../../../app/hooks";
import {
  selectBankers,
  selectTraders,
} from "../../../../../../features/renaissance/renaissanceSlice";

import { Box, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import Title from "../../../../../shared-ui/texts/Title";
import ArticleText from "../../../../../shared-ui/texts/Article-Text";
import SubTitle from "../../../texts/Subtitle";

import Board from "./ui/board";

export const texts = {
  title: `Conclusion`,
  paragraphs: [
    `Davanzati's exchange has been completed (history has repeated itself). 'You' have 
        managed to get around usury laws and turn a profit on exchanging bills. The next step 
        would be for 'You' and Tomasso to share their spoils, most likely through corresponding
        (nostro-vostro) accounts. Correspondent banking is explained in another module on this course.`,
    `However, this particular set of exchanges is not the only way to turn a profit. Can you
        figure any other ways to make a profit through the art of sixteenth century exchange banking?`,
  ],
  assignment: `Assignment: Go through Davanzati's example again or try some different exchanges out.
      You can toggle the certainty quotes (altering the network hierarchy) or alter the echange rates. 
      Then move on to the next module in the course.`,
};

export default function Conclusion() {
  const theme = useMantineTheme();

  const { me, salviati, federigo, piero } = useAppSelector(selectTraders);
  const { you, tomasso } = useAppSelector(selectBankers);

  const florencePlayers = [me, you, federigo];
  const lyonsPlayers = [salviati, tomasso, piero];

  return (
    <>
      <Box ml={25} mt={200}>
        <Title>{texts.title}</Title>
      </Box>

      {texts.paragraphs.map((paragraph) => (
        <ArticleText key={paragraph}>{paragraph}</ArticleText>
      ))}

      <Board florencePlayers={florencePlayers} lyonsPlayers={lyonsPlayers} />
      <Box p={25}>
        <SubTitle>
          To learn more about correspondent banking, go to{" "}
          <Link href="/lectures/towards-a-central-bank/correspondent-banking">
            <a style={{ color: theme.colors.violet[9] }}>
              Money and Banking Lectures: Correspondent Banking. . .
            </a>
          </Link>
        </SubTitle>
      </Box>
    </>
  );
}
