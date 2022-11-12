import { Spoiler, Text } from "@mantine/core";
import { colors } from "../../config/colorPalette";

interface IntroProps {
  text: string[];
}
export default function SpoilerText({ text }: IntroProps) {
  return (
    <Spoiler
      maxHeight={120}
      showLabel={<Text color="violet">Read More</Text>}
      hideLabel={<Text color="violet">Hide</Text>}
    >
      {text.map((t) => (
        <p
          key={t}
          style={{
            letterSpacing: "1px",
            marginBottom: "25px",
            
            color: colors.text,
          }}
        >
          {t}
        </p>
      ))}
    </Spoiler>
  );
}
