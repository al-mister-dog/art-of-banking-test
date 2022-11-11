import RefreshBalanceSheets from "./refresh-button";
import { Box, Card, Center, Text, useMantineTheme } from "@mantine/core";
import Pill from "../../../shared-ui/components/Pill";
import OverdraftSlider from "./sliders/slider-overdraft";
import ReserveRequirementSlider from "./sliders/slider-reserve-requirement";
import { useAppSelector } from "../../../../app/hooks";
import { selectActions } from "../../../../features/actions/actionsSlice";
import { sliderSettings } from "../../../../features/settings/initialState";
import { colors } from "../../../../config/colorPalette";
export default function Toolbar() {
  const { currentLectureId } = useAppSelector(selectActions);
  const theme = useMantineTheme();
  const slidersDisabled = sliderSettings[currentLectureId].sliderSettings;
  const overdraftValue =
    sliderSettings[currentLectureId].sliderFixtures?.overdraft || 0;
  return (
    <Card
      shadow="sm"
      style={{
        backgroundColor: colors.background2,
        overflow: "visible",
        
        // height: "24.5rem",
      }}
    >
      <Card.Section
        mb="xs"
        p="xs"
        style={{ borderBottom: `1px solid ${theme.colors.violet[2]}` }}
      >
        <Center>
          <h4 style={{ margin: 0, padding: 0, color: theme.colors.violet[9] }}>
            Board Settings
          </h4>
        </Center>
      </Card.Section>
      <div>
        <Box>
          <RefreshBalanceSheets />
        </Box>
        <Box>
          <OverdraftSlider
            disabled={slidersDisabled.overdraft}
            overdraftValue={overdraftValue}
          />
        </Box>
        <Box>
          <ReserveRequirementSlider
            disabled={slidersDisabled.reserveRequirement}
          />
        </Box>
      </div>
    </Card>
  );
}
