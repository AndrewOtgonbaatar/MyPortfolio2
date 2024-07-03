import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "850px",
        height: "300px",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <div className="tri1">
        <d />
      </div>
      <div className="tri2"></div>
      <div
        style={{
          color: "white",
          position: "absolute",
          left: "100px",
          top: "50px",
          fontSize: "40px",
        }}
        className="aboutText"
      >
        <u>About me</u>
      </div>
      <p
        style={{
          color: "white",
          width: "1000px",
          position: "absolute",
          left: "100px",
        }}
      >
        I'm currently 15 years of age -- going on 16 -- and I'm currently
        enrolled at Adlai E Stevenson High School, going to my sophmore year.
        I've been taking the Pinecone coding course for about a year now and I
        dub this my "personal" portfolio. I've taken a mini course that was
        about a few weeks then took a summer course in Evanstan for a few months
        and took the current course since August, I think. If you click the
        button, you'll be re-routed to all my projects I've done since the
        mini-course. Enjoy!{" "}
      </p>
    </div>
  );
};
