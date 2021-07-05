export const getCalcs = (data) => {
  const { ticker, outstanding, holdings, experimental } = data;
  const institutionalPercent = (holdings.institutional.shares / outstanding.shares) * 100;
  const insiderPercent = (holdings.insiders.shares / outstanding.shares) * 100;
  const etfPercent = (holdings.etf.shares / outstanding.shares) * 100;
  const mutualPercent = (holdings.mutual.shares / outstanding.shares) * 100;
  const floatTotal =
    outstanding.shares - (holdings.institutional.shares + holdings.insiders.shares);
  const floatComparedToOutstanding = (floatTotal / outstanding.shares) * 100;
  const etfComparedToFloat = floatTotal / holdings.etf.shares;
  const janHighPercentIncrease = Math.abs(
    ((experimental.june302020.high - experimental.jan272021.high) / experimental.june302020.high) *
      100
  );
  return {
    ticker: ticker,
    outstanding: outstanding,
    float: {
      shares: floatTotal,
      percentOfOutstanding: floatComparedToOutstanding.toFixed(2),
    },
    institutional: {
      percentOfOutstanding: institutionalPercent.toFixed(2),
      ...holdings.institutional,
    },
    insiders: {
      percentOfOutstanding: insiderPercent.toFixed(2),
      ...holdings.insiders,
    },
    etf: {
      percentOfOutstanding: etfPercent.toFixed(2),
      percentComparedToFloat: etfComparedToFloat.toFixed(2),
      ...holdings.etf,
    },
    mutual: {
      percentOfOutstanding: mutualPercent.toFixed(2),
      ...holdings.mutual,
    },
    experimental: {
      results: {
        janPeakPercent: janHighPercentIncrease.toFixed(2),
      },
      ...experimental,
    },
  };
};
