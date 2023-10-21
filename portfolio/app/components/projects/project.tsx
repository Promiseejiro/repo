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
        <Link href={`${obj.url}`}>
          <div className={clasess.overlay}>
            <BiLink className={clasess.link_icon} />
          </div>
        </Link>
        <Image src={obj.image} alt="Picture of the author" />
      </div>
      <h4>{obj.name}</h4>
      <div className={clasess.link_container}>
        {/* {links.map((link, index) => ( */}
        {/* <h5>{obj.name}</h5> */}
        <Link className={`${clasess.project_btn}`} href={`${obj.repo}`}>
          Repo
        </Link>
        <Link className={`${clasess.project_btn}`} href={`${obj.url}`}>
          Live
        </Link>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Project;
