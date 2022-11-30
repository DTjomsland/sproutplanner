import React from "react";
import styles from "./CatCard.module.css";
import StandardButton from "./StandardButton";

const CatCard = (props) => {
  let editButtonStyle = "small-green-button";
  let editButtonText = "Edit Exercise Activities";

  return (
    <div className={`${styles["cat-item"]}`}>
      <div className={`${styles["cat-card"]}`}>
        <p>{props.title}</p>
        <button className={`${styles["edit-button"]}`}></button>
      </div>
      <StandardButton
        buttonText={editButtonText}
        buttonStyle={editButtonStyle}
        buttonText={`Edit ${props.title} Activities`}
      />
    </div>
  );
};

export default CatCard;
