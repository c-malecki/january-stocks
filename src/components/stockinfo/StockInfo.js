import React from "react";
import { SharesOutstanding } from "./sharesoutstanding/ShareOutstanding";
import { Ownership } from "./ownership/Ownership";
import { Funds } from "./funds/Funds";
import { Float } from "./float/Float";
import { Insights } from "./insights/Insights";
import { Historical } from "./historical/Historical";

export const StockInfo = (props) => {
  const { ticker, outstanding, float, ownership, funds, historical, experimental } = props.data;

  return (
    <div className="StockInfo-container">
      <h2>{ticker}</h2>
      <div className="StockInfo-content">
        <div className="StockInfo-row">
          <div className="StockInfo-col">
            <SharesOutstanding outstanding={outstanding} ticker={ticker} />
            <Float float={float} />
          </div>
          <div className="StockInfo-col">
            <Ownership ownership={ownership} />
          </div>
          <div className="StockInfo-col">
            <Funds funds={funds} />
          </div>
        </div>
        <div className="StockInfo-row">
          <div className="StockInfo-col">
            <Historical historical={historical} ticker={ticker} />
          </div>
          <div className="StockInfo-col">
            <Insights etf={funds.etf} experimental={experimental} />
          </div>
        </div>
      </div>
    </div>
  );
};
