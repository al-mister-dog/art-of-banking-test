import PartThreeDesktop from "../../../../../components/desktop/articles/historical/renaissance/bills-of-exchange/part-three";
import PartThreeMobile from "../../../../../components/mobile/articles/historical/renaissance/bills-of-exchange/part-three";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../../../config/media-query";

export default function RemittingBills() {
  const isMobile = useMediaQuery(mediaQuery);
  return isMobile ? <PartThreeMobile /> : <PartThreeDesktop />;
}
