import React, { useState, useContext } from "react";
import styles from "./PlannerModalCard.module.scss";
import StandardButton from "./StandardButton";
import EditCatModal from "../Modals/EditCatModal";
import { setSelectedCategory } from "../../store/slices/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PlannerCard = (props) => {
  
  const addPlannerCat = () => {
    props.setCatList(current => [...current, props.category])
    props.toggleModal()
}


  
  return (
      <div onClick = {addPlannerCat} className={`${styles["cat-item"]}`}>
        <div className={`${styles["cat-card"]}`}>
          <p>{props.title}</p>
        </div>
      </div>
  );
};

export default PlannerCard;
