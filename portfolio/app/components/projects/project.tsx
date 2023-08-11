import { useState } from "react";

import Link from "next/link";

//css
import clasess from "./project.module.css";

const Project = () => {
  const [current, setCurrent] = useState<String>("Link");
  const links = [`Link`, `Repo`];

  return (
    <div className={clasess.card}>
      <div className={clasess.image}>
        <img src="https://res.cloudinary.com/dxqg5hify/image/upload/v1691327439/image-1__1_-removebg-preview_1691310334102-removebg-preview_wxcx6d.png" />
        <div className={clasess.overlay}></div>
      </div>
      <h4>Comment section</h4>
      <div className={clasess.link_container}>
        {links.map((link) => (
          <button
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
