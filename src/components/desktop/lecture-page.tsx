import { createStyles } from "@mantine/core";
import BalanceSheets from "./interactive-ui/cards/card-list";
import ChartsAndSettings from "./charts-and-settings";
import Toolbar from "./interactive-ui/settings/toolbar";
import KeyTerms from "../lectures/article/lecture-index/key-terms";
import Article from "./lectures/article";
import NextLectureLink from "../shared-ui/next-lecture-link";
import { colors } from "../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  assignmentContainer: {
    backgroundColor: colors.background2,
    // paddingBottom: "200px",
    // marginBottom: -25,
  },
  keyTermsContainer: {
    // backgroundColor: colors.background1,
    paddingBottom: "50px",
  },
  balanceSheets: {
    padding: 16,
  },
}));

export default function LecturePath({
  slug,
  title,
  text,
  assignment,
  keyTermsIds,
  nextLecture,
}) {
  const { classes } = useStyles();
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
          <div className={classes.assignmentContainer}>
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
              <ChartsAndSettings />
            </div>
            {keyTermsIds.length === 0 && (
              <div style={{ padding: "50px", backgroundColor: "inherit" }}>
                <NextLectureLink nextLecture={nextLecture} />
              </div>
            )}
          </div>
          {keyTermsIds.length > 0 && (
            <div className={classes.keyTermsContainer}>
              <KeyTerms ids={keyTermsIds} />
              <div style={{ padding: "50px", backgroundColor: "inherit" }}>
                <NextLectureLink nextLecture={nextLecture} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
