import { Box, Center, useMantineTheme } from "@mantine/core";
import Title from "../../../../shared-ui/texts/Title";
import SubTitle from "../../../../shared-ui/texts/Subtitle";
import ArticleText from "../../../../shared-ui/texts/Article-Text";
import SimpleInterestFormula from "./simple-interest-calculators/simple-interest-formula";
import TotalInterestFormula from "./simple-interest-calculators/total-interest-formula";
import SimpleInterestIteration from "./simple-interest-calculators/iteration";
import SimpleInterestCalculator from "./simple-interest-calculators/calculator/calculator";
import CompoundInterestFormula from "./compound-interest-calculators/formula";
import CompoundInterestIteration from "./compound-interest-calculators/iteration";
import CompoundInterestCalculator from "./compound-interest-calculators/calculator/calculator";
import CompoundIntervalFormula from "./compound-interval-calculators/formula";
import CompoundIntervalIteration from "./compound-interval-calculators/iteration";
import CompoundIntervalCalculator from "./compound-interval-calculators/calculator/calculator";
import InflationAdjustedFormula from "./inflation-adjusted-calculators/formula";
import InflationAdjustedCalculator from "./inflation-adjusted-calculators/calculator/calculator";
import Caption from "../../../../shared-ui/texts/Caption";
import Link from "next/link";

export default function CompoundInterestPage() {
  const theme = useMantineTheme();
  return (
    <>
      <Box ml={25} mt={200}>
        <Title>Compound Interest</Title>
      </Box>
      <ArticleText>
        Compound interest is a form of interest on a loan or investment that
        grows over time. The idea of compound interest has been around for
        thousands of years in various forms. The first part of this series will
        look solely at the mechanics of compound interest, and later we will
        look at compound interest in various social and historical contexts. We
        will define the very basic principles of interest formulas and learn to
        calculate compound interest using different variables.
      </ArticleText>
      <br></br>
      <Center>
        <SubTitle>Simple Interest</SubTitle>
      </Center>
      <ArticleText>
        To understand what makes compound interest different from other kinds of
        interest, we will first define simple interest and then take look at a
        simple interest calculator. With simple interest, the amount of interest
        applied to a loan is worked out by applying the{" "}
        <strong>interest rate</strong>. The interest rate is simply a percentage
        of the initial amount that is to be invested/loaned. For example if the
        initial amount of a loan was $100 and the interest rate was 5 percent,
        the amount of interest would be %5.
      </ArticleText>
      <SimpleInterestFormula />
      <ArticleText>
        Therefore the sum total amount including simple interest is the initial
        amount plus the interest.
      </ArticleText>
      <TotalInterestFormula />
      <ArticleText>
        However this is just the interest added to the total for one turn.
        Usually, interest will be added more than once during the lifespan of a
        loan or investment. If a loan was left unpaid for ten years, then the
        amount of interest will multiply by ten also. If the interest rate was
        ten percent, the amount of simple interest added would amount to a
        doubling of the intitial amount.
      </ArticleText>
      <SimpleInterestIteration />
      <ArticleText>
        Below is a simple interest calculator to find the sum total of a
        loan/investment that has been incremented using simple interest.
      </ArticleText>
      <SimpleInterestCalculator />

      <Center mt={100}>
        <SubTitle>Compound Interest</SubTitle>
      </Center>
      <ArticleText>
        Unlike simple interest, compound interest increases with every turn,
        whether annually or monthly etc. Compound interest starts off exactly
        the same as simple interest does, with interest being the percentage of
        the principal{" "}
        <span style={{ fontStyle: "italic" }}>
          (from now on, we will refer to the initial amount as the{" "}
          <strong>principal</strong>)
        </span>
        . What compound interest does is take the first sum total and use that
        as the new amount from which to apply the second calculation of the
        interest. If the principal was 100 and the interest rate was 5%, the sum
        total on the first iteration would be 105. But now we take the interest
        to be 5% of 105 instead of 100, and apply that interest to the sum total
        the second go round. Lets apply this concept to our previous examples.
      </ArticleText>
      <CompoundInterestFormula />
      <ArticleText>
        Lets compare the sum totals of simple interest and compound interest
        over time. You will see that the difference between the two becomes more
        extreme the more number of times that interest is compounded.
      </ArticleText>
      <CompoundInterestIteration />
      <ArticleText>
        Below is a compound interest calculator to find the sum total of a
        loan/investment that has been incremented using compound interest
        annually.
      </ArticleText>
      <CompoundInterestCalculator />
      <Center mt={100}>
        <SubTitle>Compound Intervals</SubTitle>
      </Center>
      <ArticleText>
        So far we have illustrated what happens when we compound the interest
        each year at a certain percentage, so over ten years of annually
        compounding interest, there are ten compounding intervals. However many
        loans and investments have interests that compound multiple times a
        year, for example twice or four times a year. This would mean that given
        a semi-annual compounding interval over ten years, there would be twenty
        compounding intervals. This would seemingly raise the sum total by an
        extreme amount, but the the interest rate is also divided by the number
        of compound intervals in a year meaning the amount of interest added on
        each compounding interval is smaller. So given an interest rate of 10%
        and a semi-annual compound interval, the interest rate would be 5
        (10/2).
      </ArticleText>
      <CompoundIntervalFormula />
      <ArticleText>
        Lets compare the sum totals of simple interest, annually compounding
        interest, and compounding interest at various intervals over time. The
        difference between annual compounding and other compounding intervals is
        not as large as the difference between compounding interest and simple
        interest. This is because the larger the number of compounding intervals
        a year, the larger the number that the interest rate is divided by.
      </ArticleText>
      <CompoundIntervalIteration />
      <ArticleText>
        Below is a compound interest calculator to find the sum total of a
        loan/investment that has been incremented at various intervals annually.
      </ArticleText>
      <CompoundIntervalCalculator />
      <Center mt={100}>
        <SubTitle>Adjusting for Inflation (Real vs Nominal Interest)</SubTitle>
      </Center>
      <ArticleText>
        Adjusting for inflation is deceptively simple. Take the usual interest
        rate we have been working with (
        <span style={{ fontStyle: "italic" }}>
          the <strong>Nominal Interest Rate</strong>
        </span>
        ) and subtract it by the inflation rate. This gives you the{" "}
        <strong>Real Interest Rate</strong>. If the nominal interest rate is 5%
        and the rate of inflation is 2%, then the real interest rate is 3%.
      </ArticleText>
      <InflationAdjustedFormula />
      <ArticleText>
        As just mentioned, this is deceptively simple. You may have noticed that
        if you set the inflation rate higher than the interest rate you end up
        with negative figures. This means that an investor can stand to lose
        purchasing power over the lifespan of an investment. It also means that
        debtors can use inflation to pay off debts. Real interest is often
        factored into government borrowing for this reason. Also no one knows
        what the inflation rate is going to be over time. This brings up lots of
        questions which will be explored in another article. Below is a compound
        interest calculator to find the sum total of a loan/investment that has
        been incremented at various intervals annually, as well as being
        adjusted for inflation.
      </ArticleText>
      <InflationAdjustedCalculator />
      <Box mt={100} />
      <Box p={25}>
        <SubTitle>
          Want to dive deeper into the topic of compound interest?, see our{" "}
          <Link href="compound-interest-doubling">
            <a style={{ color: theme.colors.violet[9] }}>
              compound interest doubling article. . .
            </a>
          </Link>
        </SubTitle>
      </Box>
    </>
  );
}
