export const bbby = {
  ticker: "BBBY",
  outstanding: {
    shares: 104513541,
    source: {
      title: "SEC.gov EDGAR",
      files: [
        {
          url: "https://www.sec.gov/ix?doc=/Archives/edgar/data/886158/000088615821000030/bbby-20210529.htm",
          text: "10-Q 5/29/2021",
        },
      ],
    },
    notes:
      "Interesting case considering institutional ownership has been reported to be over 100% for awhile and from various sources.",
  },
  holdings: {
    source: {
      title: "fintel.io",
    },
    institutional: {
      shares: 133893818,
      total: 635,
      long: 605,
      short: 6,
      both: 24,
    },
    insiders: {
      shares: 5444984,
    },
    etf: {
      total: 78,
      shares: 19500476,
    },
    mutual: {
      total: 178,
      shares: 39170418,
    },
  },
  experimental: {
    june302020: {
      high: 11.35,
      volume: 8988300,
    },
    jan272021: {
      high: 53.9,
      volume: 90316800,
    },
  },
};
