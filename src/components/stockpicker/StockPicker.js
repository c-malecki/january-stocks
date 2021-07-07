import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StockContext } from "../../context/provider";
import { Link } from "react-router-dom";

export const StockPicker = (props) => {
  const { stocks } = useContext(StockContext);
  const { symbol } = useParams();

  return (
    <div className="StockPicker-container">
      {stocks.map((el, idx) => (
        <Link
          className={`${symbol === el.ticker ? `active` : ``}`}
          key={`${el.ticker}-b-${idx}`}
          to={`/stocks/${el.ticker}`}
        >
          {el.ticker}
        </Link>
      ))}
    </div>
  );
};
