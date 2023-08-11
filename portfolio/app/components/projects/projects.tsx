import Project from "./project";
import SubHeader from "../subHeading/subheading";

import classes from './project.module.css'
const Projects = () => {
  const projects = [{}, {}, {},{}];
  return (
    <div className={classes.projects_section}id='project'>
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
