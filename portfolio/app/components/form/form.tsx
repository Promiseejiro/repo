import React,{useContext} from "react";
import { ThemeContext } from "../../../context/themecontext";

import {NextResponse} from "next/server"

import classes from "./form.module.css";

import SubHeader from "../subHeading/subheading";

const Form = () => {
  let { theme } = useContext(ThemeContext);
  
  const onChangeHandler = (e: any) => {};
  
  function POST() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    method: 'POST',
    body: JSON.stringify({ time: new Date().toISOString() }),
  })
  const data = await res.json()
  return NextResponse.json(data)
}
  return (
    <div className={`${classes.form} ${theme =='white' && classes.white_theme} ${theme ==="brown" && classes.brown_theme}`}>
      <SubHeader label="Hire me"></SubHeader>
      <form>
        <div className={classes.form_controller}>
          <input placeholder="Name" onChange={onChangeHandler} />
        </div>
        <div className={classes.form_controller}>
          <input placeholder="Email" onChange={onChangeHandler} />
        </div>
        <div className={classes.form_controller}>
          <textarea placeholder="message" onChange={onChangeHandler}></textarea>
        </div>
        <div className={classes.form_controller}>
          <input
            className={classes.submit}
            type="submit"
            value="Send message"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
