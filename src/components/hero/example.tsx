import { Title, Text, SimpleGrid, useMantineTheme } from "@mantine/core";
import SlideIn from "./transitions/slide-in";
import Image from "next/image";
import { colors } from "../../config/colorPalette";

export default function Example({ title, body, image, direction }) {
  const theme = useMantineTheme();
  if (direction === "right") {
    return (
      <SimpleGrid
        cols={2}
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <SlideIn direction={direction}>
          <div
            style={{
              boxShadow: `5px 5px 15px 5px ${theme.colors.violet[2]}`,
              height: "350px",
              width: "500px",
              marginLeft: "50px",
            }}
          >
            <Image
              src={image}
              height={350}
              width={500}
              style={{
                borderRadius: "5px",
              }}
            ></Image>
          </div>
        </SlideIn>
        <SlideIn direction={direction}>
          <Title
            style={{
              color: colors.textColor,
              letterSpacing: "3px",
              textShadow: `5px 10px 50px rgb(0 0 0 / 50%)`,
            }}
            size={50}
            align="center"
          >
            {title}
          </Title>
          <Text
            align="center"
            style={{
              color: colors.textColor,
              letterSpacing: "3px",
              textShadow: `5px 10px 50px rgb(0 0 0 / 50%)`,
            }}
          >
            {body}
          </Text>
        </SlideIn>
      </SimpleGrid>
    );
  }

  if (direction === "left") {
    return (
      <SimpleGrid
        cols={2}
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <SlideIn direction={direction}>
          <Title
            style={{
              color: colors.textColor,
              letterSpacing: "3px",
              textShadow: `5px 10px 50px rgb(0 0 0 / 50%)`,
            }}
            size={50}
            align="center"
          >
            {title}
          </Title>
          <Text
            align="center"
            style={{
              color: colors.textColor,
              letterSpacing: "3px",
              textShadow: `5px 10px 50px rgb(0 0 0 / 50%)`,
            }}
          >
            {body}
          </Text>
        </SlideIn>
        <SlideIn direction={direction}>
          <div
            style={{
              boxShadow: `5px 5px 15px 5px ${theme.colors.violet[2]}`,
              height: "350px",
              width: "500px",
              marginLeft: "50px",
            }}
          >
            <Image
              src={image}
              height={350}
              width={500}
              style={{
                borderRadius: "5px",
              }}
            ></Image>
          </div>
        </SlideIn>
      </SimpleGrid>
    );
  }
}
