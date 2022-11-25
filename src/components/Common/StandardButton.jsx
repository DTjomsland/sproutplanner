import React from "react";
import styles from "./StandardButton.module.css";

const StandardButton = (props) => {
  return (
    <div>
      <button type={props.buttonType} className={`${styles[props.buttonStyle]}`}>{props.buttonText}</button>
    </div>
  );
};

export default StandardButton;
