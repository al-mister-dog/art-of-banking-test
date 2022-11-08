import { Box, Center, useMantineTheme } from "@mantine/core";
import Caption from "../../texts/Caption";
import Title from "../../../../shared-ui/texts/Title";
import SubTitle from "../../../../shared-ui/texts/Subtitle";
import ArticleText from "../../../../shared-ui/texts/Article-Text";
import Link from "next/link";
import RuleOf72Formula from "./rule-of-72-formula";
import RuleOf72Comparison from "./rule-of-72-comparison";
import { Bold } from "tabler-icons-react";
import Inversions from "./inversions";
import ExactDoublingFormula from "./exact-doubling-formula";
import ExactDoublingComparison from "./exact-doubling-comparison";
import ExactDoublingInterval from "./exact-doubling-intervals";

export default function CompoundInterestDoubling() {
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
      <ArticleText>
        Compound interest calculations are used in most financial transactions
        concerning loans and investments. Of special interest, is calculating
        the time it takes a principal to double at a certain compound interest
        rate. As we will see, calculating doubling time has been applied in
        different ways for different reasons for thousands of years.
      </ArticleText>
      <br></br>
      <Center>
        <SubTitle>Rule of 72</SubTitle>
      </Center>
      <ArticleText>
        One way to figure out how long it takes for a loan or investment to
        double is to use the rule of 72. This popular trick has been known for
        centuries, with an early reference to be found in the{" "}
        <span style={{ fontStyle: "italic" }}>Summa de Arithmetica</span> by
        Luca Pacioli (1445–1514). It is a quick way to find compound doubling
        time using just a basic calculator or mental arithmetic. All you have to
        do is take the number 72 and divide it by the interest rate. If you
        invested $100 and the interest rate was 5%, then it would take
        approximately 14 years (72/5 = roughly 14) to double your investment
        into $200.
      </ArticleText>
      <RuleOf72Formula />
      <ArticleText>
        How accurate is this rule? Lets compare the answer given by the rule of
        72 with a formula that calculates the sum total of compound interest
        after x amount of years{" "}
        <span style={{ fontStyle: "italic" }}>(A = P(1+r)^t)</span>.
      </ArticleText>
      <RuleOf72Comparison />

      <Center mt={100}>
        <SubTitle>Exact Doubling Time Formula</SubTitle>
      </Center>
      <ArticleText>
        To work out the exact doubling time, a little maths is involved and we
        will need to understand inverses, exponents and logarithms. Don't worry
        if maths is not your strong suit, the important thing to take home is
        that such a formula has been worked out!
      </ArticleText>
      <ArticleText>
        Inverses are common in mathematics. For example the inverse of addition
        is subtraction and the inverse of multlipication is division. Other
        inverses include square roots being the inverse of squaring, and
        importantly for us, logarithmic functions being the inverse of
        exponential functions.
      </ArticleText>
      <Inversions />
      <ArticleText>
        Exponentiations are calculated by using a base number and an exponent.
        To calculate an exponentiation, we raise a base number to the power of
        an exponent. A <strong>power</strong> is the amount of times we want to
        use a number in a calculation. Lets say the base number is 2 and the
        exponent is 3. 2 to the power of 3 (2^3) is 8, because we multiply the
        number 2 three times. <strong>2 * 2 * 2 = 8</strong>. We can already see
        how this might relate to our compounding periods, with the power
        representing the number of iterations we perform a calculation.
      </ArticleText>
      <ArticleText>
        A <strong>logarithm</strong> is the inverse of this. If 2 to the power
        of 3 equals 8, then the log of 8 equals 3, given a base log of 2. How
        can this be applied to compound doubling? Imagine we have a principal,
        and we want to know how many compounding intervals it will take for that
        principal to double given a certain interest rate. Or we could say, if
        the principal is 1, how many times must we multiply interest x for that
        number to become 2? Or we could say, if the number we are looking for is
        2, what does the exponent need to be given a base log of the interest
        rate?{" "}
        <span style={{ fontStyle: "italic" }}>
          (Or we could say, if (interest rate) to the power of (iterations) = 2,
          then the log of 2 equals the number of iterations given a base log of
          the interest rate etc etc...)
        </span>
      </ArticleText>
      <ArticleText>
        Let's take an interest rate of 2. Given an interest rate of two, we
        would add (2 / 100) to 1 (principal). This gives us 1.02, and we want to
        raise this number x amount of times before this number adds up to 2,
        which represents the principal having been doubled. The trouble is we
        dont know this "x amount of times" number in advance. This is why we use
        a logarithmic formula to get the number of iterations. The formula would
        be <strong>x = log(2) / log(interest rate/100)</strong>. Applying this
        formula gives us the number 35. 35 is our doubling rate, equivelent to{" "}
        <span style={{ fontStyle: "italic" }}>
          {" "}
          1.02 * 1.02 * 1.02 ... 35 times.
        </span>{" "}
      </ArticleText>
      <ExactDoublingFormula />
      <ArticleText>
        Notice how the exact answer is almost always a decimal number. To figure
        out what this number would be in years, months and weeks etc, we can
        just parse the decimal into a date format. Lets compare the answer given
        by the exact doubling time formula with a formula that calculates the
        sum total of compound interest x amount of years.
      </ArticleText>
      <ExactDoublingComparison />
      <ArticleText>
        If we factor in compound intervals then we divide the interest rate by
        the number of compound intervals a year, and then divide the formula
        output by that same number.
      </ArticleText>
      <ExactDoublingInterval />
      <ArticleText>
        Have you noticed that the way we measure time often involves the number
        60? 60 seconds in a minute and 60 minutes in an hour etc. This way of
        measuring time comes from ancient Mesopotamia and is part of the{" "}
        <strong>Sexagesimal</strong> numeral system, which is base 60 (our own
        system uses base 10). The ancient Mesopotamians not only used this
        system for measuring time, but they also had a unique way of measuring
        the doubling time of compound interest...
      </ArticleText>

      <Center mt={100}>
        <SubTitle>Ancient Mesopotamia</SubTitle>
      </Center>
      <ArticleText>
        'Interestingly', in contrast to the ever varying rates of lending in
        mondern times (at the time of writing, the interest rate keeps going up
        after enjoying near zero rates for around a decade), annual interest in
        Mesoptamia remained stable for over a thousand years. Annual interest
        rates of 10% up to 33% on loans were common in Mesopotamia in early
        periods. What were the reasons to keep the interest rate so stable how
        do we know what methods they used to work out compound doubling time?
      </ArticleText>
    </>
  );
}
