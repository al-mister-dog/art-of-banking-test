import { createStyles, Group, Button } from "@mantine/core";
import Link from "next/link";

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
      <Link href="/registration/login" passHref>
        <Button color="violet" variant="default">
          Log in
        </Button>
      </Link>

      <Link href="/registration/signup" passHref>
        <Button color="violet">Sign up</Button>
      </Link>
    </Group>
  );
}
