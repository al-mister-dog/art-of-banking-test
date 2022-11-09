import { useAppSelector } from "../../../../../../app/hooks";
import {
  selectTraders,
  selectBankers,
} from "../../../../../../features/renaissance/renaissanceSlice";

import { Box, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import Title from "../../../../../shared-ui/texts/Title";
import ArticleText from "../../../../../shared-ui/texts/Article-Text";
import SubTitle from "../../../texts/Subtitle";
import { useState } from "react";

import Board from "./ui/board";

export const texts = {
  title: `Bills of Exchange and Units of Account`,
  paragraphs: [
    `If a merchant ships goods abroad and wants a swift payment then a problem emerges. 
        If they were to receive direct payment from the importer they would have to wait a 
        long time to receive their payment, or even worse the payment could get lost in 
        transport. Bills of exchange were a helpful tool for merchants in this case. The 
        merchant could simply write a bill with amount owed and who owes the amount, and then 
        go to the exchange bank and redeem the bill with amount owed for a local or preferred 
        currency. However the amount specified on the bill was not local currency but a special 
        unit of account.`,
    `In Western Europe during the 16th century the unit of account in
        exchange banking was called the ecu de marc (gold marc). This unit
        would be used for all bills of exchange regardless of country, and was
        then redeemed in local or preferred currencies. The exchange rate of
        the marc would depend on what was announced at the international
        exchange fairs. The fair would take place in the dominant financial
        center of the time. At the time of this exchange, the financial center
        was Lyons (France). Lyons could dicate the price of the marc in any
        currency being used in the network which covered much of Western
        Europe. At the time of this exchange, one marc was worth 64 ecus,
        another coin which would have been an ideal choice for a merchant in
        Florence.`,
    `Here we have three people; Me, a merchant from Florence, You, an
        exchange banker in Florence, and Salviati, a merchant from Lyons. In
        Davanzati's example I (me) ship 1 Marcs worth of goods to Salviati and
        and then sell my Bill to You for 64 ecus.`,
  ],
  assignment: `Assignment: Get Me to ship 1 marcs worth of goods to Salviati and
      receive payment from You. Click refresh to reset the board`,
};

export default function PartTwo() {
  const theme = useMantineTheme();
  const { me, salviati } = useAppSelector(selectTraders);
  const { you } = useAppSelector(selectBankers);

  const florencePlayers = [me, you];
  const lyonsPlayers = [salviati];

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
          <Link href="remitting-bills">
            <a style={{ color: theme.colors.violet[9] }}>
              Remitting Bills. . .
            </a>
          </Link>
        </SubTitle>
      </Box>
    </>
  );
}
