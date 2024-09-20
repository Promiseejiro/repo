import { useContext } from "react";
import { ThemeContext } from "../../../context/themecontext";

import Project from "./project";
import SubHeader from "../subHeading/subheading";
import comment from "../../../image/comment_section.jpg";
import ecomance from "../../../image/ecomance.jpg";
import rerha from "../../../image/rerha.jpg";
import cbt from "../../../image/cbt.jpg";
import classes from "./project.module.css";
const Projects = () => {
  let { theme } = useContext(ThemeContext);

  const projects = [
    {
      url: "https://remote.bingo/",
      repo: "",
      image: "https://res.cloudinary.com/dxqg5hify/image/upload/v1726835657/Bingo_-_Google_Chrome_2024-09-20_13.33.33_rljo2v.png",
      name: "Remote Bingo",
    },
    {
      url: "https://rerhadp.vercel.app/",
      repo: "https://github.com/Promiseejiro/Reach",
      image: rerha,
      name: "RerhaDp",
    },
    {
      url: "https://easycbt.vercel.app/",
      repo: "https://github.com/Promiseejiro/easyCBT",
      image: cbt,
      name: "EasyCBT",
    },
    {
      url: "https://sneaker-ecomance-project.vercel.app",
      repo: "https://github.com/Promiseejiro/sneaker-Ecomance-project",
      image: ecomance,
      name: "Sneaker Ecomance",
    },
  ];
  return (
    <div
      className={`${classes.projects_section} ${
        theme === "white" && classes.white_theme
      } ${theme === "brown" && classes.brown_theme} `}
      id="project"
    >
      <SubHeader label="Projects"></SubHeader>
      <div className={classes.card_container}>
        {projects.map((projects, index) => (
          <Project key={index} obj={projects}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
