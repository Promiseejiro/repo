import {useContext} from "react"
import { ThemeContext } from "../../../context/themecontext";

import classes from "./services.module.css";
import { BiCodeAlt } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import SubHeader from "../subHeading/subheading";
const Service = () => {
  let { theme } = useContext(ThemeContext);
  const services = [
    {
      heading: "Web development",
      text: "Design  & deployment of effective/efficient web app with seamless user experience",
      icon: <BiCodeAlt className={classes.icons} />,
    },
    {
      heading: "Consultant",
      text: "Hit me up let's discuss those brilliant idea, while i help you bring it to reality with my tech skills",
      icon: <MdCall className={classes.icons} />,
    },
  ];

  return (
    <div className={`${classes.services_section} ${theme ==="white" && classes.white_theme} ${theme ==="brown" && classes.brown_theme}`}>
    <SubHeader label='Services'></SubHeader>
      <div className={classes.service_container}>
      <div className={classes.box}>
          {services.map((service) => (
          <div className={classes.card}>
            {service.icon}
            <h4>{service.heading}</h4>
            <p>{service.text}</p>
          </div>
        ))}
          </div>
     
      </div>
    </div>
  );
};

export default Service;
