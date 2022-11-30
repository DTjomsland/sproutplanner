import React from "react";
import styles from "./StandardButton.module.scss";

const StandardButton = (props) => {
  return (
    <React.Fragment>
      <button
        type={props.buttonType}
        className={`${styles[props.buttonStyle]}`}
      >
        {props.buttonText}
      </button>
    </React.Fragment>
  );
};

export default StandardButton;
