import React from "react";

export const Float = (props) => {
  const { float } = props;
  return (
    <div className="Float-container">
      <h3>Float: {float.shares.toLocaleString()}</h3>

      <span>{float.percentOfOutstanding}% of total outstanding shares.</span>

      <p>Calculated by subtracting institutional and insider shares from total outstanding.</p>
    </div>
  );
};
