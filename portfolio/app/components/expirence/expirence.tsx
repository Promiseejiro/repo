import classes from "./expirence.module.css"

//components
import SubHeader from "../subHeading/subheading";

const Expirence =()=>{
     const experiences = [
          {
            date: "May 2022 - Present",
            heading: "Lead developer EasyInterview",
            text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
          },
          {
            date: "May 2022 - Present",
            heading: "Lead developer EasyInterview",
            text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
          },
          {
            date: "May 2022 - Present",
            heading: "Lead developer EasyInterview",
            text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
          },
          {
            date: "May 2022 - Present",
            heading: "Lead developer EasyInterview",
            text: "Contact me to discuss that convinced idea, while were bring it to reality with my tech skills",
          },
        ];
     return(
          <div className={classes.expirence_section}>
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