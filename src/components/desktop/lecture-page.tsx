import {
  Box,
  Card,
  Center,
  createStyles,
  SimpleGrid,
  Title,
} from "@mantine/core";
import KeyTerms from "../lectures/article/lecture-index/key-terms";
import Article from "./lectures/article";
import NextLectureLink from "../shared-ui/next-lecture-link";
import LayoutDesktop from "./interactive-ui/layout";
import { colors } from "../../config/colorPalette";
import NextLectureCard from "../shared-ui/next-lecture-card";
import Introduction from "./lectures/introduction";

const useStyles = createStyles((theme) => ({
  interactiveUiContainer: {
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
      {title === "Introduction" ? (
        <Introduction
          slug={slug}
          title={title}
          text={text}
          assignment={assignment}
          nextLecture={nextLecture}
        />
      ) : (
        <>
          <Article
            slug={slug}
            title={title}
            text={text}
            assignment={assignment}
            nextLecture={nextLecture}
          />
          <div className={classes.interactiveUiContainer}>
            <LayoutDesktop />
          </div>
          {keyTermsIds.length > 0 ? (
            <SimpleGrid cols={2}>
              <Card
                mt={50}
                mb={150}
                ml={25}
                shadow="sm"
                style={{
                  maxWidth: "40vw",
                  backgroundColor: colors.background2,
                  cursor: "pointer",
                }}
              >
                <KeyTerms ids={keyTermsIds} />
              </Card>
              <NextLectureCard nextLecture={nextLecture} />
            </SimpleGrid>
          ) : (
            <SimpleGrid cols={2}>
              <div></div>
              <NextLectureCard nextLecture={nextLecture} />
            </SimpleGrid>
          )}
        </>
      )}
    </>
  );
}
