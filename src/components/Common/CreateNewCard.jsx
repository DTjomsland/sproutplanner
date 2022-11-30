import React from "react";
import styles from "./CreateNewCard.module.scss";

const CreateNewCard = () => {
  return (
    <div className={`${styles["create-card"]}`}>
      <div class={`${styles["button"]}`}></div>
      <p>New</p>
    </div>
  );
};

export default CreateNewCard;
