import { createStyles } from "@mantine/core";
import { articleRoutes } from "../../../config/routes/articleRoutes";
import { Accordion, List, Text } from "@mantine/core";

import Link from "next/link";

const useStyles = createStyles((theme) => ({
  listItem: {
    borderLeft: "1px solid gray",
    padding: "5px 0px 5px 20px",
    "&:hover": {
      backgroundColor: theme.colors.blue[1],
      borderLeft: "1px solid blue",
    },
  },
}));

export default function LecturesContent({
  setMobileOpen,
}: {
  setMobileOpen?: (v: boolean) => void;
}) {
  const { classes } = useStyles();

  return (
    <Accordion variant="filled">
      {articleRoutes.map((route) => {
        const { id, title, path, routes } = route;
        return (
          <Accordion.Item value={title} key={id}>
            <Accordion.Control>
              <Link href={path}>
                <Text size={14.2} weight={500}>
                  {title}
                </Text>
              </Link>
            </Accordion.Control>
            <Accordion.Panel>
              <List listStyleType="none">
                {routes.map((route: any) => {
                  const { id, title, path, lectureId, keyTermsIds } = route;

                  return (
                    <div
                      key={id}
                      onClick={() => {
                        if (setMobileOpen) {
                          setTimeout(() => {
                            setMobileOpen(false);
                          }, 30); //hack
                        }
                      }}
                    >
                      <List.Item
                        className={classes.listItem}
                        style={{ cursor: "pointer" }}
                      >
                        <Link
                          href={{
                            pathname: `/articles${path}`,
                            query: { path, id },
                          }}
                          as={`/articles${path}`}
                          passHref
                        >
                          <Text size={13.9}>{title}</Text>
                        </Link>
                      </List.Item>
                    </div>
                  );
                })}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
