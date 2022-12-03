import React, { useState, useEffect} from "react";
import styles from "./ActivityCard.module.scss";
import basketball from "../../images/basketball.png";
import {setSelectedActivity} from "../../store/slices/activitySlice"
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";



const ActivityCard = (props) => {
  const [icon, setIcon] = useState({});
  const dispatch = useDispatch();

 
 

  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

// API call to retrieve activities
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
    })
    .catch((err) => {
      console.log(err.message);
    });
}, [cookieValue]);

const handleClick = () => {
  dispatch(setSelectedActivity(props.activity));
  props.toggleDeleteModal()
}
console.log(icon)
  return (
    <div className={`${styles["act-item"]}`}>
      <div className={`${styles["act-card"]}`}>
        <img src="https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180824282/109059479-loading-vector-icon-isolated-on-transparent-background-loading-logo-concept.jpg" alt="Activity Card" />
        <p>{props.title}</p>
        <button
          type="button"
          onClick={handleClick}
          className={`${styles["edit-button"]}`}
        ></button>
      </div>
    </div>
  );
};

export default ActivityCard;
