import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../config/media-query";
import { useLoaded } from "../hooks/useLoaded";
import type { NextPage } from "next";
import HeroDesktop from "../components/hero/hero-desktop";
import HeroMobile from "../components/hero/hero-mobile";

const IndexPage: NextPage = () => {
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);

  if (loaded) {
    return isMobile ? <HeroMobile /> : <HeroDesktop />;
  }
  return null;
};

export default IndexPage;
