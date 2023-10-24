import classes from "./connect.module.css";
import Theme from "../theme/theme";
import { useContext } from "react";
import { ThemeContext } from "../../../context/themecontext";

const Connect = () => {
  let { theme } = useContext(ThemeContext);
  const connect = [
    {
      name: "Email",
      value: "promiseejiro43@gmail.com",
    },
    {
      name: "Phone",
      value: "+2349030257743",
    },
  ];

  return (
    <div
      className={`${classes.container} ${
        theme === "white" && classes.white_theme
      } ${theme === "brown" && classes.brown_theme}`}
    >
      <ul className={classes.list}>
        {connect.map((con: any, index: number) => (
          <li key={index}>
            <p>
              <span> {con.name}</span>
              {` : `}
              {con.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connect;
