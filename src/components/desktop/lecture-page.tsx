import { createStyles } from "@mantine/core";
import BalanceSheets from "./interactive-ui/cards/card-list";
import ChartsAndSettings from "./charts-and-settings";
import Toolbar from "./interactive-ui/settings/toolbar";
import KeyTerms from "../lectures/article/lecture-index/key-terms";
import Article from "./lectures/article";
import NextLectureLink from "../shared-ui/next-lecture-link";
import LayoutDesktop from "./interactive-ui/layout";
import { colors } from "../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  assignmentContainer: {
    backgroundColor: colors.background3,
    paddingBottom: "25px",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    boxShadow:
      "0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px",
    zIndex: 99999,
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
      {keyTermsIds.length === 0 && (
        <div style={{ padding: "50px", backgroundColor: colors.background3 }}>
          <NextLectureLink nextLecture={nextLecture} />
        </div>
      )}
      {title !== "Introduction" && (
        <>
          <div className={classes.assignmentContainer}>
            <LayoutDesktop />
          </div>

          {keyTermsIds.length > 0 && (
            <div>
              <KeyTerms ids={keyTermsIds} />
              <div
                style={{
                  padding: "50px",

                  backgroundColor: "#FFD9E5",
                }}
              >
                <NextLectureLink nextLecture={nextLecture} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
