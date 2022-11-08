export const articleRoutes = [
  {
    id: 0,
    title: "Inflation",
    path: "/articles/inflation",
    routes: [
      {
        id: 0,
        articleId: 0,
        title: "Consumer Price Index",
        path: "/inflation/cpi",
      },
    ],
  },
  {
    id: 1,
    title: "Interest",
    path: "/articles/interest",
    routes: [
      {
        id: 1,
        articleId: 1,
        title: "Compound Interest",
        path: "/interest/compound-interest",
      },
      {
        id: 2,
        articleId: 2,
        title: "Compound Interest Doubling",
        path: "/interest/compound-interest-doubling",
      },
    ],
  },
  {
    id: 2,
    title: "Historical",
    path: "/articles/historical",
    routes: [
      {
        id: 3,
        articleId: 3,
        title: "Renaissance Banking",
        path: "/historical/renaissance",
        routes: [
          {
            id: 5,
            articleId: 5,
            title: "Bills of Exchange",
            path: "/historical/renaissance/bills-of-exchange",
            routes: [
              {
                id: 6,
                articleId: 6,
                title: "Introduction",
                path: "/historical/renaissance/bills-of-exchange",
              },
              {
                id: 7,
                articleId: 7,
                title: `Bills of Exchange and Units of Account`,
                path: "/historical/renaissance/bills-of-exchange/bills-of-exchange-and-units-of-account",
              },
              {
                id: 8,
                articleId: 8,
                title: `Remitting Bills`,
                path: "/historical/renaissance/bills-of-exchange/remitting-bills",
              },
              {
                id: 9,
                articleId: 9,
                title: `Rechange: Part 1`,
                path: "/historical/renaissance/bills-of-exchange/rechange-1",
              },
              {
                id: 10,
                articleId: 10,
                title: `Rechange: Part 2`,
                path: "/historical/renaissance/bills-of-exchange/rechange-2",
              },
              {
                id: 11,
                articleId: 11,
                title: `Conclusion`,
                path: "/historical/renaissance/bills-of-exchange/conclusion",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        articleId: 4,
        title: "Money in the American Civil War",
        path: "/historical/civil-war",
      },
    ],
  },
];
