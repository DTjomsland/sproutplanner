import { useState, useEffect } from "react";
import StandardButton from "../components/Common/StandardButton";
import styles from "./EditPlanner.module.scss";
import PlannerCard from "../components/Common/PlannerCard";
import PlannerModal from "../components/Modals/PlannerModal";
import { setPlannerCatID } from "../store/slices/plannerSlice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Planner = () => {
  const dispatch = useDispatch();
  const planner = useSelector((state) => state.planner);
  const [plannerModal, setPlannerModal] = useState(false);
  const [actCard, setActCard] = useState([]);
  const [actCatList, setActCatList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([]);

  const [noScroll, setNoScroll] = useState(false);

  useEffect(() => {
    const categories = planner.planner;
    setActCatList(categories);
  });

  const togglePlannerModal = () => {
    toggleNoScroll();
    setPlannerModal(!plannerModal);
  };

  const toggleNoScroll = () => {
    // let key = category.user_category_id
    // console.log(key)y
    setNoScroll(!noScroll);
  };

  const handleEvent = (event, catID, index) => {
    dispatch(setPlannerCatID(catID));
    setCurrentIndex(index);
    togglePlannerModal();
  };

  console.log(actCard);

  const replaceCategory = (event, actID) => {
    setActCard(actID);
    const newActCatList = actCatList.map((item, index) => {
      if(currentIndex === index)
      return actID;
      else {
        return item;
      }
    });
    return newActCatList
  };
  console.log(actCatList);

  const categories = planner.planner.map((category, index) => {
    return (
      <div
        onClick={(event) =>
          handleEvent(event, category.user_category_id, index)
        }
        className={`${styles["cat-item"]}`}
      >
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
        replaceCategory={replaceCategory}
      />
    </div>
  );
};

export default Planner;
