import React, { useState } from "react";
import styles from "./CatCard.module.scss";
import StandardButton from "./StandardButton";
import EditCatModal from "../Modals/EditCatModal";

const CatCard = (props) => {
const [modal, setModal] = useState(false);
const catID = props.itemID

  // Modal handler
const toggleModal = () => {
  // let key = category.user_category_id
  // console.log(key)
  setModal(!modal);
};

  return (
    <div className={`${styles["cat-item"]}`} >
      <div className={`${styles["cat-card"]}`}>
        <p>{props.title}</p>
        <button
          type="button"
          onClick={toggleModal}
          className={`${styles["edit-button"]}`}
        ></button>
      </div>
      <StandardButton
        buttonStyle="small-green-button"
        buttonText={`Edit ${props.title} Activities`}
      />
      <EditCatModal itemID = {props.itemID} toggleModal={toggleModal} updateCat={props.updateCat} showModal = {modal}/> 
    </div>
  );
};

export default CatCard;
