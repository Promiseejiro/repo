import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { BiLink } from "react-icons/bi";
//css
import clasess from "./project.module.css";

import image from "../../../image/project.png";
interface Prop {
  name: String;
  url: String;
  repo: String;
  image: any;
}

interface PropObject {
  obj: Prop;
}

const Project = ({ obj }: PropObject) => {
  const [current, setCurrent] = useState<String>("Link");
  const links = [`Link`, `Repo`];

  return (
    <div className={clasess.card}>
      <div className={clasess.image}>
        <div className={clasess.overlay}>
          <BiLink className={clasess.link_icon} />
        </div>
        <Image src={obj.image} alt="Picture of the author" />
      </div>
      <h4>{obj.name}</h4>
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
