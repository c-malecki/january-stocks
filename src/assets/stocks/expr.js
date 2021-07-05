export const expr = {
  ticker: "EXPR",
  outstanding: {
    shares: 66299774,
    source: {
      title: "SEC.gov EDGAR",
      files: [
        {
          url: "https://www.sec.gov/Archives/edgar/data/1483510/000119312521180692/d185910d424b5.htm#stoc185910_105",
          text: "Prospectus 6/3/2021",
        },
      ],
    },
    notes:
      "Similar sized float compared to GME, but way less ETF availability and shares in ETFs. Prospectus also has some interesting stuff around a notice for ATM share offering in the PLAN OF DISTRIBUTION section.",
  },
  holdings: {
    source: {
      title: "fintel.io",
    },
    institutional: {
      shares: 41842151,
      total: 201,
      long: 188,
      short: 2,
      both: 11,
    },
    insiders: {
      shares: 8680690,
    },
    etf: {
      total: 16,
      shares: 6686892,
    },
    mutual: {
      total: 51,
      shares: 7504088,
    },
  },
  historical: [
    {
      date: "6/30/2020",
      high: 1.6,
      volume: 1255400,
    },
    {
      date: "1/27/2021",
      high: 13.97,
      volume: 287577200,
    },
  ],
  experimental: {
    june302020: {
      high: 1.6,
      volume: 1255400,
    },
    jan272021: {
      high: 13.97,
      volume: 287577200,
    },
  },
};
