import { Spoiler, Text } from "@mantine/core";

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
        <Text
          key={t}
          size="xl"
          sx={{
            letterSpacing: "1px",
            marginBottom: "25px",
          }}
        >
          {t}
        </Text>
      ))}
    </Spoiler>
  );
}
