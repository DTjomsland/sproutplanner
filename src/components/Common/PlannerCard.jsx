import React from "react";
import styles from "./PlannerCard.module.scss";

const PlannerCard = (props) => {
  return (
    <div className={`${styles["cat-item"]}`}>
      <div className={`${styles["planner-card"]}`}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default PlannerCard;
