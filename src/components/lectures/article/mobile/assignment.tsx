import { Box, createStyles } from "@mantine/core";
import { Card, Text, Title } from "@mantine/core";

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
export default function Assignment({ assignment }) {
  const { classes } = useStyles();

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
          {assignment.slice(0, 7) === "Sources" ? (
            <Box pb="xl">
              <Text size="lg" weight="bold">
                Sources
              </Text>

              {assignment
                .split(":")
                .slice(1)
                .map((src) => (
                  <Text italic size="lg" >{src}</Text>
                ))}
            </Box>
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
