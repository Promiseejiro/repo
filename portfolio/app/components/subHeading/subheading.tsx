import {useContext} from "react"
import { ThemeContext } from "../../../context/themecontext";
import classes from "./subHeading.module.css";

interface SubHeaderprops {
     label:String
}

const SubHeader = ({label}:SubHeaderprops) => {
  let { theme } = useContext(ThemeContext);
  
  return <h3 className={`${classes.sub_heading} ${theme ==="white" && classes.white_theme}`}>{label}</h3>
};

export default SubHeader;
