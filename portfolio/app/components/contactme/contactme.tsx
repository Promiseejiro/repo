import Link from 'next/link';
import  classes from "./contactme.module.css"
///icons
import {BsTwitter} from "react-icons/bs"
import {BiLogoFacebook,BiLogoLinkedin} from "react-icons/bi"
import {AiFillGithub}from "react-icons/ai";

const Contacts =()=>{
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
      link:"he",
      icon:<BiLogoFacebook className={classes.contact_icons}/>
    },
    {
      link:"hey",
      icon:<AiFillGithub className={classes.contact_icons}/>
    }
    
    ]
  
  
  
  return (
   <div className={classes.contact_container}>{links.map((contact)=>(
   <Link href={contact.link}>
     {contact.icon}</Link>
     ))}  </div>
    )
}

export default Contacts