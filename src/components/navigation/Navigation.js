import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <div className="Navigation-container">
      <div className="links-container">
        <NavLink exact to={`/`}>
          intro
        </NavLink>
        <NavLink to={`/hypothesis`}>hypothesis</NavLink>
        <NavLink to={`/stocks/GME`}>stocks</NavLink>
        <NavLink to={`/findings`}>findings</NavLink>
      </div>
      <div className="last-updated">
        <span>last updated: 7/6/2021</span>
      </div>
    </div>
  );
};
