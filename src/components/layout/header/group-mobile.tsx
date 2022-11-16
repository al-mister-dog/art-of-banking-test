import {
  createStyles,
  Group,
  Button,
  Text,
  Divider,
  Center,
  Box,
  useMantineTheme,
  UnstyledButton,
  ThemeIcon,
  Drawer,
  ScrollArea,
  Collapse,
} from "@mantine/core";

import { IconChevronDown } from "@tabler/icons";

import Link from "next/link";
import LecturesContent from "../../navigation/nav-learn-content/lectures-list-mobile";
import ArticlesContent from "../../navigation/nav-learn-content/articles-list-mobile";
import { features } from "./features-data";
import Auth from "./auth-mobile";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

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

  hiddenDesktop: {
    color: "#2F1E62",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function HeaderGroup({
  drawerOpened,
  closeDrawer,
  toggleLinks,
  linksOpened,
  toggleLectures,
  lecturesOpened,
  toggleArticles,
  articlesOpened,
}) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const links = features.map((item) => (
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
  ));

  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title="Art of Banking"
      className={classes.hiddenDesktop}
      zIndex={1000000}
    >
      <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <a href="/" className={classes.link}>
          Home
        </a>

        <UnstyledButton className={classes.link} onClick={toggleLectures}>
          <Center inline>
            <Box component="span" mr={5}>
              Learn
            </Box>
            <IconChevronDown size={16} color="purple" />
          </Center>
        </UnstyledButton>
        <Collapse in={lecturesOpened}>
          <LecturesContent closeDrawer={closeDrawer} />
        </Collapse>
        <UnstyledButton className={classes.link} onClick={toggleArticles}>
          <Center inline>
            <Box component="span" mr={5}>
              Articles
            </Box>
            <IconChevronDown size={16} color="purple" />
          </Center>
        </UnstyledButton>
        <Collapse in={articlesOpened}>
          <ArticlesContent closeDrawer={closeDrawer} />
        </Collapse>
        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              Features
            </Box>
            <IconChevronDown size={16} color="purple" />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{links}</Collapse>
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <Auth closeDrawer={closeDrawer} />
      </ScrollArea>
    </Drawer>
  );
}
