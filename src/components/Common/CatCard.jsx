import React, { useState, useContext } from "react";
import styles from "./CatCard.module.scss";
import StandardButton from "./StandardButton";
import EditCatModal from "../Modals/EditCatModal";
import {setSelectedCategory} from "../../store/slices/categorySlice"
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";

const CatCard = (props) => {
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  
  

  // Modal handler
  const toggleEditModal = () => {
    
    setEditModal(!editModal);
  };

  const handleClick = () => {
    dispatch(setSelectedCategory(props.category))
  }


//  console.log(props.category)

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
      <Link to='/editactivities'>
      <StandardButton
        buttonStyle="small-green-button"
        buttonText={`Edit ${props.title} Activities`}
        onClick={handleClick}
      />
      </Link>
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
