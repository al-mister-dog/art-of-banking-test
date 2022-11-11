import { createStyles, useMantineTheme } from "@mantine/core";
import { Text, Title } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  card: {
    paddingTop: 25,
    paddingBottom: 10,
    backgroundColor: colors.background3,
  },
  desktopWidth: {
    width: "65%",
    paddingLeft: "50px",
  },
}));
export default function Assignment({ assignment, nextLecture }) {
  const { classes } = useStyles();

  return (
    <div>
      <div style={{ display: "flex", marginTop: "150px" }}>
        <div
          style={{
            borderTop: `1px solid #dee2e6`,
            borderRight: `1px solid #dee2e6`,
            borderTopRightRadius: 15,
            padding: "5px 50px 0px 50px",
            backgroundColor: colors.background3,
          }}
        >
          <h1
            style={{
              margin: 0,
              padding: 0,
              fontWeight: "lighter",
              letterSpacing: 1,
            }}
          >
            Assignment
          </h1>
        </div>
        <div
          style={{
            margin: 0,
            padding: 0,
            borderBottom: `1px solid #dee2e6`,
            flexGrow: 1,
          }}
        ></div>
      </div>

      <div className={`${classes.card}`}>
        <div
          style={{
            paddingLeft: "50px",
            paddingRight: "25rem",
          }}
        >
          {assignment.slice(0, 7) === "Sources" ? (
            <>
              <Text size="lg" weight="bold">
                Sources
              </Text>
              {assignment
                .split(":")
                .slice(1)
                .map((src, i) => (
                  <Text key={i} size="lg">
                    {src}
                  </Text>
                ))}
            </>
          ) : (
            <p
              style={{ color: colors.text, fontSize: "16px", letterSpacing: 1 }}
            >
              {assignment}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
