import React, { useState } from "react";
import styles from "./ActivityCard.module.scss";
import basketball from '../../images/basketball.png';
import StandardButton from "./StandardButton";
import CreateNewCard from "./CreateNewCard";



const ActivityCard = () => {
    const [editModal, setEditModal] = useState(false);
    
  
    // Modal handler
    const toggleEditModal = () => {
      // let key = category.user_category_id
      // console.log(key)
      setEditModal(!editModal);
    };

  return (
        <div className={`${styles["act-item"]}`}>
          <div className={`${styles["act-card"]}`}>
          <img src={basketball} alt="Activity Card"/>
            <p>Basketball</p>
            <button
              type="button"
              onClick={toggleEditModal}
              className={`${styles["edit-button"]}`}
              
            ></button>
          </div>
        </div>
      );
    };
    
  
export default ActivityCard;