import { useState, useEffect } from "react";
import StandardButton from "../components/Common/StandardButton";
import styles from "./EditPlanner.module.scss";
import PlannerCard from "../components/Common/PlannerCard";
import PlannerModal from "../components/Modals/PlannerModal";
import {setPlannerCatID} from "../store/slices/plannerSlice"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Planner = () => {
  const dispatch = useDispatch();
  const planner = useSelector((state) => state.planner);
  const [plannerModal, setPlannerModal] = useState(false);
  const [noScroll, setNoScroll] = useState(false);



 
  
  const togglePlannerModal = () => {
    dispatch(setPlannerCatID(null))
    toggleNoScroll();
    setPlannerModal(!plannerModal);
  };

  const toggleNoScroll = () => {
    // let key = category.user_category_id
    // console.log(key)y
    setNoScroll(!noScroll);
  };

  const handleEvent = (event, catID) =>{
    dispatch(setPlannerCatID(catID))
    togglePlannerModal()
  }

  const categories = planner.planner.map((category, index) => {
    return (
      <div onClick = {event => handleEvent(event, category.user_category_id)} className={`${styles["cat-item"]}`}>
        <PlannerCard
          key={index}
          itemID={category.user_category_id}
          title={category.user_category_name}
          category={category}
        />
      </div>
    );
  });
  return (
    <div className={`${styles["categories"]}`}>
      <h1>Sprout Planner</h1>
      {categories}
      <PlannerModal
        toggleModal={togglePlannerModal}
        showModal={plannerModal}
      />
    </div>
  );
};

export default Planner;
