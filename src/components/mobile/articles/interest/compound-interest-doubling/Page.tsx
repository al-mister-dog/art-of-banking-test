import { Box, Center, useMantineTheme } from "@mantine/core";
import Caption from "../../texts/Caption";
import Title from "../../../../shared-ui/texts/Title";
import SubTitle from "../../../../shared-ui/texts/Subtitle";
import Text from "../../../../shared-ui/texts/Text-Mobile";
import Link from "next/link";
import RuleOf72Formula from "./rule-of-72-formula";
import RuleOf72Comparison from "./rule-of-72-comparison";
import Inversions from "./inversions";
import ExactDoublingFormula from "./exact-doubling-formula";
import ExactDoublingComparison from "./exact-doubling-comparison";

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
      <Text>
        To work out the exact doubling time, a little maths is involved and we
        will need to understand inverses, exponents and logarithms. Don't worry
        if maths is not your strong suit, the important thing to take home is
        that such a formula has been worked out!
      </Text>
      <Text>
        Inverses are common in mathematics. For example the inverse of addition
        is subtraction and the inverse of multlipication is division. Other
        inverses include square roots being the inverse of squaring, and
        importantly for us, logarithms being the inverse of exponents. Exponents
        are calculated by using a base number and an exponent.
      </Text>
      <Inversions />
      <Text>
        To calculate an exponentiation, we raise the base number to the power of
        the exponent. A <strong>power</strong> is the amount of times we want to
        use a number in a calculation. Lets say the base number is 2 and the
        power is 3. 2 to the power of 3 (2^3) is 8, because we multiply the
        number 2 three times. <strong>2 * 2 * 2 = 8</strong>. We can already see
        how this might relate to our compounding periods, with the power
        representing the number of iterations we perform a calculation.
      </Text>
      <Text>
        A <strong>logarithm</strong> is the inverse of this. If 2 to the power
        of 3 equals 8, then the log of 8 equals 3, given a base log of 2. How
        can this be applied to compound doubling? Imagine we have a principal,
        and we want to know how many compounding intervals it will take for that
        principal to double given a certain interest rate. or we could say, if
        the principal is 1, how many times must we add interest x for that
        number to become 2? This is another way of saying, if the number we are
        looking for is 2, what does the exponent need to be given a base log of
        the interest rate?
      </Text>
      <Text>
        Let's take an interest rate of 2. Given an interest rate of two, we
        would add (2 / 100) to 1 (principal). This gives us 1.02, and we want to
        raise this number x amount of times before this number adds up to 2,
        which represents the principal having been doubled. the trouble is we
        dont know this number in advance. this is why we use a logarithmic
        formula to get the number of iterations. The formula (simplified) would
        be log(2)/log(1.02) or log(doubled principal) / log(principal + (100 /
        interest rate)) applying this formula gives us the number 35. 35 is our
        doubling rate! Now if we raised the decimalised interest rate (1.02) to
        the power of 35 we will get 2, which is the principal being doubled. for
        anyone who knows algebra the formula (simplified) is log2/log(1 + r)
        with r being the interest rate.
      </Text>
      <ExactDoublingFormula />
      <Text>
        Lets compare the answer given by the exact doubling time formula with a
        formula that calculates the sum total of compound interest x amount of
        years.
      </Text>
      <ExactDoublingComparison />
      <Text>
        Notice how the exact answer is almost always a decimal number. To figure
        out what this number would be in years, months and weeks etc, we would
        have to further refine our answer to convert our calculations using the{" "}
        <strong>sexigesimal system</strong> of numbers also known as base 60.
        Base 60 is how we measure time, which was handed down to us from ancient
        Mesopotamia. We will know look at how compound interest doubling was
        calculated in ancient Mesopotamia.
      </Text>

      <Center mt={100}>
        <SubTitle>Ancient Mesopotamia</SubTitle>
      </Center>
      <Text>
        'Interestingly', in contrast the ever varying rates of lending in
        mondern times, annual interest in Mesoptamia remained stable for over a
        thousand years, Annual interest rates of 10% up to 33% on loans were
        common in Mesopotamia in early periods.
      </Text>
    </>
  );
}
