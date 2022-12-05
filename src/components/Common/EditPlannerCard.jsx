import React, { useState, useContext } from "react";
import styles from "./EditPlannerCard.module.scss";
import StandardButton from "./StandardButton";
import EditCatModal from "../Modals/EditCatModal";
import { setSelectedCategory } from "../../store/slices/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const EditPlannerCard = (props) => {
  return (
    <div className={`${styles["cat-card"]}`}>
      <p>{props.title}</p>
      <button
        type="button"
        className={`${styles["edit-button"]}`}
      ></button>
    </div>
  );
};

export default EditPlannerCard;
