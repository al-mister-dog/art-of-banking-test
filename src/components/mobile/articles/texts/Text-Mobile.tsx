import { Text } from "@mantine/core";
import { colors } from "../../../../config/colorPalette";

export default function TextComponent({ children }) {
  return (
    <Text
      size="md"
      style={{
        padding: "30px",
        letterSpacing: "1px",
        color: colors.text,
      }}
    >
      {children}
    </Text>
  );
}
