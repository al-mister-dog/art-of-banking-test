import {
  createStyles,
  Group,
  Button,
  Text,
  SimpleGrid,
  Anchor,
  Divider,
  useMantineTheme,
  UnstyledButton,
  ThemeIcon,
} from "@mantine/core";

import Link from "next/link";
import { features } from "../layout/header/features-data";

const useStyles = createStyles((theme) => ({
  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
}));

export default function HeaderGroup() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const links = features.map((item) => (
    <Link key={item.title} href={item.path}>
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color="purple" />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));
  return (
    <>
      <Divider
        my="sm"
        mx="-md"
        color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
      />

      <SimpleGrid cols={2} spacing={0}>
        {links}
      </SimpleGrid>

      <div className={classes.dropdownFooter}>
        <Group position="apart">
          <div>
            <Text weight={500} size="sm">
              Get started
            </Text>
            <Text size="xs" color="dimmed">
              Sign in to join the discussion or head straight to learning
            </Text>
          </div>
          <Button variant="default">Get started</Button>
        </Group>
      </div>
    </>
  );
}
