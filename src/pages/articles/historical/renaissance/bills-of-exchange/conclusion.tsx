import ConclusionDesktop from "../../../../../components/desktop/articles/historical/renaissance/bills-of-exchange/conclusion";
import ConclusionMobile from "../../../../../components/mobile/articles/historical/renaissance/bills-of-exchange/conclusion";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../../../config/media-query";

export default function Conclusion() {
  const isMobile = useMediaQuery(mediaQuery);
  return isMobile ? <ConclusionMobile /> : <ConclusionDesktop />;
}
