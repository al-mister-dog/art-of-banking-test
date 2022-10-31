import { createStyles } from "@mantine/core";
import { Text, Title } from "@mantine/core";
import Link from "next/link";
import { useNextPage } from "../../../hooks/useNextPage";
import { PlayerTrackNext } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  title: {
    padding: 16,
    marginBottom: 0,
    display: "inline-block",
    background: theme.colors.violet[0],
    borderTop: `1px solid ${theme.colors.violet[1]}`,
    borderRight: `1px solid ${theme.colors.violet[1]}`,
    borderTopRightRadius: 5,
  },
  card: {
    paddingTop: 25,
    background: theme.colors.violet[0],
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
          {/* <PlayerTrackNext strokeWidth={2} style={{padding: 0, margin:0, bottom: 0}} color={"black"} /> */}
          <Text italic weight="bold" color="violet">
            <Link href={`/lectures${link.path}`}>
              {`Next Lecture: ${link.title}`}
            </Link>
          </Text>
          
        </div>
      </div>
    </div>
  );
}
