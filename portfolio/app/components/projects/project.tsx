import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

//css
import clasess from "./project.module.css";

import image from '../../../image/project.png'

const Project = () => {
  const [current, setCurrent] = useState<String>("Link");
  const links = [`Link`, `Repo`];

  return (
    <div className={clasess.card}>
      <div className={clasess.image}>
        <Image src={image} alt="Picture of the author" />
        <div className={clasess.overlay}></div>
      </div>
      <h4>Comment section</h4>
      <div className={clasess.link_container}>
        {links.map((link, index) => (
          <button
            key={index}
            className={`${clasess.project_btn} ${
              link === current && clasess.active_btn
            }`}
            onClick={() => setCurrent(link)}
          >
            {link}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Project;
