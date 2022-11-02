import { Box, Center, Title } from "@mantine/core";
import Caption from "../../texts/Caption";
import SubTitle from "../../texts/Subtitle";
import Text from "../../texts/Text";
import SimpleInterestFormula from "./simple-interest-calculator/simple-interest-formula";
import TotalInterestFormula from "./simple-interest-calculator/total-interest-formula";
import SimpleInterestIteration from "./simple-interest-calculator/iteration";
import SimpleInterestCalculator from "./simple-interest-calculator/calculator";
import CompoundInterestFormula from "./compound-interest-calculator/compound-interest-formula";
import CompoundInterestIteration from "./compound-interest-calculator/iteration";
import CompoundInterestCalculator from "./compound-interest-calculator/calculator";

export function CompoundInterestPage() {
  return (
    <>
      <Box ml={25} mt={200}>
        <Title>Compound Interest</Title>
      </Box>
      <Text>
        Compound interest is a form of interest on a loan or investment that
        grows in intervals of time.
      </Text>
      <Text>
        To understand the difference between compound interest and regular
        interest lets define simple interest and look at a simple interest
        calculator.
      </Text>
      <br></br>
      <Center>
        <SubTitle>Simple Interest</SubTitle>
      </Center>

      <Text>
        The interest rate is simply a percentage of the initial amount. For
        example if the initial amount is 100 and the interest rate is 5, the
        amount of interest would also be 5.
      </Text>
      <SimpleInterestFormula />
      <Text>
        Therefore the total amount after interest is the initial amount plus the
        interest.
      </Text>

      <TotalInterestFormula />
      <Text>
        However this is just the interest added to the total for one time.
        Usually, interest will be added more than once. If a loan was left
        unpaid for ten years, then the amount of interest will multiply by ten
        also. If the interest was ten percent, then this would amount to a
        doubling of the intitial amount.
      </Text>
      <SimpleInterestIteration />
      <Text>
        Below is a simple interest calculator to find the sum total of a
        loan/investment that has been incremented using simple interest.
      </Text>
      <SimpleInterestCalculator />
      <div style={{ marginTop: 100 }}></div>
      <Center>
        <SubTitle>Compound Interest</SubTitle>
      </Center>
      <Text>
        Unlike simple interest, compound interest cannot be formulated
        initially. Compound interest starts off exactly the same as simple
        interest does, with interest being the percentage of the principal{" "}
        <span style={{ fontStyle: "italic" }}>
          (from now on, we will refer to the initial amount as the{" "}
          <strong>principal</strong>)
        </span>
        . What compound interest does is take the new total and use that as the
        new number from which to apply calculation of the interest. If the
        principal was 100 and the interest rate was 5%, the sum total on the
        first iteration would be 105. But now we take the interest to be 5% of
        105 instead of 100, and apply that interest to the sum total the second
        go round. Lets apply this concept to our previous examples.
      </Text>
      <CompoundInterestFormula />
      <Text>
        Lets compare the sum totals of simple interest and compound interest
        over time. You will see that the difference between the two becomes more
        extreme the larger the amount of times that interest is compounded.
      </Text>
      <CompoundInterestIteration />
      <CompoundInterestCalculator />
    </>
  );
}
