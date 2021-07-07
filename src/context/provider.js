import React, { createContext, useState, useEffect } from "react";
import { stocks } from "../assets/stockdata";
import { getCalcs } from "../assets/util/getCalcs";

export const StockContext = createContext();

export const StockContextProvider = ({ children }) => {
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
    <StockContext.Provider value={{ ...stockData, setStockData }}>{children}</StockContext.Provider>
  );
};
