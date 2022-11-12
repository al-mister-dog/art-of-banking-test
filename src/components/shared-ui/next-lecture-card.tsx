import { Card, Center, Text, Title, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { colors } from "../../config/colorPalette";
import { useNextPage } from "../../hooks/useNextPage";
import { useHover } from "@mantine/hooks";

export default function NextLectureLink({ nextLecture }) {
  let link = useNextPage(nextLecture);
  const { hovered, ref } = useHover();
  const theme = useMantineTheme();
  return (
    <Link href={`/lectures${link.path}`}>
      <Card
        ref={ref}
        mt={50}
        mb={150}
        // ml={25}
        shadow="sm"
        style={{
          maxWidth: "40vw",
          backgroundColor: hovered
            ? colors.text
            : colors.background2,
          color: hovered ? colors.background2 : colors.text,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Center>
            <h2
              style={{
                margin: 0,
                padding: 0,
                fontWeight: "lighter",
                fontStyle: "italic",
                letterSpacing: 1,
              }}
            >
              {`Next Lecture: ${link.title}...`}{" "}
            </h2>
          </Center>
        </div>
      </Card>
    </Link>
  );
}
