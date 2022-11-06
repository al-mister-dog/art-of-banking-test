import { colors } from "../../../config/colorPalette";
import { Title } from "@mantine/core";
export default function TitleComponent({ children }) {
  return (
    <h1 style={{ color: colors.text }}>
      {children}
    </h1>
  );
}
