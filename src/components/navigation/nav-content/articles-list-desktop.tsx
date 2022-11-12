import { createStyles } from "@mantine/core";
import { articleRoutes } from "../../../config/routes/articleRoutes";
import { Accordion, List, Text } from "@mantine/core";
import Link from "next/link";
import { colors } from "../../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  listItem: {
    borderLeft: "1px solid gray",
    padding: "5px 0px 5px 20px",
    "&:hover": {
      backgroundColor: theme.colors.violet[1],
      borderLeft: "1px solid blue",
    },
  },
}));

export default function LecturesContent() {
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
                {routes.map((route: any, i) => {
                  const { id, title, path, routes } = route;
                  if (routes) {
                    return (
                      <NestedRoutes
                        key={id}
                        title={title}
                        path={path}
                        id={id}
                        routes={routes}
                      />
                    );
                  }
                  return (
                    <div key={id}>
                      <List.Item
                        className={classes.listItem}
                        style={{
                          cursor: "pointer",
                        }}
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

function NestedRoutes({ title, path, id, routes }) {
  const { classes } = useStyles();

  return (
    <div key={id}>
      <List.Item className={classes.listItem} style={{ cursor: "pointer" }}>
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
      <List size="xs">
        {routes[0].routes.map((route, i) => (
          <List.Item
            key={route.id}
            className={classes.listItem}
            style={{ cursor: "pointer" }}
          >
            <Link
              href={{
                pathname: `/articles${route.path}`,
                query: { path, id },
              }}
              as={`/articles${route.path}`}
              passHref
            >
              <Text>{route.title}</Text>
            </Link>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
