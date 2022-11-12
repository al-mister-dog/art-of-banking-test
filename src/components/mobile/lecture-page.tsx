import { Text, createStyles } from "@mantine/core";
import Toolbar from "./interactive-ui/settings/toolbar";
import Article from "./lectures/article";
import KeyTerms from "./lectures/key-terms";
import BalanceSheets from "./interactive-ui/cards/card-list";
import Charts from "./charts";
import NextLectureLink from "../shared-ui/next-lecture-link";

import { useNextPage } from "../../hooks/useNextPage";
import { colors } from "../../config/colorPalette";
const useStyles = createStyles((theme) => ({
  interactiveUiContainer: {
    backgroundColor: colors.background1,
    paddingBottom: "200px",
    marginBottom: -25,
  },
  keyTermsContainer: {
    backgroundColor: colors.background1,
    paddingBottom: "50px",
  },
  balanceSheets: {
    padding: 16,
  },
}));

export default function LecturePageMobile({
  slug,
  title,
  text,
  assignment,
  keyTermsIds,
  nextLecture,
}) {
  const { classes } = useStyles();
  let link = useNextPage(nextLecture);
  return (
    <>
      <Article
        slug={slug}
        title={title}
        text={text}
        assignment={assignment}
        nextLecture={nextLecture}
      />
      {title !== "Introduction" && (
        <>
          <div className={classes.interactiveUiContainer}>
            <div className={classes.balanceSheets}>
              <div
                style={{
                  marginBottom: "25px",
                  padding: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Toolbar />
              </div>

              <BalanceSheets />
              <Charts />
            </div>
          </div>
          <div className={classes.keyTermsContainer}>
            <KeyTerms ids={keyTermsIds} />
            <div style={{ padding: "50px", backgroundColor: "inherit" }}>
              <NextLectureLink nextLecture={nextLecture} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
