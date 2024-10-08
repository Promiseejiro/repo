import {useContext} from "react"
import { ThemeContext } from "../../../context/themecontext";

import classes from "./expirence.module.css"
//components
import SubHeader from "../subHeading/subheading";

const Expirence =()=>{
  let { theme } = useContext(ThemeContext);
  
     const experiences = [
      {
        date: "Dec 2023 -2024",
        role: "Gyzer tech",
        heading: "Frontend Developer",
        text: "Was involved in developing an intuitive interface that enhanced user engagement and understanding through a clear and user-friendly design.",
      },
      {
        date: "July 2024 -Aug 2024",
        role: "HNG Internship",
        heading: "Frontend Developer",
        text: "Collaborated with a group of developer, Designer, Project managers, Data analyst in developing various software applications development with rigorous training sessions.",
      },
      {
        date: "May 2022 - 2023",
        role: "Personal Project",
        heading: "Lead developer easyCBT",
        text: "A  CBT tool use to create, solve, download answers.For exam preparation, Boost confidence, ace your exams. 📚✅ #Success",
      },
      {
        date: "May 2022 - 2023",
        role: "Personal Project",
        heading: "RERHA Publicity tool",
        text: "RerhaDp helps Streamline customer interactions, enhance relationships. Your ultimate CRM solution for growth and satisfaction. Elevate engagement effortlessly."
      },
          {
            date: "May 2020 - Present",
            role: "Frontend Dev",
            heading: "Google developer student club",
            text: "A Tech club on campus that innovate, solve real-world issues, and collaborate on impactful tech projects.",
          },
          {
            date: "May 2021 - 2022",
            heading: "Yarsh Edutech",
            role: "Frontend Dev",
            text: "An edutech company that helps students with updated resources, hostel search, rides, and seamless campus life experiences through Tech."
          },
        
        ];
     return(
          <div className={`${classes.expirence_section} ${theme ==="white" && classes.white_theme } ${theme ==="brown" && classes.brown_theme}`}>
        <SubHeader label={`Experience`}></SubHeader>
        <div className={classes.experience_main_container}>
        {experiences.map((experience,index) => (
            <div className={classes.card} key={index}>
              <span>{experience.date}</span>
              <h4>{experience.heading}</h4>
              <span>{experience.role}</span>
              <p>{experience.text}</p>
            </div>
          ))}
        </div>  
        </div>
     )
}
export default Expirence