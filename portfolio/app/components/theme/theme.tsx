import React,{useContext} from "react";
import { ThemeContext } from "../../../context/themecontext";

import classes from './theme.module.css'

const Theme =()=>{
     let { theme,changeTheme } = useContext(ThemeContext);
  
const changeHandler =(currentTheme: String)=>{
changeTheme(currentTheme)
}
     return(

          <div className={classes.theme_container}>
               <div className={`${
                   classes.item} ${classes.item_1}`} onClick={()=>{
                     changeHandler("white")
                   }}>
                    <div></div>
               </div>
               <div className={`${classes.item} ${classes.item_2}`} onClick={()=>{
                     changeHandler("dark")
                   }}>
                    <div></div>
               </div>
               <div className={`${classes.item} ${classes.item_3}`} onClick={()=>{
                     changeHandler("brown")
                   }}>
                    <div></div>
               </div>
          </div>
     )
}

export default Theme