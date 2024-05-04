import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="headerBackground">
        <div className="logo">
          <Link to={"/"}>
            <img src="/myLogo.png" className="logo" alt="logo"></img>
          </Link>
        </div>

        <Link to={"/projects"}>
          <button className="projectButton">See Projects</button>
        </Link>
      </div>
      <div className="shadow"></div>
    </div>
  );
};
