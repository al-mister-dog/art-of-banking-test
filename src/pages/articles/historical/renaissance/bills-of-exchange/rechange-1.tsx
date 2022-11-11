import PartFourDesktop from "../../../../../components/desktop/articles/historical/renaissance/bills-of-exchange/part-four";
import PartFourMobile from "../../../../../components/mobile/articles/historical/renaissance/bills-of-exchange/part-four";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../../../config/media-query";

export default function Rechange1() {
  const isMobile = useMediaQuery(mediaQuery);
  return isMobile ? <PartFourMobile /> : <PartFourDesktop />;
}
