import React from "react";
import styles from "./SingleForm.module.scss";
import StandardButton from "./StandardButton";

const SingleForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={`${styles["single-form"]}`}>
        <label for="uname" className={`${styles[props.textColor]}`}>
          <b>{props.title}</b>
        </label>
        <input
          className={`${styles["input"]}`}
          type="text"
          onChange={props.handleChange}
          value={props.catName}
          name="uname"
          input maxlength="10"
          required
        ></input>
        <StandardButton
          buttonType="submit"
          buttonText={props.buttonText}
          buttonStyle="green-button"
        />
      </div>
    </form>
  );
};

export default SingleForm;
