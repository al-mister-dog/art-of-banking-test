import PartTwoDesktop from "../../../../../components/desktop/articles/historical/renaissance/bills-of-exchange/part-two";
import PartTwoMobile from "../../../../../components/mobile/articles/historical/renaissance/bills-of-exchange/part-two";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../../../config/media-query";

export default function BillsOfExchange() {
  const isMobile = useMediaQuery(mediaQuery);
  return isMobile ? <PartTwoMobile /> : <PartTwoDesktop />;
}
