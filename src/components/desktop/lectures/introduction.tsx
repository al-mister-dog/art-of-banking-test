import { Card, createStyles, SimpleGrid, useMantineTheme } from "@mantine/core";
import { Text } from "@mantine/core";

import { colors } from "../../../config/colorPalette";
import NextLectureCard from "../../shared-ui/next-lecture-card";
import NextLectureLink from "../../shared-ui/next-lecture-link";

const useStyles = createStyles((theme) => ({
  card: {
    paddingTop: 25,
    paddingBottom: 10,
    paddingLeft: 50,
    backgroundColor: colors.background3,
    display: "flex",
    justifyContent: "space-around",
  },
}));

import Main from "../../shared-ui/SpoilerText";
import Title from "./title";

export default function Introduction({
  slug,
  title,
  text,
  assignment,
  nextLecture,
}) {
  return (
    <>
      <div
        style={{
          padding: `0px 200px 0px 50px`,
          marginTop: "50px",
        }}
      >
        <Title slug={slug} title={title} />
        <div style={{ marginTop: "25px" }}>
          <Main text={text} />
        </div>
      </div>

      <div style={{ marginTop: "25px" }}>
        <Sources assignment={assignment} nextLecture={nextLecture} />
      </div>
    </>
  );
}

function Sources({ assignment, nextLecture }) {
  const { classes } = useStyles();

  return (
    <div>
      <SimpleGrid cols={2}>
        <Card
          mt={50}
          mb={150}
          ml={25}
          shadow="sm"
          style={{
            maxWidth: "40vw",
            backgroundColor: colors.background2,
          }}
        >
          {assignment.slice(0, 7) === "Sources" ? (
            <>
              <h2
                style={{
                  margin: 0,
                  padding: 0,
                  fontWeight: "lighter",
                  fontStyle: "italic",
                  letterSpacing: 1,
                }}
              >
                Sources
              </h2>
              {assignment
                .split(":")
                .slice(1)
                .map((src, i) => (
                  <Text key={i} size="lg">
                    {src}
                  </Text>
                ))}
            </>
          ) : (
            <p
              style={{ color: colors.text, fontSize: "16px", letterSpacing: 1 }}
            >
              {assignment}
            </p>
          )}
        </Card>
        <NextLectureCard nextLecture={nextLecture} />
      </SimpleGrid>
    </div>
  );
}
