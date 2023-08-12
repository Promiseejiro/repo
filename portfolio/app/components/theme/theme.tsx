import React,{useContext} from "react";
import { ThemeContext } from "../../../context/themecontext";

import classes from './theme.module.css'

const Theme =()=>{
const themes =[
     'white',
     'black'
]

     let { theme,changeTheme } = useContext(ThemeContext);
  
const chhangeHandler =()=>{
changeTheme('yello')
}

     return(

          <div className={classes.theme_container}>
               <div className={`${
                   classes.item} ${classes.item_1}`} onClick={chhangeHandler}>
                    <div></div>
               </div>
               <div className={`${classes.item} ${classes.item_2}`} onClick={chhangeHandler}>
                    <div></div>
               </div>
               <div className={`${classes.item} ${classes.item_3}`}onClick={chhangeHandler}>
                    <div></div>
               </div>
          </div>
     )
}

export default Theme