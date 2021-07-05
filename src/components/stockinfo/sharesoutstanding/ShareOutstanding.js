import React from "react";

export const SharesOutstanding = (props) => {
  const { outstanding, ticker } = props;
  return (
    <div className="SharesOutstanding-container">
      <h3>Shares Outstanding: {outstanding.shares.toLocaleString()}</h3>
      <div>
        <span className="label">Source: </span>
        <span>{outstanding.source.title}</span>
      </div>

      <ul>
        {outstanding.source.files.map((obj, idx) => (
          <li key={`${ticker}-src-${idx}`}>
            <a href={obj.url} target="_blank" rel="noopener noreferrer">
              {obj.text}
            </a>
          </li>
        ))}
      </ul>

      <p>{outstanding.notes}</p>
    </div>
  );
};
