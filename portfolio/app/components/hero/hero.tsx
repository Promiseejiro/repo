import { useRef, useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../../../context/themecontext";

import Link from "next/link";
import Image from "next/image";

import Theme from "../theme/theme";

import classes from "./hero.module.css";

import { mydetails, mydetails2 } from "@/app/utils/data";

import profilepic from "../../../image/profile.png";
import hello from "../../../image/hello2.png";
interface heightProps {
  height: String;
}
const Hero = () => {
  let { theme } = useContext(ThemeContext);

  // const [height, setHeight] = useState<heightProps>();
  // useEffect(() => {
  //     if (sliderRef.current) {
  //       setHeight({
  //         ...height,
  //         height: sliderRef.current.getBoundingClientRect().height,
  //       });
  //     }
  // }, []);

  const sliderRef = useRef();
  return (
    <div
      className={`${theme === "white" && classes.white_theme} ${
        theme === "brown" && classes.brown_theme
      }`}
    >
      <div className={`${classes.hero_section}`} id="home">
        <Image src={hello} alt="profile" className={classes.my_image} />
        <div className={classes.animation_box}></div>
        <div className={classes.hero_overlay}>
          <div className={classes.border_container}>
            <div className={`${classes.box} ${classes.top_left}`}></div>
            <div className={`${classes.box} ${classes.top_right}`}></div>
            <div className={`${classes.box} ${classes.bottom_left}`}></div>
            <div className={`${classes.box} ${classes.bottom_right}`}></div>

            <div className={classes.theme_container}>
              {/* <Theme></Theme> */}
            </div>
            <div className={classes.hero_section_head}>
              <motion.div
                initial={{ x: 2000, y: 0, rotate: 0 }}
                animate={{ x: -2000, y: 0, rotate: 0 }}
                exit={{ x: -2000, y: 0, rotate: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <div className={classes.line}></div>
              </motion.div>
              <motion.div
                className="box"
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <h4>
                  Building Technical <span>Solution!!!</span>
                </h4>
              </motion.div>
              <motion.div
                initial={{ x: -2000, y: 0, rotate: 0 }}
                animate={{ x: 2000, y: 0, rotate: 0 }}
                exit={{ x: -2000, y: 0, rotate: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <div className={classes.line}></div>
              </motion.div>
            </div>
            <p>
              {`Hello, I'm `}
              <span>{`Emosivbe promise`}</span>
              {`, a fullstack web
              developer`}
              <span>{`.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.details_container}>
        <div className={classes.details}>
          <div>
            <Image
              className={classes.detailes_image}
              src={profilepic}
              alt="profile"
            />
          </div>

          <div className={classes.content} id="resume">
            <p className={classes.discription}>
              {` I'm Emosivbe promise. A tech savant with mastery of contemporary
              tools and technologies, fashioning software solutions that
              prioritize seamless user experiences and improve lives.`}
            </p>
            <div className={classes.ul_container}>
              <ul className={classes.first_ul}>
                {mydetails.map((detail, index) => (
                  <li key={index}>
                    <p> {detail.label} : </p>
                    <span> {detail.value}</span>
                  </li>
                ))}
              </ul>
              <ul className={classes.second_ul}>
                {mydetails2.map((detail, index) => (
                  <li key={index}>
                    {detail.label} : <span>{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.btn_container}>
              <a
                href="https://drive.google.com/file/d/1N0G6Bin1h4TdLa5-xqtsc1Auv2pzVG9b/view?usp=sharing"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
