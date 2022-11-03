import { useMediaQuery } from "@mantine/hooks";
import CompoundInterestPageMobile from "../../../components/mobile/articles/interest/compound-interest/Page";
import CompoundInterestPageDesktop from "../../../components/desktop/articles/interest/compound-interest/Page";
import { mediaQuery } from "../../../config/media-query";

export default function Interest() {
  const isMobile = useMediaQuery(mediaQuery);
  return isMobile ? (
    <CompoundInterestPageMobile />
  ) : (
    <CompoundInterestPageDesktop />
  );
}
