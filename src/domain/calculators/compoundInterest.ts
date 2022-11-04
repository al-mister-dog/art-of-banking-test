interface Data {
  interest: number;
  accruedInterest: number;
  balance: number;
  realInterest: number;
  realBalance: number;
  realAccruedInterest: number;
}

export function compoundInterest(
  principal: number,
  rate: number,
  inflationRate: number = 0,
  years: number,
  compoundPeriods: number = 1
) {
  let realInterestRate = rate - inflationRate;
  let realCompoundRate = realInterestRate / compoundPeriods;
  let realInterest = 0;
  let realAccruedInterest = 0;
  let realBalance = principal;

  let compoundRate = rate / compoundPeriods;
  let interest = 0;
  let accruedInterest = 0;
  let balance = principal;

  let periodically: Data[] = [];
  let yearly: Data[] = [];
  let totalCompoundPeriods = compoundPeriods * years;

  for (let i = 0; i < totalCompoundPeriods; i++) {
    interest = (balance * compoundRate) / 100;
    balance += interest;
    accruedInterest = balance - principal;

    realInterest = (realBalance * realCompoundRate) / 100;
    realBalance += realInterest;
    realAccruedInterest = realBalance - principal;

    periodically.push({
      interest,
      accruedInterest,
      balance,
      realInterest,
      realBalance,
      realAccruedInterest,
    });
    if ((i + 1) % compoundPeriods === 0) {
      let newInterest = 0;
      let newRealInterest = 0;
      if (yearly.length > 0) {
        newInterest =
          accruedInterest - yearly[yearly.length - 1].accruedInterest;
        newRealInterest =
          realAccruedInterest - yearly[yearly.length - 1].realAccruedInterest;
      } else {
        newInterest = accruedInterest;
        newRealInterest = realAccruedInterest;
      }

      yearly.push({
        interest: newInterest,
        accruedInterest,
        balance,
        realInterest: newRealInterest,
        realBalance,
        realAccruedInterest,
      });
    }
  }

  return yearly.map((c, i) => {
    return {
      year: 2022 + i,
      interest: c.interest.toFixed(2),
      accruedInterest: c.accruedInterest.toFixed(2),
      balance: c.balance.toFixed(2),
      realInterest: c.realInterest.toFixed(2),
      realAccruedInterest: c.realAccruedInterest.toFixed(2),
      realBalance: c.realBalance.toFixed(2),
    };
  });
}

export function compoundInterval(
  principal: number,
  rate: number,
  inflationRate: number = 0,
  years: number,
  compoundPeriods: number = 1
) {
  let realInterestRate = rate - inflationRate;
  let realCompoundRate = realInterestRate / compoundPeriods;
  let realInterest = 0;
  let realAccruedInterest = 0;
  let realBalance = principal;

  let compoundRate = rate / compoundPeriods;
  let interest = 0;
  let accruedInterest = 0;
  let balance = principal;

  let periodically: Data[] = [];
  let yearly: Data[] = [];
  let totalCompoundPeriods = compoundPeriods * years;

  //Derive month from years[i] / 12
  let monthly: any[] = [];
  let interestCount = 0;
  let accruedInterestCount = 0;
  let balanceCount = balance;
  let realInterestCount = 0;
  let realBalanceCount = realBalance;
  let realAccruedInterestCount = 0;

  for (let i = 0; i < totalCompoundPeriods; i++) {
    interest = (balance * compoundRate) / 100;
    balance += interest;
    accruedInterest = balance - principal;

    realInterest = (realBalance * realCompoundRate) / 100;
    realBalance += realInterest;
    realAccruedInterest = realBalance - principal;

    periodically.push({
      interest,
      accruedInterest,
      balance,
      realInterest,
      realBalance,
      realAccruedInterest,
    });
    if ((i + 1) % compoundPeriods === 0) {
      let newInterest = 0;
      let newRealInterest = 0;
      if (yearly.length > 0) {
        newInterest =
          accruedInterest - yearly[yearly.length - 1].accruedInterest;
        newRealInterest =
          realAccruedInterest - yearly[yearly.length - 1].realAccruedInterest;
      } else {
        newInterest = accruedInterest;
        newRealInterest = realAccruedInterest;
      }

      yearly.push({
        interest: newInterest,
        accruedInterest,
        balance,
        realInterest: newRealInterest,
        realBalance,
        realAccruedInterest,
      });

      for (let j = 0; j < 12; j++) {
        let data = {
          interest: interestCount,
          accruedInterest: accruedInterestCount,
          balance: balanceCount,
          realInterest: realInterestCount,
          realAccruedInterest: realAccruedInterestCount,
          realBalance: realBalanceCount,
        };
        monthly.push(data);
        interestCount = newInterest / 12;
        realInterestCount = newRealInterest / 12;
        accruedInterestCount += interestCount;
        realAccruedInterestCount += realInterestCount;
        balanceCount = balanceCount + interestCount;
        realBalanceCount = realBalanceCount + realInterestCount;
      }
    }
  }

  monthly.push(yearly[yearly.length - 1]);

  return {
    periodically: periodically.map((c, i) => {
      return {
        year: i,
        interest: c.interest.toFixed(2),
        accruedInterest: c.accruedInterest.toFixed(2),
        balance: c.balance.toFixed(2),
        realInterest: c.realInterest.toFixed(2),
        realAccruedInterest: c.realAccruedInterest.toFixed(2),
        realBalance: c.realBalance.toFixed(2),
      };
    }),
    monthly: monthly.map((c, i) => {
      return {
        year: i,
        interest: c.interest.toFixed(2),
        accruedInterest: c.accruedInterest.toFixed(2),
        balance: c.balance.toFixed(2),
        realInterest: c.realInterest.toFixed(2),
        realAccruedInterest: c.realAccruedInterest.toFixed(2),
        realBalance: c.realBalance.toFixed(2),
      };
    }),
    yearly: yearly.map((c, i) => {
      return {
        year: 2022 + i,
        interest: c.interest.toFixed(2),
        accruedInterest: c.accruedInterest.toFixed(2),
        balance: c.balance.toFixed(2),
        realInterest: c.realInterest.toFixed(2),
        realAccruedInterest: c.realAccruedInterest.toFixed(2),
        realBalance: c.realBalance.toFixed(2),
      };
    }),
  };
}

export const initialData = compoundInterest(100, 5, 0, 10, 1);
export const initialDataTwo = compoundInterval(100, 5, 0, 10, 4);
