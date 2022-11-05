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
];
