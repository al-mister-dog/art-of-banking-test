import { Title, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Link from "next/link";
import { mediaQuery } from "../../../config/media-query";

export default function Intro({ title, text, nextPath }) {
  const isMobile = useMediaQuery(mediaQuery);
  return (
    <>
      <div
        style={{
          padding: `0px ${isMobile ? "5px" : "200px"} 0px ${
            isMobile ? "5px" : "50px"
          }`,
          marginTop: "200px",
        }}
      >
        <Title>{title}</Title>
        <div style={{ marginTop: "25px" }}>
          <Text
            size="xl"
            sx={{
              letterSpacing: "1px",
              marginBottom: "25px",
            }}
          >
            {text}
          </Text>
          <div style={{ marginTop: "25px" }}>
            <Text italic weight="bold" color="violet">
              <Link href={`/lectures${nextPath}`}>
                To the Next Lecture. . .
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
