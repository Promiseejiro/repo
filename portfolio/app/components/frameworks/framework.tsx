import SubHeader from "../subHeading/subheading";
//css
import classes from "./framework.module.css";

const Frameworks = () => {
  const frameworks = [
    {
      name: "Material UI",
      percent: "70%",
    },
    {
      name: "Bootstrap",
      percent: "90%",
    },
    {
      name: "Tailwind CSS",
      percent: "85%",
    },
  ];
  return (
    <div className={classes.frameworks}>
      <SubHeader label={`Experience`}></SubHeader>
      <div className={classes.framework_main_container}>
        {frameworks.map((framework) => (
          <div className={classes.card}>
            <div className={classes.info_details}>
              <h5>{framework.name}</h5> <p>{framework.percent}</p>
            </div>
            <div className={classes.progressbar}>
              <div
                className={classes.progress}
                style={{
                  width: `${framework.percent}`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frameworks;
