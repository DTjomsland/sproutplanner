import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StandardButton from "../components/Common/StandardButton";
import ActivityCard from "../components/Common/ActivityCard";
import CreateNewCard from "../components/Common/CreateNewCard";
import styles from "./EditActivities.module.scss";
import { Link } from "react-router-dom";
import CreateActModal from "../components/Modals/CreateActModal";
import DeleteActModal from "../components/Modals/DeleteActModal";

const EditActivities = () => {
  const [act, setAct] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isIcon, setIsIcon] = useState(false)
  const category = useSelector((state) => state.category.category);

  // Retrieve JWT from browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

  // API call to retrieve activities
  useEffect(() => {
    fetch(`http://localhost:5000/useractivity/${category.user_category_id}`, {
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

  // Modal handlers
  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  

  //Handles State for Creating act
  const createAct = (data) => {
    let newAct = [...act, data];
    setAct(newAct);
  };

  //Handles State for Deleting Act
  const deleteAct = (actID) => {
    const newAct = act.filter((object) => object.user_activity_id !== actID);
    setAct(newAct);
  };

  const activities = act
    .sort((a, b) => a.user_category_id - b.user_category_id)
    .map((activity) => {
      return (
        <ActivityCard
          key={activity.user_activity_id}
          // updateCat={updateCat}
          // deleteCat={deleteCat}
          toggleDeleteModal={toggleDeleteModal}
          itemID={activity.user_activity_id}
          title={activity.user_activity_name}
          activity={activity}
          setIsIcon={setIsIcon}
          isIcon={isIcon}
        />
      );
    });

  return (
    <div className={`${styles["activities"]}`}>
      <h1>Activities</h1>
      {activities}
      <a className={`${styles["new-card"]}`} onClick={toggleCreateModal}>
        <CreateNewCard />
      </a>
      <Link to="/editcategories">
        <StandardButton
          buttonText="Back to Categories"
          buttonStyle="small-green-border-button"
        />
      </Link>
      <CreateActModal
        createAct={createAct}
        showModal={createModal}
        toggleCreateModal={toggleCreateModal}
        categoryID={category.user_category_id}
        setIsIcon={setIsIcon}
      />
      <DeleteActModal
        deleteAct={deleteAct}
        showModal={deleteModal}
        toggleDeleteModal={toggleDeleteModal}
        categoryID={category.user_category_id}
      />
    </div>
  );
};

export default EditActivities;
