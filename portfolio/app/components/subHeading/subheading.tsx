import classes from "./subHeading.module.css";

interface SubHeaderprops {
     label:String
}

const SubHeader = ({label}:SubHeaderprops) => {
  return <h3 className={classes.sub_heading}>{label}</h3>
};

export default SubHeader;
