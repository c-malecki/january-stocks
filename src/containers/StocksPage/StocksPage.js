import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StockInfo, StockPicker } from "../../components/components_index";
import { StockContext } from "../../context/provider";

export const StocksPage = (props) => {
  const { stocks } = useContext(StockContext);
  const { symbol } = useParams();
  const curStock = symbol !== undefined ? stocks.find((obj) => obj.ticker === symbol) : "GME";

  return (
    <div className="StocksPage-container">
      {stocks.length > 0 ? <StockPicker stocks={stocks} /> : null}

      {stocks.length > 0 ? <StockInfo data={curStock} /> : null}
    </div>
  );
};
