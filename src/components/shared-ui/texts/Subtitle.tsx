import { colors } from "../../../config/colorPalette";

export default function SubTitle({ children }) {
  return <h2 style={{ color: colors.text }}>{children}</h2>;
}
