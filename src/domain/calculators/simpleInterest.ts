export function simpleInterest(
  principal: number,
  rate: number,
  years: number
) {
  let interest = (principal * rate) / 100;
  let accruedInterest = 0;
  let balance = principal;

  let yearly = [];

  for (let i = 0; i < years; i++) {
    balance += interest;
    accruedInterest = balance - principal;

    yearly.push({
      interest,
      accruedInterest,
      balance,
    });
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

export const initialData = [
  {
    year: 2022,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2023,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2024,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2025,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2026,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2027,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2028,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2029,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2030,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
  {
    year: 2031,
    interest: 0.0,
    accruedInterest: 0.0,
    balance: 100.0,
  },
];
