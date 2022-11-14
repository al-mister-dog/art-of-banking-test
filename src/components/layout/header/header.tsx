import { createStyles, Header, Group, Text, Box, Burger } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import Link from "next/link";
import { colors } from "../../../config/colorPalette";
import GroupDesktop from "./group-desktop";
import Auth from "./auth-desktop";
import GroupMobile from "./group-mobile";

const useStyles = createStyles((theme) => ({
  hiddenDesktop: {
    color: "#2F1E62",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [lecturesOpened, { toggle: toggleLectures }] = useDisclosure(false);
  const [articlesOpened, { toggle: toggleArticles }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Text weight="bold" style={{ color: colors.textColor }}>
            <Link href="/">Art of Banking</Link>
          </Text>

          <GroupDesktop />
          <Auth />
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>
      <GroupMobile
        drawerOpened={drawerOpened}
        closeDrawer={closeDrawer}
        toggleLinks={toggleLinks}
        linksOpened={linksOpened}
        toggleLectures={toggleLectures}
        lecturesOpened={lecturesOpened}
        toggleArticles={toggleArticles}
        articlesOpened={articlesOpened}
      />
    </Box>
  );
}
