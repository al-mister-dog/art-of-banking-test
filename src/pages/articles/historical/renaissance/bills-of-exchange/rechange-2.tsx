
import PartFiveDesktop from "../../../../../components/desktop/articles/historical/renaissance/bills-of-exchange/part-five";
import PartFiveMobile from "../../../../../components/mobile/articles/historical/renaissance/bills-of-exchange/part-five";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../../../config/media-query";

export default function Rechange2() {
  const isMobile = useMediaQuery(mediaQuery);
  return isMobile ? <PartFiveMobile /> : <PartFiveDesktop />;
}
