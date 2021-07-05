import React from "react";

export const Ownership = (props) => {
  const { ownership } = props;
  const { insiders, institutional } = ownership;
  return (
    <div className="Ownership-container">
      <h3>Ownership: {ownership.shares.toLocaleString()}</h3>
      <div>
        <span className="label">Source: </span>
        <span>Fintel.io</span>
      </div>
      <span>{ownership.percentOfOutstanding}% of total outstanding shares.</span>

      <p>
        Insider shares calculated from sum of insider shares and then subtracting repeat
        Institutional owner share counts.
      </p>

      <h4>Insiders</h4>
      <span>{insiders.percentOfOutstanding}% of total outstanding shares.</span>
      <div>
        <span className="label">Shares: </span>
        <span>{insiders.shares.toLocaleString()}</span>
      </div>

      <h4>Institutions</h4>
      <span>{institutional.percentOfOutstanding}% of total outstanding shares.</span>
      <div>
        <span className="label">Shares: </span>
        <span>{institutional.shares.toLocaleString()}</span>
      </div>

      <div>
        <span className="label">Total Institutions: </span>
        <span>{institutional.total}</span>
      </div>
      <ul>
        <li>Long: {institutional.long}</li>
        <li>Short: {institutional.short}</li>
        <li>Both: {institutional.both}</li>
      </ul>
    </div>
  );
};
