import React from "react";
import styles from "./CreateNewCard.module.css";

const CreateNewCard = () => {
  return (
    <div className={`${styles["create-card"]}`}>
      <div class={`${styles["button"]}`}></div>
      <p>New</p>
    </div>
  );
};

export default CreateNewCard;
