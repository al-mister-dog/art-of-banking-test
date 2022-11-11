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
    backgroundColor: colors.background3,
    paddingBottom: "50px",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    boxShadow:
      "0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px",
    zIndex: 99999,
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
              <div style={{ padding: "50px", backgroundColor: "#FFD9E5" }}>
                <NextLectureLink nextLecture={nextLecture} />
              </div>
            )}
          </div>
          {keyTermsIds.length > 0 && (
            <div>
              <KeyTerms ids={keyTermsIds} />
              <div style={{ padding: "50px", backgroundColor: "#FFD9E5" }}>
                <NextLectureLink nextLecture={nextLecture} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
