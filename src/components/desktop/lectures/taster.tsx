import { Title, Text } from "@mantine/core";

import Link from "next/link";

export default function Taster({ title, text, nextPath }) {
  return (
    <>
      <div
        style={{
          padding: `0px 200px 0px 50px`,
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
