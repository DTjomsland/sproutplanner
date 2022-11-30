import React from "react";
import styles from "./StandardButton.module.scss";

const StandardButton = (props) => {
  
  return (
      <button
        type={props.buttonType}
        className={`${styles[props.buttonStyle]}`}
      >
        {props.buttonText}
      </button>
  );
};

export default StandardButton;
