import {useContext} from "react"
import { ThemeContext } from "../../../context/themecontext";



import Link from 'next/link';
import  classes from "./contactme.module.css"
///icons
import {BsTwitter} from "react-icons/bs"
import {BiLogoFacebook,BiLogoLinkedin} from "react-icons/bi"
import {AiFillGithub}from "react-icons/ai";

const Contacts =()=>{
  let { theme } = useContext(ThemeContext);
  
  const links=[
    {
      link:"he",
      icon:<BsTwitter className={classes.contact_icons}/>
    },
    {
      link:"he",
      icon:<BiLogoLinkedin className={classes.contact_icons}/>
    },
    {
      link:"https://www.facebook.com/promise.emosivbe.98?mibextid=ZbWKwL",
      icon:<BiLogoFacebook className={classes.contact_icons}/>
    },
    {
      link:"https://github.com/",
      icon:<AiFillGithub className={classes.contact_icons}/>
    }
    
    ]
  
  
  
  return (
   <div className={`${classes.contact_container} ${theme ==="white" && classes.white_theme}
   ${theme ==="brown" && classes.brown_theme}
   `}>{links.map((contact,index)=>(
   <Link href={contact.link} key={index}>
     {contact.icon}</Link>
     ))}  </div>
    )
}

export default Contacts