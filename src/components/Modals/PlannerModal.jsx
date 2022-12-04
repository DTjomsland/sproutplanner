import { useState, useEffect } from "react";
import styles from "./PlannerModal.module.scss";
import SingleForm from "../Forms/SingleForm.jsx";
import PlannerModalCard from "../Common/PlannerModalCard";

const PlannerModal = (props) => {
  const categories = props.cat
    .sort((a, b) => a.user_category_id - b.user_category_id)
    .map((category) => {
      return (
        <PlannerModalCard
          key={category.user_category_id}
          itemID={category.user_category_id}
          title={category.user_category_name}
          category={category}
          addPlannerCat={props.addPlannerCat}
          setCatList={props.setCatList}
          toggleModal={props.toggleModal}
          deleteCat = {props.deleteCat}
        />
      );
    });

  return (
    <div className={`${styles[props.showModal ? "overlay" : "close-modal"]}`}>
      <div className={`${styles["modal-content"]}`}>
        <div onClick={props.toggleModal} className={`${styles["x"]}`}></div>
        {categories}
      </div>
    </div>
  );
};

export default PlannerModal;
