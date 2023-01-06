import React, { useState, useEffect} from "react";
import styles from "./CreateActivityCard.module.scss";
import {setSelectedActivity} from "../../store/slices/activitySlice"
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";



const CreateActivityCard = (props) => {
  const [icon, setIcon] = useState({});
  const dispatch = useDispatch();

 
 

  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

// API call to retrieve icons
useEffect(() => {
  fetch(`http://localhost:5000/usericon/${props.activity.user_activity_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookieValue,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setIcon(data);
      props.setIsIcon(false);
    })
    .catch((err) => {
      console.log(err.message);
    });
}, [cookieValue, props.isIcon]);

const handleClick = () => {
  dispatch(setSelectedActivity(props.activity));
  props.toggleDeleteModal()
}


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
};



export default CreateActivityCard;
