import { createStyles, Group, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));
export default function Auth() {
  const { classes } = useStyles();

  return (
    <Group className={classes.hiddenMobile}>
      <Button color="violet" variant="default">
        Log in
      </Button>
      <Button color="violet">Sign up</Button>
    </Group>
  );
}
