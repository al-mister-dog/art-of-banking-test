import { Box, Center, useMantineTheme } from "@mantine/core";
import Caption from "../../texts/Caption";
import Title from "../../../../shared-ui/texts/Title"
import SubTitle from "../../../../shared-ui/texts/Subtitle";
import Text from "../../../../shared-ui/texts/Text-Mobile";
import Link from "next/link";
import RuleOf72Formula from "./rule-of-72-formula";
import RuleOf72Comparison from "./rule-of-72-comparison";

export default function CompoundInterestPage() {
  const theme = useMantineTheme();
  return (
    <>
      <Box ml={25} mt={200}>
        <Title>Compound Interest Doubling</Title>
      </Box>
      <Caption>
        For a basic introduction to compound interest, see our{" "}
        <Link href="compound-interest">
          <a style={{ color: theme.colors.violet[9] }}>
            compound interest introduction article
          </a>
        </Link>
      </Caption>
      <Text>
        Compound interest calculations are used in most financial transactions
        concerning loans and investments. Of special interest, is calculating
        the time it takes a principal to double at a certain compound interest
        rate. As we will see, calculating doubling time has been applied in
        different ways for different reasons for thousands of years.
      </Text>
      <br></br>
      <Center>
        <SubTitle>Rule of 72</SubTitle>
      </Center>
      <Text>
        One way to figure out how long it takes for a loan or investment to
        double is to use the rule of 72. All you have to do is take the number
        72 and divide it by the interest rate. If you invested $100 and the
        interest rate was %6, then it would take approximately 12 years (72/6 =
        12) to double your investment into $200.
      </Text>
      <RuleOf72Formula />
      <Text>
        How accurate is this rule? Lets compare the answer given by the rule of
        72 with a formula that calculates the sum total of compound interest x
        amount of years{" "}
        <span style={{ fontStyle: "italic" }}>(A = P(1+r)^t)</span>.
      </Text>
      <RuleOf72Comparison />

      <Center mt={100}>
        <SubTitle>Exact Doubling Time Formula</SubTitle>
      </Center>

      <Center mt={100}>
        <SubTitle>Ancient Mesopotamia</SubTitle>
      </Center>
    </>
  );
}
