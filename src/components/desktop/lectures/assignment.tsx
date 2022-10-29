import { createStyles } from "@mantine/core";
import { Text, Title } from "@mantine/core";

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
  desktopWidth: {
    width: "65%",
    paddingLeft: "50px",
  },
}));
export default function Assignment({ assignment }) {
  const { classes } = useStyles();

  return (
    <div>
      <Title
        className={classes.title}
        order={2}
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        Assignment
      </Title>
      <div className={`${classes.card}`}>
        <div
          style={{
            paddingLeft: "50px",
            paddingRight: "25rem",
          }}
        >
          {assignment.slice(0, 7) === "Sources" ? (
            <>
              <Text size="lg" weight="bold">
                Sources
              </Text>
              {assignment
                .split(":")
                .shift()
                .map((src) => (
                  <Text size="lg">{src}</Text>
                ))}
            </>
          ) : (
            <Text size="lg" weight="bold" italic>
              {assignment}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}
