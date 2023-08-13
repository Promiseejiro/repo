import { useContext } from "react";
import { ThemeContext } from "../../../context/themecontext";

import classes from "./scroll.module.css";
interface scrollProps {
  x: Number;
  y: Number;
}

const Scroll = ({ x, y }: scrollProps) => {
  let { theme } = useContext(ThemeContext);
  
  return (
    <div
      className={`${classes.scrollBox} ${
        theme == "white" && classes.white_theme
      } ${theme === "brown" && classes.brown_theme}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    ></div>
  );
};

export default Scroll;
