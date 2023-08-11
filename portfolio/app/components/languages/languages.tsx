import SubHeader from "../subHeading/subheading"

import classes from "./languages.module.css"

const Languages=()=>{
     return(
          <div className={classes.languages}>
               <SubHeader label={`Experience`}></SubHeader>
          <div className={classes.card}>
            <div className={classes.item1}>
              <span>2 Yrs</span>
              <h4>JavaScript</h4>
            </div>
            <div className={classes.item2}>
              <span>1 Yrs</span>
              <h4>PHP</h4>
            </div>
            <div className={classes.item3}>
              <span>2 Yrs</span>
              <h4>HTML/CSS</h4>
            </div>
          </div>
        </div>
     )
}

export default Languages