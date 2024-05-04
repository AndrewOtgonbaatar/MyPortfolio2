import React from "react";
import "./End.css";

export const End = () => {
  return (
    <div
      style={{ height: "300px", width: "100vw", backgroundColor: "#c5c6c7" }}
    >
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="leftSide"
          style={{ position: "absolute", left: "100px" }}
        >
          <div className="leftTri"></div>
          <div
            className="leftLine"
            style={{
              height: "200px",
              width: "2px",
              backgroundColor: "black",
              position: "absolute",
              top: "0px",
              left: "5px",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "50px",
          }}
        >
          <p className="endText">You reached the End!</p>
        </div>
        <div
          className="rightSide"
          style={{ position: "absolute", right: "100px" }}
        >
          <div className="rightTri"></div>
          <div
            className="rightLine"
            style={{
              height: "200px",
              width: "2px",
              backgroundColor: "black",
              position: "absolute",
              top: "0px",
              right: "5px",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          position: "absolute",
          bottom: "20px",
        }}
      >
        <div
          style={{ width: "1000px", height: "2px", backgroundColor: "black" }}
        ></div>
      </div>
    </div>
  );
};
