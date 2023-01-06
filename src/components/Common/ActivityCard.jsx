import React, { useState, useEffect} from "react";
import styles from "./CreateActivityCard.module.scss";
import {setSelectedActivity} from "../../store/slices/activitySlice"
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";



const ActivityCard = () => {
    const dispatch = useDispatch();
  
   
   
    if (icon.length === 0) {
        return (
          <div className={`${styles["act-item"]}`}>
            <div className={`${styles["act-card"]}`}>
              <p>{props.title}</p>
              <button
                type="button"
                onClick={handleClick}
                className={`${styles["edit-button"]}`}
              ></button>
            </div>
          </div>
        )
      }
        else if (icon.length > 0)  {
          return (
            <div className={`${styles["act-item"]}`}>
            <div className={`${styles["act-card"]}`}>
              <img src={icon[0].user_icon_url} alt="Activity Card" />
              <p>{props.title}</p>
              <button
                type="button"
                onClick={handleClick}
                className={`${styles["edit-button"]}`}
              ></button>
            </div>
          </div>
          )
        }
}

export default ActivityCard