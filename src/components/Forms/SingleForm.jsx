import React from "react";
import styles from "./SingleForm.module.scss";
import StandardButton from "../Common/StandardButton";

const SingleForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={`${styles["single-form"]}`}>
        <label htmlFor="uname" className={`${styles[props.textColor]}`}>
          <b>{props.title}</b>
        </label>
        <input
          className={`${styles["input"]}`}
          type="text"
          onChange={props.handleChange}
          name="uname"
          maxLength="10"
          required
        ></input>
        <StandardButton
          buttonType="submit"
          buttonText={props.buttonText}
          buttonStyle="green-button"
          onClick={props.onClick}
        />
      </div>
    </form>
  );
};

export default SingleForm;
