"use client";
import { ThemeContext } from "../context/themecontext";
import { useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
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
//css
import classes from "./page.module.css";

import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500", "600", "700", "800"],
});

export default function Home() {
  let { theme } = useContext(ThemeContext);
  return (
    <div>
        <div className={`${classes.main_container}   ${poppins.className}  ${theme ==="white" && classes.white}`}>
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
          
        </div>
    
    </div>
  );
}
