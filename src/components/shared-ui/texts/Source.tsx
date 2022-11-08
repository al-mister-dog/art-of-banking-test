import { Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

export default function Source({ children }) {
  return (
    <Text
      size="sm"
      weight="bold"
      style={{
        letterSpacing: "1px",
        color: colors.text,
      }}
    >
      {children}
    </Text>
  );
}
