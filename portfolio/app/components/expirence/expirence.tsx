import {useContext} from "react"
import { ThemeContext } from "../../../context/themecontext";

import classes from "./expirence.module.css"
//components
import SubHeader from "../subHeading/subheading";

const Expirence =()=>{
  let { theme } = useContext(ThemeContext);
  
     const experiences = [
          {
            date: "May 2020 - Present",
            heading: "Google developer student club",
            text: "A Tech club on campus that innovate, solve real-world issues, and collaborate on impactful tech projects.",
          },
          {
            date: "May 2021 - 2022",
            heading: "Yarsh Edutech",
            text: "Frontend developer at Yarsh.com an edutech company that helps students with updated resources, hostel search, rides, and seamless campus life experiences through Tech."
          },
          {
            date: "May 2022 - Present",
            heading: "Lead developer easyCBT",
            text: "Fullstack developer of easyCBT. A  CBT tool use to create, solve, download answers. Boost confidence, ace your exams. 📚✅ #Success",
          },
          {
            date: "May 2022 - Present",
            heading: "RERHA Publicity tool",
            text: "Fullstack at RERHA. that helps Streamline customer interactions, enhance relationships. Your ultimate CRM solution for growth and satisfaction. Elevate engagement effortlessly."
          },
        ];
     return(
          <div className={`${classes.expirence_section} ${theme ==="white" && classes.white_theme }`}>
        <SubHeader label={`Experience`}></SubHeader>
        <div className={classes.experience_main_container}>
        {experiences.map((experience) => (
            <div className={classes.card}>
              <span>{experience.date}</span>
              <h4>{experience.heading}</h4>
              <p>{experience.text}</p>
            </div>
          ))}
        </div>  
        </div>
     )
}
export default Expirence