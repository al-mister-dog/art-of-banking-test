import { Card, Center, Text, Title } from "@mantine/core";
import Link from "next/link";
import { colors } from "../../config/colorPalette";
import { useNextPage } from "../../hooks/useNextPage";
import { useHover } from "@mantine/hooks";

export default function NextLectureLink({ nextLecture }) {
  let link = useNextPage(nextLecture);
  const { hovered, ref } = useHover();
  return (
    <Link href={`/lectures${link.path}`}>
      <Card
        ref={ref}
        mt={50}
        mb={150}
        ml={25}
        shadow="sm"
        style={{
          maxWidth: "40vw",
          backgroundColor: hovered ? colors.background3 : colors.background2,
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
            <Title order={2}>{`Next Lecture: ${link.title}...`} </Title>
          </Center>
        </div>
      </Card>
    </Link>
  );
}
