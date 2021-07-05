export const amc = {
  ticker: "AMC",
  outstanding: {
    shares: 524173073,
    source: {
      title: "SEC.gov EDGAR",
      files: [
        {
          url: "https://www.sec.gov/Archives/edgar/data/1411579/000104746921001205/a2243292zdefr14a.htm",
          text: "Revised Definitive Proxy Materials 6/16/2021",
        },
      ],
    },
    notes:
      "Proposal 1 of Proxy Vote is for an ATM offering of 25M shares, effective upon approval for 1/1/2022, so shares outstanding shouldn't increase for awhile.",
  },
  holdings: {
    source: {
      title: "fintel.io",
    },
    institutional: {
      shares: 143402027,
      total: 431,
      long: 391,
      short: 14,
      both: 26,
    },
    insiders: {
      shares: 10941702,
    },
    etf: {
      total: 31,
      shares: 23257216,
    },
    mutual: {
      total: 85,
      shares: 44280771,
    },
  },
  historical: [
    {
      date: "6/30/2020",
      high: 4.36,
      volume: 3653400,
    },
    {
      date: "1/27/2021",
      high: 19.9,
      volume: 456850200,
    },
  ],
  experimental: {
    june302020: {
      high: 4.36,
      volume: 3653400,
    },
    jan272021: {
      high: 19.9,
      volume: 456850200,
    },
  },
};
