import React,{useContext} from "react";
import { ThemeContext } from "../../../context/themecontext";

import classes from "./contact.module.css";

//icon
import { BiCodeAlt } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdAlternateEmail ,MdLocationOn} from "react-icons/md";

//components
import SubHeader from "../subHeading/subheading";

const Contact = () => {
  let { theme } = useContext(ThemeContext);
  

  return (
    <div className={`${classes.services_section} ${theme ==='white' && classes.white_theme} ${theme ==="brown" && classes.brown_theme}`}id='contact'>
      <SubHeader label="Contact me"></SubHeader>
      <div className={classes.contact_main_container}>
        <div className={classes.item}>
          <div className={classes.card}>
          <MdAlternateEmail className={classes.icons} />
            <h4>Email</h4>
            <p>promiseejiro43@gmail.com</p>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.card}>
          <MdCall className={classes.icons} />   <h4>Phone</h4>
            <p>+2349030257743</p>
          </div>
        </div>
        <div className={`${classes.item} ${classes.full_width}`}>
          <div className={classes.card}>
          <MdLocationOn className={classes.icons} />
            <h4>Location</h4>
            <p>Remote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
