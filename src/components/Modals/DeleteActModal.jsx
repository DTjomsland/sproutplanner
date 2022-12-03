import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Modals.module.scss";
import StandardButton from "../Common/StandardButton";

const DeleteActModal = (props) => {
  // Pulls JWT token form the browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

const activity = useSelector((state) => state.activity.activity);


let handleDelete = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch(
      `http://localhost:5000/useractivity/${activity.user_activity_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookieValue,
        },
        body: JSON.stringify({
          user_activity_name: activity.user_activity_id,
        }),
      }
    );
    const data = await res.json();
    console.log(data)
    props.deleteAct(activity.user_activity_id);


    if (res.status === 201) {
      props.toggleDeleteModal();

    } else {
    }
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className={`${styles[props.showModal ? "overlay" : "close-modal"]}`}>
      <div className={`${styles["modal-content"]}`}>
        <div onClick = {props.toggleDeleteModal} className={`${styles["x"]}`}></div>
        <p>Are you sure you want to delete this activity?</p>
        <StandardButton buttonText="Delete" buttonStyle="small-red-button" onClick={handleDelete}/>
      </div>
    </div>
  );
};

export default DeleteActModal;
