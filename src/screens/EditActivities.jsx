import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import StandardButton from "../components/Common/StandardButton";
import ActivityCard from "../components/Common/ActivityCard";
import CreateNewCard from "../components/Common/CreateNewCard";
import styles from "./EditActivities.module.scss";
import { Link } from "react-router-dom";


const EditActivities = () => {
  const [act, setAct] = useState([]);
  const categoryID = useSelector((state) => state.category.category)

  // Retrieve JWT from browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

    console.log(categoryID)

   // API call to retrieve activities
   useEffect(() => {
    fetch(`http://localhost:5000/useractivity/${categoryID}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookieValue,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [cookieValue]);

 console.log(act)

  return (
    <div className={`${styles["activities"]}`}>
      <h1>Activities</h1>
      <ActivityCard  />
      <a className={`${styles["new-card"]}`}>
        <CreateNewCard />
      </a>
      <Link to= "/editcategories">
        <StandardButton
          buttonText="Back to Categories"
          buttonStyle="small-green-border-button"
        />
      </Link>
    </div>
  );
};

export default EditActivities;
