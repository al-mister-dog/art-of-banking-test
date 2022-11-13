import { Text } from "@mantine/core";
import Link from "next/link";
import Title from "../../components/shared-ui/texts/Title";

export default function LecturesPage() {
  return (
    <>
      <div style={{ padding: 16, marginTop: "150px" }}>
        <Title>Lectures on Money and Banking</Title>
        <Text size="lg" mt={15} p="10">
          Here you will learn all about money and banking, using interactive
          models of banking systems. We will start with looking at the
          activities of a local bank through the lens of accounting and balance
          sheets. With each lecture chapter we introduce a new feature and build
          up a bigger picture of the global banking system as a whole.
        </Text>
        <Text size="lg" mt={15} p="10">
          The lectures will be divided into two modules. The first module will
          stay relatively local, with a few forrays into the banking systems of
          the 19th century New York, London as well as the Federal Reserve
          System. The second module will look at the international system and
          more esoteric features of finance. These lectures assume zero
          familiarity with banking terminology and concepts so feel free to move
          to any chapter of the lectures.
        </Text>
        <Text italic weight="bold" color="violet" mt={15}>
          <Link href="/lectures/fundamentals">Start Here: Fundamentals</Link>
        </Text>
      </div>
    </>
  );
}
