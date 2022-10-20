import { Accounts } from "../services/accounts";
import { Analytics } from "./analytics";
import { Totals } from "./totals";
import { Reserves } from "../services/reserves";
import {
  bankData,
  analytics,
  AnalyticsData,
  reservesData,
} from "../structures/objects";

export const GraphData = {
  setBalanceData() {
    const parties = bankData.allIds.map((id) => bankData.banks[id]);
    const customers = parties.filter((party) => party.type === "customer");
    const banks = parties.filter((party) => party.type === "bank");

    customers.forEach((customer) => {
      const customerTs = {
        reserves: Reserves.getReserves(customer).balance,
        deposits: Accounts.getAllSubordinateAccounts(customer)[0].balance,
      };
      if (!analytics.graphs.nationalData[customer.id]) {
        AnalyticsData.addIdToNationalData(customer.id);
        AnalyticsData.addDataToNationalData(customer.id, customerTs);
      } else {
        AnalyticsData.addDataToNationalData(customer.id, customerTs);
      }
    });

    banks.forEach((bank) => {
      const bankTs = {
        reserves: Reserves.getReserves(bank).balance,
        deposits: Totals.getTotalCustomerDepositLiabilites(bank),
      };
      if (!analytics.graphs.nationalData[bank.id]) {
        AnalyticsData.addIdToNationalData(bank.id);
        AnalyticsData.addDataToNationalData(bank.id, bankTs);
      } else {
        AnalyticsData.addDataToNationalData(bank.id, bankTs);
      }
    });
  },
  setCentralBankGraphData() {
    let newCreditData = Analytics.getCreditTotal();

    const creditData = newCreditData.data
      .filter(
        (acc) =>
          acc.instrument !== "Fed Funds" || acc.instrument === "Bank Deposits"
      )
      .reduce(
        (a, c) => {
          return { balance: a.balance + c.balance };
        },
        { balance: 0 }
      ).balance;
    const newReservesData = newCreditData.data
      .filter((acc) => acc.instrument === "Bank Deposits")
      .reduce(
        (a, c) => {
          return { balance: a.balance + c.balance };
        },
        { balance: 0 }
      ).balance;

    const privateCredit = newCreditData.data
      .filter(
        (acc) =>
          acc.instrument === "Fed Funds" || acc.instrument === "Bank Deposits"
      )
      .reduce(
        (a, c) => {
          return { balance: a.balance + c.balance };
        },
        { balance: 0 }
      ).balance;

    const totalCredit = newCreditData.data.reduce(
      (a, c) => {
        return { balance: a.balance + c.balance };
      },
      { balance: 0 }
    ).balance;

    //this.update()
    let newReserves = [...analytics.graphs.reserves, newReservesData];
    let newCredit = [...analytics.graphs.credit, creditData];
    let newPrivateCredit = [...analytics.graphs.privateCredit, privateCredit];
    let graphs = {
      ...analytics.graphs,
      reserves: newReserves,
      credit: newCredit,
      privateCredit: newPrivateCredit,
    };

    AnalyticsData.assignCreditData(graphs);
  },
  setCreditData() {
    let newCreditData = Analytics.getCreditTotal();
    const newReservesData = Totals.getTotalReserves();

    const parties = bankData.allIds.map((id) => bankData.banks[id]);
    const banks = parties.filter((party) => party.type === "bank");
    const bankReservesData = banks
      .map((bank) => {
        return reservesData.accounts[bank.id];
      })
      .reduce(
        (a, c) => {
          return { balance: a.balance + c.balance };
        },
        { balance: 0 }
      ).balance;

    const creditData = newCreditData.data.reduce(
      (a, c) => {
        return { balance: a.balance + c.balance };
      },
      { balance: 0 }
    ).balance;

    let newReserves = [...analytics.graphs.reserves, bankReservesData];
    let newCredit = [...analytics.graphs.credit, creditData];

    let graphs = {
      ...analytics.graphs,
      reserves: newReserves,
      credit: newCredit,
    };
    AnalyticsData.assignCreditData(graphs);
  },

  update(reservesData, creditData, privateCredit) {
    let newReserves = [...analytics.graphs.reserves, reservesData];
    let newCredit = [...analytics.graphs.credit, creditData];
    let newPrivateCredit = [...analytics.graphs.privateCredit, privateCredit];
    let graphs = {
      ...analytics.graphs,
      reserves: newReserves,
      credit: newCredit,
      privateCredit: newPrivateCredit,
    };

    AnalyticsData.assignCreditData(graphs);
  },
};
