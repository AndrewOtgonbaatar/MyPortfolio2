import React from "react";
import "./Home.css";
import { Header } from "../header";
import { Link } from "react-router-dom";
import { Footer } from "../footer";

export const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="background"
    >
      <Header />
      <div>
        <div className="line1Connector"></div>
        <div className="line1"></div>
        <div className="arrowBoxThing"></div>
        <span className="arrowTriangleThing"></span>
        <img className="meImg" src="/me.png" alt=""></img>
        <div className="line2Connector"></div>
        <div className="line2"></div>
        <div className="arrowToMe"></div>
        <div className="arrowToMePoint"></div>
        <div className="thisGuyText">this guy</div>
        <div className="arrowBoxThing2"></div>
        <span className="arrowTriangleThing2"></span>
        <div className="introduction">
          <span className="name">My name is Andrew Otgonbaatar</span>
          {/* place button here */}

          <div className="introButton">
            <Link to={"/projects"}>
              <button className="btn">
                <span className="btn__inner">
                  <span className="btn__slide"></span>
                  <span className="btn__content">See Projects</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
