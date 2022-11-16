import { createStyles, Group, Button, Avatar } from "@mantine/core";
import { useSession, signOut, getSession, signIn } from "next-auth/react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function Auth() {
  const { data: session } = useSession();
  const { classes } = useStyles();
  if (session) {
    return (
      <Group className={classes.hiddenMobile}>
        <Link href="/community" passHref>
          <Avatar
            src={session.user.image || null}
            alt={`${session.user.name} profile picture`}
            radius="xl"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <Link href="/" passHref>
          <Button color="violet" onClick={() => signOut()}>
            Sign out
          </Button>
        </Link>
      </Group>
    );
  }
  return (
    <Group className={classes.hiddenMobile}>
      <Link href="/registration/signin" passHref>
        <Button color="violet">Sign in</Button>
      </Link>
    </Group>
  );
}
