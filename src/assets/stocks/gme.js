export const gme = {
  ticker: "GME",
  outstanding: {
    shares: 76815131,
    source: {
      title: "SEC.gov EDGAR",
      files: [
        {
          url: "https://www.sec.gov/ix?doc=/Archives/edgar/data/1326380/000132638021000076/gme-20210622.htm",
          text: "8-K 6/22/2021",
        },
        {
          url: "https://www.sec.gov/Archives/edgar/data/1326380/000119312521186796/d192873d424b5.htm",
          text: "Prospectus 6/9/2021",
        },
      ],
    },
    notes:
      "Prospectus has total shares after completion of ATM offer. ATM offer concluded as reported by the 8-K.",
  },
  holdings: {
    source: {
      title: "fintel.io",
    },
    institutional: {
      shares: 39110720,
      total: 564,
      long: 487,
      short: 31,
      both: 46,
    },
    insiders: {
      shares: 7237237,
    },
    etf: {
      total: 75,
      shares: 4311293,
    },
    mutual: {
      total: 132,
      shares: 9927099,
    },
  },
  historical: [
    {
      date: "6/30/2020",
      high: 4.51,
      volume: 3889000,
    },
    {
      date: "1/27/2021",
      high: 380,
      volume: 93396700,
    },
  ],
  experimental: {
    june302020: {
      high: 4.51,
      volume: 3889000,
    },
    jan272021: {
      high: 380,
      volume: 93396700,
    },
  },
};
