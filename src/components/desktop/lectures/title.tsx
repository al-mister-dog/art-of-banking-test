import { Breadcrumbs, Text } from "@mantine/core";
import Title from "../../shared-ui/texts/Title";
import Link from "next/link";

export default function LectureTitle({ slug, title }) {
  return (
    <>
      <Breadcrumbs style={{ marginBottom: "25px", fontWeight: "bold" }}>
        {[
          <Link href="/lectures" key={1}>
            <Text style={{ cursor: "pointer" }}>Lectures</Text>
          </Link>,
          <Link href={`/lectures/${slug[0]}`} key={2}>
            <Text style={{ cursor: "pointer" }} transform="capitalize">
              {slug[0].split("-").join(" ")}
            </Text>
          </Link>,
        ]}
      </Breadcrumbs>
      <Title>{title}</Title>
    </>
  );
}
