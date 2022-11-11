import {
  Box,
  Card,
  Center,
  Text,
  SimpleGrid,
  Title,
  useMantineTheme,
} from "@mantine/core";
import DisplayRadioGroup from "./menu-displays";
import OverdraftSlider from "./sliders/slider-overdraft";
import ReserveRequirementSlider from "./sliders/slider-reserve-requirement";
import ColorsMenu from "./menu-colors";
import { useAppSelector } from "../../../../app/hooks";
import { selectActions } from "../../../../features/actions/actionsSlice";
import { sliderSettings } from "../../../../features/settings/initialState";
import { colors } from "../../../../config/colorPalette";

export default function Desktop() {
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
            Display Settings
          </h4>
        </Center>
      </Card.Section>
      <Box
        style={{
          width: "70%",
          margin: "auto",
          marginTop: "1rem",
        }}
      >
        <Box>
          <Text size="sm" color="violet">
            Balancesheet Display
          </Text>
          <DisplayRadioGroup />
        </Box>

        <ColorsMenu />
      </Box>
    </Card>
  );
}
