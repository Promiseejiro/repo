import {useContext} from "react"
import { ThemeContext } from "../../../context/themecontext";

import Project from "./project";
import SubHeader from "../subHeading/subheading";

import classes from './project.module.css'
const Projects = () => {
  let { theme } = useContext(ThemeContext);
  
  const projects = [{}, {}, {},{}];
  return (
    <div className={`${classes.projects_section} ${theme ==="white" && classes.white_theme} ${theme ==="brown" && classes.brown_theme} `} id='project'>
     <SubHeader label='Projects'></SubHeader>
    <div className={classes.card_container}>
      {projects.map((projects) => (
        <Project></Project>
      ))}
    </div>
    </div>
  );
};

export default Projects;
