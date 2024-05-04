import React from "react";

import "./ProjectCard.css";

export const ProjectCard = (props) => {
  const { img } = props;

  return (
    <div className="aroundBox">
      <div className="box">
        <img src={img} alt="" className="boxthumbnail"></img>
        <span className="box__inner">
          <span className="box__slide"></span>
        </span>
      </div>

      {/* <p className="projectName">{name}</p> */}
    </div>
  );
};
