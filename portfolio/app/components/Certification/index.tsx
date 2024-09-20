import React,{useContext} from "react";
import { ThemeContext } from "../../../context/themecontext";

import classes from "./index.module.css";

//icon
import { MdCall } from "react-icons/md";
import { MdAlternateEmail ,MdLocationOn} from "react-icons/md";
//components
import SubHeader from "../subHeading/subheading";
import Link from "next/link";

const Certification = () => {
  let { theme } = useContext(ThemeContext);
  
  return (
    <div className={`${classes.services_section} ${theme ==='white' && classes.white_theme} ${theme ==="brown" && classes.brown_theme}`}id='contact'>
      <SubHeader label="Certification"></SubHeader>
      <div className={classes.contact_main_container}>
       <div>
        <h5 className={classes.certificationHeading}>HNG internship</h5>
         <Link className={`${classes.project_btn}`} href={`https://drive.google.com/file/d/1-HsLLMqvIjsLURoDMHUeszo725Yu5YbH/view`}>
        View Certificate
        </Link>
       </div>
      </div>
    </div>
  );
};

export default Certification;
