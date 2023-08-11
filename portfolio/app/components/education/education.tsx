import React from "react";
import classes from "./education.module.css"

//components
import SubHeader from "../subHeading/subheading";

const Education=()=>{
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
          },
        ];
return(
     <div className={classes.expirence_section}>
     <SubHeader label={`Education`}></SubHeader>
     <div className={classes.experience_main_container}> {qualifications.map((experience) => (
       <div className={classes.card}>
         <span>{experience.date}</span>
         <h4>{experience.heading}</h4>
         <h6>{experience.text}</h6>
         <p>{experience.course}</p>
       </div>
     ))}</div>
    
   </div>

)
}

export default Education