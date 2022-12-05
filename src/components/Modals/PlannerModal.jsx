import { useState, useEffect } from "react";
import styles from "./EditPlannerModal.module.scss";
import { useSelector } from "react-redux";
import EditPlannerModalCard from "../Common/EditPlannerModalCard";
import ActivityCard from "../Common/ActivityCard";

const PlannerModal = (props) => {
    const [act, setAct] = useState([]);
    const [isIcon, setIsIcon] = useState(false)
    const planner = useSelector((state) => state.planner);

    // Retrieve JWT from browser
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token"))
      .split("=")[1];
  
    // API call to retrieve activities
    useEffect(() => {
      fetch(`http://localhost:5000/useractivity/${planner.plannerCatID}`, {
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
    }, [cookieValue, planner.plannerCatID]);

    const activities = act
    .sort((a, b) => a.user_category_id - b.user_category_id)
    .map((activity) => {
      return (
        <ActivityCard
          key={activity.user_activity_id}
          // updateCat={updateCat}
          // deleteCat={deleteCat}
          itemID={activity.user_activity_id}
          title={activity.user_activity_name}
          activity={activity}
          setIsIcon={setIsIcon}
          isIcon={isIcon}
        />
      );
    });
  

  return (
    <div className={`${styles[props.showModal ? "overlay" : "close-modal"]}`}>
      <div className={`${styles["modal-content"]}`}>
        <div onClick={props.toggleModal} className={`${styles["x"]}`}></div>
        {activities}
      </div>
    </div>
  );
}

export default PlannerModal