import React, { useState } from "react";
import styles from "./CatCard.module.scss";
import StandardButton from "./StandardButton";
import EditCatModal from "../Modals/EditCatModal";

const CatCard = (props) => {
  const [editModal, setEditModal] = useState(false);
  const catID = props.itemID;

  // Modal handler
  const toggleEditModal = () => {
    // let key = category.user_category_id
    // console.log(key)
    setEditModal(!editModal);
  };

  return (
    <div className={`${styles["cat-item"]}`}>
      <div className={`${styles["cat-card"]}`}>
        <p>{props.title}</p>
        <button
          type="button"
          onClick={toggleEditModal}
          className={`${styles["edit-button"]}`}
        ></button>
      </div>
      <StandardButton
        buttonStyle="small-green-button"
        buttonText={`Edit ${props.title} Activities`}
      />
      <EditCatModal
        itemID={props.itemID}
        toggleModal={toggleEditModal}
        updateCat={props.updateCat}
        deleteCat={props.deleteCat}
        showModal={editModal}
      />
    </div>
  );
};

export default CatCard;
