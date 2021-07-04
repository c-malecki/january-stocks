import React from "react";
import { StockInfo } from "../../components/components_index";
import { stocks } from "../../assets/stockdata";

export const App = () => {
  const stocksArr = stocks.map((obj) => <StockInfo key={obj.ticker} data={obj} />);
  return (
    <div className="App">
      <div className="content">
        <h1>January Stocks</h1>
        <div className="row">{stocksArr}</div>
      </div>
    </div>
  );
};
