import {useState,useContext} from "react"
import {ThemeContext } from "../../../context/themecontext"
import Link from "next/link"
import {FaTimes,FaBars} from "react-icons/fa"
import classes from "./navbar.module.css"
const Navbar =()=>{
  let { theme } = useContext(ThemeContext);
  
  //state
  const [openNav,setOpenNav] =useState(false);
  
  //functions
  const navHandler=()=>{
    setOpenNav(!openNav)
  }
  
  return (
    <div className={`${classes.nav_wrapper} ${theme ==='white' && classes.white_theme}`}> 
    <h2 >Portfolio</h2>
<div className={classes.desktopnav}> <ul >
 <li> <Link href="#home">Home</Link> </li>
 <li> <Link href="#resume">Resume</Link> </li>
 <li> <Link href="#project">Project</Link> </li>
 <li> <Link href="#contact">Contact</Link> </li>
 </ul>
 </div>

 {!openNav &&(  <FaBars onClick={navHandler} className={classes.nav_icon}/>)}
  {openNav && (  <FaTimes onClick={navHandler} className={classes.nav_icon}/>)}
    {
  openNav &&(  <div className={classes.mobile_nav}>
   <ul >
   <li> <Link href="#home">Home</Link> </li>
 <li> <Link href="#resume">Resume</Link> </li>
 <li> <Link href="#project">Project</Link> </li>
 <li> <Link href="#contact">Contact</Link> </li>
 </ul>
  </div>
  )
    }
    </div>
    )
}

export default Navbar