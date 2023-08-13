import React, { useContext } from "react";
import { ThemeContext } from "../../../context/themecontext";
import classes from "./education.module.css";

//components
import SubHeader from "../subHeading/subheading";

const Education = () => {
  let { theme } = useContext(ThemeContext);
  const qualifications = [
    {
      date: "Sept 2019 - current",
      heading: "BSC",
      course: "Mechanical engineering",
      text: "Delta state University abraka",
    },
    {
      date: "Sept 2015 - 2018",
      heading: "Senior secondary leaving certificate",
      text: "Asoro Grammer school. Benin city",
      course: "Science",
    },
  ];
  return (
    <div
      className={`${classes.expirence_section} ${
        theme === "white" && classes.white_theme
      } ${theme === "brown" && classes.brown_theme}`}
    >
      <SubHeader label={`Education`}></SubHeader>
      <div className={classes.experience_main_container}>
        {" "}
        {qualifications.map((experience,index) => (
          <div className={classes.card} key={index}>
            <span>{experience.date}</span>
            <h4>{experience.heading}</h4>
            <h6>{experience.text}</h6>
            <p>{experience.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
