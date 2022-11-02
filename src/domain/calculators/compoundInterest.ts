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

  let periodically = [];
  let yearly = [];
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

export const initialData = [
  {
    year: 2022,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2023,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2024,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2025,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2026,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2027,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2028,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2029,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2030,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
  {
    year: 2031,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
    realInterest: 0.0,
    realAccruedInterest: 0.0,
    realBalance: 100.0,
  },
];
