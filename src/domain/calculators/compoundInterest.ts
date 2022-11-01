interface Data {
  interest: number;
  accruedInterest: number;
  balance: number;
}

const annualy = 1;
const semiAnnualy = 2;
const quarterly = 4;
const monthly = 12;
const weekly = 52;
const daily = 365;

export function compoundInterest(
  principal: number,
  rate: number,
  years: number,
  compoundPeriods: number = 1
) {
  let compoundRate = rate / compoundPeriods;
  let interest = 0;
  let accruedInterest = 0;
  let balance = principal;
  let periodically: Data[] = [];
  let yearly: Data[] = [];
  let totalCompoundPeriods = compoundPeriods * years;
  let cur = 0;
  for (let i = 0; i < totalCompoundPeriods; i++) {
    interest = (balance * compoundRate) / 100;
    balance += interest;
    accruedInterest = balance - principal;
    cur = accruedInterest - cur;

    periodically.push({
      interest,
      accruedInterest,
      balance,
    });
    if ((i + 1) % compoundPeriods === 0) {
      let newInterest = 0;
      yearly.length > 0
        ? (newInterest =
            accruedInterest - yearly[yearly.length - 1].accruedInterest)
        : (newInterest = accruedInterest);

      yearly.push({
        interest: newInterest,
        accruedInterest,
        balance,
      });
    }
  }

  return yearly.map((c, i) => {
    return {
      year: 2022 + i,
      interest: c.interest.toFixed(2),
      accruedInterest: c.accruedInterest.toFixed(2),
      balance: c.balance.toFixed(2),
    };
  });
}

