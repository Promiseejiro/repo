import classes from "./form.module.css";

import SubHeader from "../subHeading/subheading";

const Form = () => {
  const onChangeHandler = (e: any) => {};
  return (
    <div className={classes.form}>
      <SubHeader label="Hire me"></SubHeader>
      <form>
        <div className={classes.form_controller}>
          <input placeholder="Name" onChange={onChangeHandler} />
        </div>
        <div className={classes.form_controller}>
          <input placeholder="Email" onChange={onChangeHandler} />
        </div>
        <div className={classes.form_controller}>
          <textarea placeholder="message" onChange={onChangeHandler}></textarea>
        </div>
        <div className={classes.form_controller}>
          <input
            className={classes.submit}
            type="submit"
            value="Send message"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;