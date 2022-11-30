import React from "react";
import styles from "./CatCard.module.scss";
import StandardButton from "./StandardButton";

const CatCard = (props) => {

  return (
    <div className={`${styles["cat-item"]}`}>
      <div className={`${styles["cat-card"]}`}>
        <p>{props.title}</p>
        <button className={`${styles["edit-button"]}`}></button>
      </div>
      <StandardButton
        buttonStyle="small-green-button"
        buttonText={`Edit ${props.title} Activities`}
      />
    </div>
  );
};

export default CatCard;
