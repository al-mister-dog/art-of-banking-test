import { SimpleGrid, Text, Title, useMantineTheme } from "@mantine/core";
import example1 from "../../../public/aob_example2_cropped.png";
import example2 from "../../../public/aob_example3.png";
import Divide from "./divide";
import LazyShow from "./transitions/lazy-show";
import Example from "./example";
import { colors } from "../../config/colorPalette";

export default function HeroDesktop() {
  const theme = useMantineTheme();
  const backgroundViolet = theme.colors.violet[0];
  const backgroundRed = theme.colors.red[0];

  const examples = {
    example1: {
      title: "See Behind the Numbers",
      text: `Use the tools that economists use to give us all the figures we see 
      everyday in the news. Find out how metrics such as inflation and GDP are worked out.`,
    },
    example2: {
      title: "Take Control of the Financial System",
      text: `Find out how money flows between banks and financial institutions using interactive
      tools and analysis.`,
    },
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            width: "60%",
            margin: "auto",
          }}
        >
          <Title
            size={50}
            className="hero-headline"
            style={{
              color: colors.textColor,
              letterSpacing: "3px",
              textShadow: `5px 10px 50px rgb(0 0 0 / 50%)`,
            }}
          >
            Art of Banking
          </Title>
          <Title
            className="hero-text-1"
            weight="bold"
            style={{
              color: colors.textColor,
              letterSpacing: "3px",
              textShadow: `5px 10px 50px rgb(0 0 0 / 50%)`,
            }}
          >
            Your site to learn money and banking
          </Title>
          <Text
            mt={15}
            className="hero-text-4"
            size="sm"
            weight="bold"
            style={{
              color: colors.textColor,
              letterSpacing: "3px",
              textShadow: `5px 10px 50px rgb(0 0 0 / 50%)`,
              fontStyle: "italic",
            }}
          >
            "The world economy is made from the fabric of global finance. The
            fabric of global finance is an interlocking matrix of corporate
            balance sheets."
          </Text>
        </div>
      </div>
      <div
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <LazyShow>
            <Title
              style={{
                color: colors.textColor,
                letterSpacing: "3px",
                textShadow: `5px 10px 50px rgb(0 0 0 / 50%)`,
              }}
              size={40}
              align="center"
            >
              Understand What Money Is, Where It Goes, and Why It Matters.
            </Title>
          </LazyShow>
        </div>
      </div>
      <div
        style={{
          height: "200vh",
          overflowX: "hidden",
        }}
      >
        <Divide>
          <Example
            title={examples.example1.title}
            body={examples.example1.text}
            image={example2}
            direction="right"
          />
          <div style={{ height: "100px" }} />
          <Example
            title={examples.example2.title}
            body={examples.example2.text}
            image={example1}
            direction="left"
          />
        </Divide>
      </div>
      <div
        style={{
          height: "50vh",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <LazyShow>
            <Title
              style={{
                color: colors.textColor,
                letterSpacing: "3px",
                textShadow: `5px 10px 25px rgb(0 0 0 / 50%)`,
              }}
              size={40}
              align="center"
            >
              Learn the Tricks of the Masters. From the Renaissance Bankers to
              the New York Money Markets.
            </Title>
          </LazyShow>
        </div>
      </div>
    </>
  );
}
