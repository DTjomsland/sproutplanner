import { useState, useEffect } from "react";
import styles from "./EditPlannerModal.module.scss";
import { useSelector } from "react-redux";
import EditPlannerModalCard from "../Common/EditPlannerModalCard";
import ActivityCard from "../Common/CreateActivityCard";

const PlannerModal = (props) => {
    const [act, setAct] = useState([]);
    const [isIcon, setIsIcon] = useState(false)
    const planner = useSelector((state) => state.planner);
    const [actList, setActList] = useState([])

    // Retrieve JWT from browser
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token"))
      .split("=")[1];
  
    // API call to retrieve activities
    useEffect(() => {
      fetch(`http://localhost:5000/useractivity/`, {
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

    console.log(planner)

    useEffect(() => {
    const activities = act
    .sort((a, b) => a.user_category_id - b.user_category_id)
    .filter((item) => item.user_category_id === planner.plannerCatID)
    setActList(activities)
  }, [cookieValue,planner.plannerCatID]);
  console.log(act)


  

  const currentList = actList.map((activity) => {
    return (
      <div onClick = {event => props.replaceCategory(event, activity)}>
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
      </div>
    );
  });

  return (
    <div className={`${styles[props.showModal ? "overlay" : "close-modal"]}`}>
      <div className={`${styles["modal-content"]}`}>
        <div onClick={props.toggleModal} className={`${styles["x"]}`}></div>
        {currentList}
      </div>
    </div>
  );
}

export default PlannerModal