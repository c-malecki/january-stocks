import React, { useState, useEffect } from "react";
import { StockInfo, StockPicker, IntroBlock, Hypothesis } from "../../components/components_index";
import { stocks } from "../../assets/stockdata";
import { getCalcs } from "../../assets/util/getCalcs";

export const App = () => {
  const [stockData, setStockData] = useState({
    stocks: [],
    curIdx: 0,
  });
  useEffect(() => {
    const computations = stocks.map((obj) => getCalcs(obj));
    setStockData((prevState) => ({
      ...prevState,
      stocks: computations,
    }));
  }, [setStockData]);

  return (
    <div className="App">
      <div className="content">
        <IntroBlock />
        <Hypothesis />

        {stockData.stocks.length > 0 ? (
          <StockPicker setStockData={setStockData} stockData={stockData} />
        ) : null}

        {stockData.stocks.length > 0 ? (
          <StockInfo
            key={stockData.stocks[stockData.curIdx].ticker}
            data={stockData.stocks[stockData.curIdx]}
          />
        ) : null}
      </div>
    </div>
  );
};
