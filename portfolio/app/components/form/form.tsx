import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../../context/themecontext";

import { NextResponse } from "next/server";

import classes from "./form.module.css";

import SubHeader from "../subHeading/subheading";
import "../../api/message/route";

interface messageContent {
  email: String;
  name: String;
  message: String;
}
const Form = () => {
  const [message, setMessage] = useState<messageContent>({
    email: "",
    name: "",
    message: "",
  });
  let { theme } = useContext(ThemeContext);

  const onChangeHandler = (e: any) => {
setMessage({...message,[e.target.name]:e.target.value})
console.log(message)
  };
 
  const handleSubmit = (e:any) => {
    e.preventDefault()
    fetch("../../api/hire", {
      method: "POST",
      body: JSON.stringify({
      message,
        Headers: {
          "Content-Type": "application/json",
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert(data)
      });
  };

  return (
    <div
      className={`${classes.form} ${theme == "white" && classes.white_theme} ${
        theme === "brown" && classes.brown_theme
      }`}
    >
      <SubHeader label="Hire me"></SubHeader>
      <form onSubmit={handleSubmit}>
        <div className={classes.form_controller}>
          <input placeholder="Name" onChange={onChangeHandler} name='name'/>
        </div>
        <div className={classes.form_controller}>
          <input placeholder="Email" onChange={onChangeHandler} name='email' />
        </div>
        <div className={classes.form_controller}>
          <textarea placeholder="message" onChange={onChangeHandler} name='message'></textarea>
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
