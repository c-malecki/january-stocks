import React from "react";

export const Funds = (props) => {
  const { funds } = props;
  const { etf, mutual } = funds;
  return (
    <div className="Funds-container">
      <h3>Funds: {funds.shares.toLocaleString()}</h3>
      <div>
        <span className="label">Source: </span>
        <span>Fintel.io</span>
      </div>
      <span>{funds.percentOfOutstanding}% of total outstanding shares.</span>

      <h4>ETFs</h4>
      <span>{etf.percentOfOutstanding}% of total outstanding shares.</span>
      <div>
        <span className="label">Total ETFs: </span>
        <span>{etf.total}</span>
      </div>
      <div>
        <span className="label">ETF Shares: </span>
        <span>{etf.shares.toLocaleString()}</span>
      </div>

      <h4>Mutual Funds</h4>
      <span>{mutual.percentOfOutstanding}% of total outstanding shares.</span>
      <div>
        <span className="label">Total Mutual Funds: </span>
        <span>{mutual.total}</span>
      </div>
      <div>
        <span className="label">Mutual Fund Shares: </span>
        <span>{mutual.shares.toLocaleString()}</span>
      </div>
    </div>
  );
};
