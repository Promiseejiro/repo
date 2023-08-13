import {useState} from "react";

import Link from "next/link";

//css
import clasess from "./project.module.css";

const Project = () => {
  const [current, setCurrent] = useState<String>("Link");
  const links = [`Link`, `Repo`];

  return (
    <div className={clasess.card}>
      <div className={clasess.image}>
        <img src="https://res.cloudinary.com/dxqg5hify/image/upload/v1688078799/xes89qbxpjvylz9kqvdg.jpg" />
        <div className={clasess.overlay}></div>
      </div>
      <h4>Comment section</h4>
      <div className={clasess.link_container}>
        {links.map((link,index) => (
          <button key={index}
            className={`${clasess.project_btn} ${link===current && clasess.active_btn}`}
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
