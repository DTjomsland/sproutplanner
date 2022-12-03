import React from "react";
import styles from "./CreateNewCard.module.scss";

const CreateNewCard = (props) => {
  return (
    <div onClick = {props.onclick} className={`${styles["create-card"]}`}>
      <div className={`${styles["button"]}`}></div>
      <p>New</p>
    </div>
  );
};

export default CreateNewCard;
