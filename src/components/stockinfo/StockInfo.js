import React from "react";

export const StockInfo = (props) => {
  const { ticker, outstanding, float, institutional, insiders, etf, mutual, experimental } =
    props.data;

  return (
    <div className="StockInfo-container">
      <h3>{ticker}</h3>

      <h4>Shares Outstanding: {outstanding.shares.toLocaleString()}</h4>

      <span>Source: {outstanding.source.title}</span>
      {outstanding.source.files.map((obj, idx) => (
        <span key={`${ticker}-src-${idx}`}>
          <a href={obj.url} target="_blank" rel="noopener noreferrer">
            {obj.text}
          </a>
        </span>
      ))}
      <p>{outstanding.notes}</p>

      <h4>Insider Ownership</h4>
      <span>Source: Fintel.io</span>
      <span>
        Shares: {insiders.shares.toLocaleString()} ({insiders.percentOfOutstanding}% of outstanding)
      </span>

      <h4>Institutional Ownership</h4>
      <span>Source: Fintel.io</span>
      <span>
        Shares: {institutional.shares.toLocaleString()} ({institutional.percentOfOutstanding}% of
        outstanding)
      </span>

      <span>Total Institutions: {institutional.total}</span>
      <ul>
        <li>Long: {institutional.long}</li>
        <li>Short: {institutional.short}</li>
        <li>Both: {institutional.both}</li>
      </ul>

      <h5>ETFs</h5>
      <span>Total: {etf.total}</span>
      <span>
        Shares: {etf.shares.toLocaleString()} ({etf.percentOfOutstanding}% of outstanding)
      </span>

      <h5>Mutual Funds</h5>
      <span>Total: {mutual.total}</span>
      <span>
        Shares: {mutual.shares.toLocaleString()} ({mutual.percentOfOutstanding}% of outstanding)
      </span>

      <h4>Float: {float.shares.toLocaleString()}</h4>
      <span>{float.percentOfOutstanding}% of Shares Outstanding</span>
      <p>Calculated by subtracting institutional shares. Need insider shares.</p>

      <h4>Thought Experiment Calculations</h4>
      <h5>ETF shares compared to float</h5>
      <span>
        {etf.shares > 0
          ? etf.percentComparedToFloat < 0
            ? `Negative float`
            : `ETF shares would have to be shorted ${etf.percentComparedToFloat}x to amount to the float.`
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
      <span>{experimental.janPeakPercent}%</span>
    </div>
  );
};
