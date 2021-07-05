import React from "react";

export const StockInfo = (props) => {
  const { ticker, outstanding, holdings, experimental } = props.data;
  const institutionalPercent = (holdings.institutional.shares / outstanding.total) * 100;
  const etfPercent = (holdings.etf.shares / outstanding.total) * 100;
  const mutualPercent = (holdings.mutual.shares / outstanding.total) * 100;
  const float = outstanding.total - holdings.institutional.shares;
  const floatComparedToOutstanding = (float / outstanding.total) * 100;
  const etfComparedToFloat = float / holdings.etf.shares;
  const janHighPercentIncrease = Math.abs(
    ((experimental.june302020.high - experimental.jan272021.high) / experimental.june302020.high) *
      100
  );
  return (
    <div className="StockInfo-container">
      <h3>{ticker}</h3>

      <h4>Shares Outstanding: {outstanding.total.toLocaleString()}</h4>

      <span>Source: {outstanding.source.title}</span>
      {outstanding.source.files.map((obj, idx) => (
        <span key={`${ticker}-src-${idx}`}>
          <a href={obj.url} target="_blank" rel="noopener noreferrer">
            {obj.text}
          </a>
        </span>
      ))}
      <p>{outstanding.notes}</p>

      <h4>Institutional Ownership</h4>

      <span>Source: {holdings.source.title}</span>
      <span>Total Institutions: {holdings.institutional.total}</span>

      <ul>
        <li>Long: {holdings.institutional.long}</li>
        <li>Short: {holdings.institutional.short}</li>
        <li>Both: {holdings.institutional.both}</li>
      </ul>
      <span>
        Shares: {holdings.institutional.shares.toLocaleString()} ({institutionalPercent.toFixed(2)}%
        of outstanding)
      </span>

      <h5>ETFs</h5>
      <span>Total: {holdings.etf.total}</span>
      <span>
        Shares: {holdings.etf.shares.toLocaleString()} ({etfPercent.toFixed(2)}% of outstanding)
      </span>

      <h5>Mutual Funds</h5>
      <span>Total: {holdings.mutual.total}</span>
      <span>
        Shares: {holdings.mutual.shares.toLocaleString()} ({mutualPercent.toFixed(2)}% of
        outstanding)
      </span>

      <h4>Float: {float.toLocaleString()}</h4>
      <span>{floatComparedToOutstanding.toFixed(2)}% of Shares Outstanding</span>
      <p>Calculated by subtracting institutional shares. Need insider shares.</p>

      <h4>Thought Experiment Calculations</h4>
      <h5>ETF shares compared to float</h5>
      <span>
        {holdings.etf.shares > 0
          ? etfComparedToFloat < 0
            ? `Negative float`
            : `ETF shares would have to be shorted ${etfComparedToFloat.toFixed(
                2
              )}x to amount to the float.`
          : `No ETF shares.`}
      </span>

      <h5>June 30, 2020 compared to Jan 27, 2021</h5>
      <span>Source: Yahoo Finance</span>
      <br />
      <span>6/30/2020 High: ${experimental.june302020.high}</span>
      <span>6/30/2020 Volume: {experimental.june302020.volume.toLocaleString()}</span>
      <br />
      <span>1/27/2021 High: ${experimental.jan272021.high}</span>
      <span>1/27/2021 Volume: {experimental.jan272021.volume.toLocaleString()}</span>
      <br />
      <h5>1/27/2021 high % increase from 6/30/2020 high</h5>
      <span>{janHighPercentIncrease.toFixed(2)}%</span>
    </div>
  );
};
