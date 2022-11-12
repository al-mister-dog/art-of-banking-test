import { createStyles } from "@mantine/core";
import { Text, Title } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import { useNextPage } from "../../../hooks/useNextPage";
import NextLectureLink from "../../shared-ui/next-lecture-link";

const useStyles = createStyles((theme) => ({
  title: {
    padding: 16,
    marginBottom: 0,
    display: "inline-block",
    backgroundColor: colors.background1,
    borderTop: `1px solid ${theme.colors.violet[1]}`,
    borderRight: `1px solid ${theme.colors.violet[1]}`,
    borderTopRightRadius: 5,
  },
  card: {
    paddingTop: 25,
    backgroundColor: colors.background1,
  },
}));
export default function Assignment({ assignment, nextLecture }) {
  const { classes } = useStyles();
  let link = useNextPage(nextLecture);
  return (
    <div>
      <Title className={classes.title} order={2}>
        Assignment
      </Title>
      <div className={`${classes.card}`}>
        <div
          style={{
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Text size="md" weight="bold" italic>
            {assignment}
          </Text>
          <NextLectureLink nextLecture={nextLecture} />
        </div>
      </div>
    </div>
  );
}
