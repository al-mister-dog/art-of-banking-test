import { createStyles, useMantineTheme } from "@mantine/core";
import { Text, Title } from "@mantine/core";
import Link from "next/link";
import { colors } from "../../../config/colorPalette";
import Pill from "../../shared-ui/components/Pill";

const useStyles = createStyles((theme) => ({
  card: {
    paddingTop: 25,
    paddingBottom: 10,
    paddingLeft: 50,
    backgroundColor: colors.background3,
    display: "flex",
    justifyContent: "space-around",
  },
}));
export default function Assignment({ assignment, nextLecture }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "80px",
        }}
      >
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
            width: "50%",
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
        <div style={{ width: "40%" }}>
          <p
            style={{
              color: colors.text,
              fontSize: "14px",
              letterSpacing: 1,
              fontStyle: "italic",
            }}
          >
            Instructions: Click on a bank or customer's balance sheet to show
            more details in the selected bank panel on the right hand side. Here
            you can perform actions such as depositing cash. For more detailed
            instructions{" "}
            <span style={{color: "purple"}}>
              <Link href="/lectures/instructions">click here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
