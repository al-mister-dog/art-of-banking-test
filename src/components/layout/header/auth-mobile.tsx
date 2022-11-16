import { Group, Button, Text } from "@mantine/core";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Auth({ closeDrawer }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <Group position="center" grow pb="xl" px="md">
        <Link href="/community" passHref>
          <Text>{session.user.name}</Text>
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
    <Group position="center" grow pb="xl" px="md">
      <Link href="/registration/signin" passHref>
        <Button color="violet" variant="default" onClick={closeDrawer}>
          Sign in
        </Button>
      </Link>
    </Group>
  );
}
