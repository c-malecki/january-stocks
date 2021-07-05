import React from "react";

export const Insights = (props) => {
  const { etf, experimental } = props;
  return (
    <div className="Insights-container">
      <h3>Insights</h3>
      <div>
        <span className="label">Source: </span>
        <span>Yahoo Finance and computed data</span>
      </div>

      <p>These are various data points derived from my computed data and historical data.</p>
      <h4>ETF shares compared to float</h4>
      <span>
        {etf.shares > 0
          ? etf.percentComparedToFloat < 0
            ? `Negative float??`
            : `ETF shares would have to be shorted ${etf.percentComparedToFloat}x to amount to the float.`
          : `No ETFs with shares.`}
      </span>

      <h4>Percent Difference of Historical Highs</h4>
      <ul>
        <li>
          <span className="label">6/30/2020 to 1/27/2021: </span>
          <span>{experimental.results.janPeakPercent}%</span>
        </li>
      </ul>
    </div>
  );
};
