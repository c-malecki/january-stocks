import React from "react";

export const StockPicker = (props) => {
  const { setStockData, stockData } = props;
  const { stocks } = stockData;
  const handleChangeIdx = (idx) => {
    setStockData((prevState) => ({
      ...prevState,
      curIdx: idx,
    }));
  };

  return (
    <div className="StockPicker-container">
      {stocks.map((el, idx) => (
        <button
          className={`picker-button ${stockData.curIdx === idx ? `active` : ``}`}
          key={`${el.ticker}-b-${idx}`}
          onClick={() => handleChangeIdx(idx)}
        >
          {el.ticker}
        </button>
      ))}
    </div>
  );
};
