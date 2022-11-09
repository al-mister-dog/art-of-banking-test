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
  title: `Remitting Bills`,
  paragraphs: [
    `I (me) have now been paid after presenting the bill to the exchange banker 
        (you) and receiving 64 ecus in return. However, this 64 ecus came out of 
        the exchange banker's equity (from their own funds) which is not very good 
        business. The exchange banker will need to make back these funds and preferably 
        return a profit. To make back these funds the exchange banker needs to send the 
        bill to Salviati using a process called remittance.`,
    `The exchange banker in Florence (you) has an associate exchange banker in Lyons
        (Tomasso), where Salviati lives. The bill will be sent (remitted) to Tomasso who 
        can present the bill to Tomasso and receive the payment required, completing 
        this particular transaction. How a profit is made will be explained in the next 
        module.`,
    `There are now four players on the board; 'Me' and 'You' in Florence, and Tomasso 
        (exchange banker) and Salviati (importer) in Lyons. In Davanzati's example 
        Tomasso receives from 'You' the bill due from Salviati and then presents it to Salviati,
        receiving 1 gold marc (or its Lyonaise equivelant) in return`,
  ],
  assignment: `Assignment: Get 'You' to remit the bill to Tomasso and have Tomasso draw 
      the bill on Salviati. Previous steps should have been completed. If they have not been 
      completed then go back to the beginning of this module. Click refresh to reset the board.`,
};

export default function Part3() {
  const theme = useMantineTheme();
  const { me, salviati } = useAppSelector(selectTraders);
  const { you, tomasso } = useAppSelector(selectBankers);

  const florencePlayers = [me, you];
  const lyonsPlayers = [salviati, tomasso];

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
          Go to{" "}
          <Link href="rechange-1">
            <a style={{ color: theme.colors.violet[9] }}>
              Rechange: Part 1. . .
            </a>
          </Link>
        </SubTitle>
      </Box>
    </>
  );
}
