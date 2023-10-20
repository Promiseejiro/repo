import React,{useContext} from "react";
import { ThemeContext } from "../../../context/themecontext";

import classes from './theme.module.css'

const Theme =()=>{
const themes =[
     'black',
     'white',
]

     let { theme,changeTheme } = useContext(ThemeContext);
  
const changeHandler =(currentTheme: string)=>{
changeTheme(currentTheme)
}
     return(

          <div className={classes.theme_container}>
               {/* <span>Themes</span> */}
               <div className={classes.container}>
               {/* <div className={`${
                   classes.item} ${classes.item_1}`} onClick={()=>{
                     changeHandler("dark")
                   }}>
                    <div></div>
               </div> */}
               {/* <div className={`${classes.item} ${classes.item_2}`} onClick={()=>{
                     changeHandler("white")
                   }}>
                    <div></div>
               </div> */}
               <div className={`${classes.item} ${classes.item_3}`} onClick={()=>{
                     changeHandler("brown")
                   }}>
                    <div></div>
               </div>
               </div>
             
          </div>
     )
}

export default Theme