import React, { useState, useEffect } from "react";
import { StockInfo, IntroBlock, Hypothesis } from "../../components/components_index";
import { stocks } from "../../assets/stockdata";
import { getCalcs } from "../../assets/util/getCalcs";

export const App = () => {
  const [stockData, setStockData] = useState(null);
  useEffect(() => {
    const computations = stocks.map((obj) => getCalcs(obj));
    setStockData(computations);
  }, [setStockData]);

  return (
    <div className="App">
      <div className="content">
        <IntroBlock />
        <Hypothesis />
        {stockData ? (
          <div className="row">
            {stockData.map((obj) => (
              <StockInfo key={obj.ticker} data={obj} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
