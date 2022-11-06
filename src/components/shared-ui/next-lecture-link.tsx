import { Text } from "@mantine/core";
import Link from "next/link";
import { useNextPage } from "../../hooks/useNextPage";

export default function NextLectureLink({ nextLecture }) {
  let link = useNextPage(nextLecture);
  return (
    <Text italic weight="bold" color="violet">
      <Link href={`/lectures${link.path}`}>
        {`Next Lecture: ${link.title}...`} 
      </Link>
    </Text>
  );
}
