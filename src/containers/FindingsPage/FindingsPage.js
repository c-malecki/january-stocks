import React, { useContext } from "react";
import { StockContext } from "../../context/provider";

export const FindingsPage = (props) => {
  const { stocks } = useContext(StockContext);
  const smallestFloat = [...stocks].sort(
    (a, b) => parseInt(a.float.percentOfOutstanding) - parseInt(b.float.percentOfOutstanding)
  );
  const mostEtfShares = [...stocks].sort(
    (a, b) =>
      parseInt(b.funds.etf.percentOfOutstanding) - parseInt(a.funds.etf.percentOfOutstanding)
  );
  const mostInstitutional = [...stocks].sort(
    (a, b) =>
      parseInt(b.ownership.institutional.percentOfOutstanding) -
      parseInt(a.ownership.institutional.percentOfOutstanding)
  );
  const mostInsiders = [...stocks].sort(
    (a, b) =>
      parseInt(b.ownership.insiders.percentOfOutstanding) -
      parseInt(a.ownership.insiders.percentOfOutstanding)
  );
  const highestJanPeak = [...stocks].sort(
    (a, b) =>
      parseInt(b.experimental.results.janPeakPercent) -
      parseInt(a.experimental.results.janPeakPercent)
  );
  return (
    <div className="FindingsPage-container">
      <h2>Findings</h2>
      <div className="Findings-row">
        <div className="Findings-col">
          <h4>Highest % gain at Jan peak from 6/30/2020 high</h4>
          <ol>
            {highestJanPeak.map((obj) => (
              <li key={`${obj.ticker}-mostetf`}>
                {obj.ticker} - {obj.experimental.results.janPeakPercent}%
              </li>
            ))}
          </ol>
        </div>
        <div className="Findings-col">
          <h4>Smallest float compared to shares outstanding</h4>
          <ol>
            {smallestFloat.map((obj) => (
              <li key={`${obj.ticker}-smallfloat`}>
                {obj.ticker} -{" "}
                {obj.float.percentOfOutstanding < 0
                  ? `(negative float?)`
                  : `${obj.float.percentOfOutstanding}%`}
              </li>
            ))}
          </ol>
        </div>
        <div className="Findings-col">
          <h4>Most ETF shares compared to shares outstanding</h4>
          <ol>
            {mostEtfShares.map((obj) => (
              <li key={`${obj.ticker}-mostetf`}>
                {obj.ticker} - {obj.funds.etf.percentOfOutstanding}%
              </li>
            ))}
          </ol>
        </div>
        <div className="Findings-col">
          <h4>Most Insitutional shares compared to shares outstanding</h4>
          <ol>
            {mostInstitutional.map((obj) => (
              <li key={`${obj.ticker}-mostetf`}>
                {obj.ticker} - {obj.ownership.institutional.percentOfOutstanding}%
              </li>
            ))}
          </ol>
        </div>
        <div className="Findings-col">
          <h4>Most Insider shares compared to shares outstanding</h4>
          <ol>
            {mostInsiders.map((obj) => (
              <li key={`${obj.ticker}-mostetf`}>
                {obj.ticker} - {obj.ownership.insiders.percentOfOutstanding}%
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
