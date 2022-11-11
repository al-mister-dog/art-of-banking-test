import { Box, SimpleGrid, Text, Title, useMantineTheme } from "@mantine/core";
import example1 from "../../../public/aob_example2_cropped.png";
import example2 from "../../../public/aob_example3.png";
import Divide from "./divide";
import LazyShow from "./transitions/lazy-show";
import Example from "./example";
import SlideIn from "./transitions/slide-in";
import Image from "next/image";
import { colors } from "../../config/colorPalette";
import FooterMobile from "./footer-mobile";

export default function HeroDesktop() {
  const theme = useMantineTheme();

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
          background: colors.background1,
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
          <Title
            style={{
              color: "#312A45",
              letterSpacing: "3px",
            }}
            size={50}
            className="hero-headline"
          >
            Art of Banking
          </Title>
          <div style={{ marginRight: "10px" }}>
            <Text
              className="hero-text-1"
              size="md"
              weight="bold"
              style={{ color: "#312A45" }}
              align="right"
            >
              The world economy is made from the fabric
            </Text>
            <Text
              className="hero-text-2"
              size="md"
              style={{ color: "#312A45" }}
              align="right"
            >
              <span style={{ fontWeight: "bold" }}>of global finance.</span> The
              fabric of global
            </Text>
            <Text
              className="hero-text-3"
              size="md"
              style={{ color: "#312A45" }}
              align="right"
            >
              finance is an interlocking matrix
            </Text>
            <Text
              className="hero-text-4"
              size="md"
              style={{ color: "#312A45" }}
              align="right"
            >
              of corporate balance sheets.
            </Text>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          backgroundColor: colors.background1,
        }}
      >
        <div
          style={{
            position: "relative",
            top: "50%",
            // -ms-transform: translateY(-50%);
            transform: "translateY(-50%)",
          }}
        >
          <LazyShow>
            <Title
              style={{
                color: "#312A45",
                letterSpacing: "3px",
              }}
              size={25}
              align="center"
            >
              Understand What Money Is, Where It Goes, and Why It Matters.
            </Title>
          </LazyShow>
        </div>
      </div>
      <div
        style={{
          background: colors.background1,
          height: "130vh",
        }}
      >
        <Divide>
          <SlideIn direction="right">
            <div
              style={{
                boxShadow: `5px 5px 15px 5px ${theme.colors.violet[2]}`,
                height: "200px",
                width: "280px",
                margin: "auto",
              }}
            >
              <Image
                src={example2}
                height={200}
                width={280}
                style={{
                  borderRadius: "5px",
                }}
              ></Image>
            </div>
          </SlideIn>
          <div style={{ marginTop: "25px" }}>
            <SlideIn direction="left">
              <Title
                style={{
                  color: "#312A45",
                  letterSpacing: "3px",
                }}
                size={40}
                align="center"
              >
                {examples.example1.title}
              </Title>
              <Text align="center">{examples.example1.text}</Text>
            </SlideIn>
          </div>
          <div style={{ marginTop: "150px" }} />
          <SlideIn direction="left">
            <div
              style={{
                boxShadow: `5px 5px 15px 5px ${theme.colors.violet[2]}`,
                height: "200px",
                width: "280px",
                margin: "auto",
              }}
            >
              <Image
                src={example1}
                height={200}
                width={280}
                style={{
                  borderRadius: "5px",
                }}
              ></Image>
            </div>
          </SlideIn>
          <div style={{ marginTop: "25px" }}>
            <SlideIn direction="right">
              <Title
                style={{
                  color: "#312A45",
                  letterSpacing: "3px",
                }}
                size={40}
                align="center"
              >
                {examples.example2.title}
              </Title>
              <Text align="center">{examples.example2.text}</Text>
            </SlideIn>
          </div>
        </Divide>
      </div>
      <Box mt={500}></Box>
      <FooterMobile />
      <Box>
        <Text size={8} color="dimmed" p="md">
          This site is for educational purposes only!! **FAIR USE** Copyright
          Disclaimer under section 107 of the Copyright Act 1976, allowance is
          made for “fair use” for purposes such as criticism, comment, news
          reporting, teaching, scholarship, education and research. Fair use is
          a use permitted by copyright statute that might otherwise be
          infringing. Non-profit, educational or personal use tips the balance
          in favor of fair use.
        </Text>
      </Box>
    </>
  );
}
