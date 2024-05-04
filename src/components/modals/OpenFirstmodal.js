import React from "react";
import "./Openmodal.css";
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";

export const OpenFirstmodal = (props) => {
  const { open, handleClose, data } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "600px",
            width: "1200px",
            backgroundColor: "white",
            border: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p className="title">{data?.name}</p>

          <p className="description">{data?.description}</p>

          <p>Click the link to see the website!</p>

          <div className="arrowLine"></div>
          <div className="downArrow"></div>

          <Link to={data?.link} target="blank">
            <button className="btn2">
              <span className="btn2__inner">
                <span className="btn2__slide"></span>
                <span className="btn2__content">Go to the website!</span>
              </span>
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};
