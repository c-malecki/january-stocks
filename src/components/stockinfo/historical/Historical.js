import React from "react";

export const Historical = (props) => {
  const { historical, ticker } = props;
  return (
    <div className="Historical-container">
      <h3>Historical Data</h3>
      <div>
        <span className="label">Source: </span>
        <span>Yahoo Finance</span>
      </div>
      <br />
      {historical.map((obj) => (
        <div key={`${ticker}-${obj.date}`}>
          <span className="label">{obj.date}</span>
          <ul>
            <li>
              <span className="label">High: </span>
              <span>${obj.high}</span>
            </li>
            <li>
              <span className="label">Volume: </span>
              <span>{obj.volume.toLocaleString()}</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
