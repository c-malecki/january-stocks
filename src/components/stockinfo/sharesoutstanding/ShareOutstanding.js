import React from "react";

export const SharesOutstanding = (props) => {
  return (
    <div>
      <h4>Shares Outstanding: {outstanding.total.toLocaleString()}</h4>

      <span>Source: {outstanding.source.title}</span>
      {outstanding.source.files.map((obj, idx) => (
        <span key={`${ticker}-src-${idx}`}>
          <a href={obj.url} target="_blank" rel="noopener noreferrer">
            {obj.text}
          </a>
        </span>
      ))}
      <p>{outstanding.notes}</p>
    </div>
  );
};
