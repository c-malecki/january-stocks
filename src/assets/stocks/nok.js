export const nok = {
  ticker: "NOK",
  outstanding: {
    shares: 5612418000,
    source: {
      title: "SEC.gov EDGAR",
      files: [
        {
          url: "https://www.sec.gov/Archives/edgar/data/0000924613/000155837021002363/nok-20201231x20f.htm",
          text: "20-F 3/4/2021",
        },
      ],
    },
    notes: "Absolutely absurd shares outstanding and float.",
  },
  holdings: {
    source: {
      title: "fintel.io",
    },
    institutional: {
      shares: 774575118,
      total: 850,
      long: 824,
      short: 4,
      both: 22,
    },
    insiders: {
      shares: 0,
    },
    etf: {
      total: 89,
      shares: 132450825,
    },
    mutual: {
      total: 139,
      shares: 284112480,
    },
  },
  experimental: {
    june302020: {
      high: 4.41,
      volume: 3653400,
    },
    jan272021: {
      high: 9.79,
      volume: 1123003300,
    },
  },
};
