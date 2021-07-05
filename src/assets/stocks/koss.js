export const koss = {
  ticker: "KOSS",
  outstanding: {
    shares: 8516823,
    source: {
      title: "SEC.gov EDGAR",
      files: [
        {
          url: "https://www.sec.gov/ix?doc=/Archives/edgar/data/56701/000005670121000015/koss-20210331x10q.htm",
          text: "10-Q 5/13/2021",
        },
      ],
    },
    notes:
      "Need to find accurate insider ownership numbers. Yahoo Finance says KOSS has something like 70% insider ownership which is pretty big with how small the shares outstanding are and float out be.",
  },
  holdings: {
    source: {
      title: "fintel.io",
    },
    institutional: {
      shares: 856108,
      total: 41,
      long: 41,
      short: 0,
      both: 0,
    },
    insiders: {
      shares: 13440540,
    },
    etf: {
      total: 1,
      shares: 119905,
    },
    mutual: {
      total: 10,
      shares: 196419,
    },
  },
  historical: [
    {
      date: "6/30/2020",
      high: 1.43,
      volume: 26600,
    },
    {
      date: "1/27/2021",
      high: 127.45,
      volume: 456850200,
    },
  ],
  experimental: {
    june302020: {
      high: 1.43,
      volume: 26600,
    },
    jan272021: {
      high: 127.45,
      volume: 456850200,
    },
  },
};
