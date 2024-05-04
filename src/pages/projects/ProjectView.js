import React, { useState } from "react";
import "./ProjectView.css";
import { Header } from "../header";

import { ProjectCard } from "../../components/card/ProjectCard";
import { OpenFirstmodal } from "../../components/modals";

import { End } from "../end";
// import { CreateAProjectModal } from "../../components/modals/CreateAProjectModal";

// import { Modal } from "@mui/material";

const projects = [
  {
    name: "Replication-Valorant",
    img: "https://preview.redd.it/is-this-not-mogi-on-the-valorant-home-page-the-mug-v0-xyyxkpzxkspb1.png?width=1562&format=png&auto=webp&s=83acd4e6f26b77d85a8491e44705aab9726ce972",
    description:
      "A project where I replicated the PvP games', Valorant, home page",
    link: "http://127.0.0.1:5500/src/pastprojects/Valorant/index.html",
  },
  {
    name: "Replication-Tesla",
    img: "/Tesla.jpg",
    description:
      "A project where I was assigned by my teacher to replicate the Tesla home page and add buttons to the links Tesla had in its menu bar",
    link: "http://127.0.0.1:5500/src/pastprojects/Tesla/tesla.html",
  },
  {
    name: "Replication-GoogleP",
    img: "/GooglePixel.jpg",
    description:
      "A long project where I was to replicate the Google Pixel (a phone) home page and bits of it's history",
    link: "http://127.0.0.1:5500/src/pastprojects/googlepixel/index.html",
  },
  {
    name: "Replication-Apple",
    img: "/Apple.png",
    description:
      "A project where I was to replicate Apple products and its home page",
    link: "http://127.0.0.1:5500/src/pastprojects/Apple/apple.html",
  },
  {
    name: "Replication-Discord",
    img: "/Discord.png",
    description:
      "A home page of Discord, a website where you can connect with friends",
    link: "http://127.0.0.1:5500/src/pastprojects/Discord/index.html",
  },
  {
    name: "To-Do List project",
    img: "/Todo.png",
    description:
      "A replication of the sign-in page of Discord. Nah, just kidding, it's a little to do list that can add and delete request you put into it. Can't access the link I'm afraid, sorry. ",
  },
  {
    name: "Replication-Team project(figma)",
    img: "/Team.png",
    description:
      "A functional basic website with a blog page, sign in/up page and firebase authentication. Again, can't open link. ",
  },
  {
    name: "Custom- SelfMade Project",
    img: "/Modelo.png",
    description:
      "A project where we were given the option to make it whatever we want. Fully equipped with backend, frontend authorization with Google Firebase and complete Signin/Signup pages",
  },
];

const resProject = [
  {
    name: "Responsive",
    img: "/Responsive.png",
    description:
      "A sample website where it responds to the width of the default browser tab and automatically adjusts the orientation of the objects within it",
    link: "http://127.0.0.1:5500/src/pastprojects/responsive/index.html",
  },
  {
    name: "Responsive Header",
    img: "/ResponsiveHeader.png",
    description:
      "About the same as the first responsive project. Only its a bit simpler. However, you can't access it due to the Github packages not responding. Sorry!",
  },
];
const calProject = [
  {
    name: "Calculator:)",
    img: "/Calculator.png",
    description:
      "A self-explanatory project. A fully functional calculator that does math",
    link: "http://127.0.0.1:5500/src/pastprojects/calculator/index.html",
  },
];

export const ProjectView = () => {
  const [data, setData] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    setData(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  console.log(data);

  return (
    <div>
      <Header />
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        <p className="replicationTitle">Replication Projects</p>
      </div>

      {/* -----------------------------------------------Replication Projects */}

      <div
        style={{
          //   width: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "240px",
          left: "60px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {projects.map((proj, index) => (
          <div
            key={proj}
            index={index}
            className="cardBox"
            onClick={() => handleOpen(proj)}
          >
            <ProjectCard
              name={proj.name}
              img={proj.img}
              description={proj.description}
              link={proj.link}
            />
          </div>
        ))}
      </div>

      {/* -------------------------------------------------Responsive Project */}

      <div
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "1700px",
          flexDirection: "column",
        }}
      >
        <p className="responsiveTitle">Responsive Project</p>
        <div style={{ position: "relative", left: "60px" }}>
          {resProject.map((p, i) => (
            <div key={p} index={i} onClick={() => handleOpen(p)}>
              <ProjectCard
                name={p.name}
                img={p.img}
                description={p.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* -----------------------------------------------Calculator Project */}

      <div
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "2500px",
          flexDirection: "column",
        }}
      >
        <p className="calculatorTitle">Calculator{":)"}</p>
        <div style={{ position: "relative", left: "60px" }}>
          {calProject.map((element, m) => (
            <div key={element} index={m} onClick={() => handleOpen(element)}>
              <ProjectCard
                name={element.name}
                img={element.img}
                description={element.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "-2400px" }}>
        <End />
      </div>

      <OpenFirstmodal open={open} handleClose={handleClose} data={data} />
    </div>
  );
};
