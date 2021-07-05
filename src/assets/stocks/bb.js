export const bb = {
  ticker: "BB",
  outstanding: {
    shares: 565505000,
    source: {
      title: "SEC.gov EDGAR",
      files: [
        {
          url: "https://www.sec.gov/ix?doc=/Archives/edgar/data/1070235/000107023521000070/bbry-20210531.htm",
          text: "10-Q 5/31/2021",
        },
      ],
    },
    notes: "",
  },
  holdings: {
    source: {
      title: "fintel.io",
    },
    institutional: {
      shares: 271830221,
      total: 412,
      long: 382,
      short: 9,
      both: 21,
    },
    insiders: {
      shares: 5859648,
    },
    etf: {
      total: 43,
      shares: 15541869,
    },
    mutual: {
      total: 52,
      shares: 60773467,
    },
  },
  experimental: {
    june302020: {
      high: 4.9,
      volume: 4433200,
    },
    jan272021: {
      high: 28.77,
      volume: 372222600,
    },
  },
};
