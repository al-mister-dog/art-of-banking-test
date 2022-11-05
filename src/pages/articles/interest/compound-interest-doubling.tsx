import Head from "next/head";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../config/media-query";
import CompoundInterestPageMobile from "../../../components/mobile/articles/interest/compound-interest-doubling/Page";
import CompoundInterestPageDesktop from "../../../components/desktop/articles/interest/compound-interest-doubling/Page";

export default function Interest() {
  const isMobile = useMediaQuery(mediaQuery);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="interactive compound interest calculator using babylonian mathematics rule of 72 mesopotamia mesopotamian babylonian sumerian compound interest "
        ></meta>
      </Head>
      {isMobile ? (
        <CompoundInterestPageMobile />
      ) : (
        <CompoundInterestPageDesktop />
      )}
    </>
  );
}
