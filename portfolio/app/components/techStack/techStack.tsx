import {useContext} from "react";
import { ThemeContext } from "../../../context/themecontext";

import classes from "./techstack.module.css";

//icons
import { GoDotFill } from "react-icons/go";

//components 
import SubHeader from "../subHeading/subheading";

const TechStack = () => {
  let { theme } = useContext(ThemeContext);
  
  const tools = [
    "Node/Express",
    "JavaScript/Typescript",
    "React/Nextjs",
    "MYSQL/Mongo DB",
  ];
  return (
    <div className={`${classes.tools_section} ${theme ==="white" && classes.white_theme}`}>
      <SubHeader label={`Experience`}></SubHeader>
      <div className={classes.section_card_container}> 
        <div className={classes.tool_card}>
        <GoDotFill className={`${classes.tool_icon} ${classes.first_icon}`}  />
          <h4>Node/Express</h4>
        </div>
        <div className={classes.tool_card}>
          <GoDotFill className={classes.tool_icon} />
          <h4>JavaScript/Typescript</h4>
        </div>
        <div className={classes.tool_card}>
          <GoDotFill className={classes.tool_icon} />
          <h4>React/Nextjs</h4>
        </div>
        <div className={classes.tool_card}>
          <GoDotFill className={classes.tool_icon} />
          <h4>MYSQL/Mongo DB</h4>
        </div>
     </div>
    
    </div>
  );
};

export default TechStack;
