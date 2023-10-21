"use client";
import { ThemeContext } from "../context/themecontext";
import { useContext, useState } from "react";
import Comment from "postcss/lib/comment";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Service from "./components/services/services";
import Contacts from "./components/contactme/contactme";
import Projects from "./components/projects/projects";
import Expirence from "./components/expirence/expirence";
import Education from "./components/education/education";
import Frameworks from "./components/frameworks/framework";
import Languages from "./components/languages/languages";
import TechStack from "./components/techStack/techStack";
import Contact from "./components/contact/contact";
import Form from "./components/form/form";
import Scroll from "./components/scrolldetector/sroolldetector";
//css
import classes from "./page.module.css";

import { Poppins } from "next/font/google";
import Connect from "./components/leftcomponent/connect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
interface touchProp {
  x: Number;
  y: Number;
}
function Home() {
  let { theme } = useContext(ThemeContext);

  const [touchPoint, setTouchPoint] = useState<touchProp>({
    x: 0,
    y: 0,
  });
  const mouseMove = (e: any) => {
    var x = e.clientX;
    var y = e.clientY;
    setTouchPoint({
      ...touchPoint,
      x: x - 3,
      y: y - 3,
    });
  };
  return (
    <div onMouseMove={mouseMove}>
      <div
        className={`${classes.main_container}   ${poppins.className}  ${
          theme === "white" && classes.white_theme
        } ${theme === "brown" && classes.brown_theme}`}
      >
        <Scroll x={touchPoint.x} y={touchPoint.y}></Scroll>
        <div>
          <Navbar />
        </div>
        <Contacts />

        <Hero></Hero>

        <Service></Service>

        <Expirence></Expirence>

        <Education></Education>

        <Frameworks></Frameworks>

        <Languages></Languages>

        <TechStack></TechStack>

        <Projects></Projects>

        <Contact></Contact>

        <Form></Form>
        
        <Connect></Connect>
      </div>
    </div>
  );
}

export default Home;
