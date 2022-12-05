import { useState, useEffect } from "react";
import StandardButton from "../components/Common/StandardButton";
import CreateNewCard from "../components/Common/CreateNewCard";
import styles from "./EditPlanner.module.scss";
import EditPlannerModal from "../components/Modals/EditPlannerModal";
import EditPlannerCard from "../components/Common/EditPlannerCard";
import {setSelectedPlanner} from "../store/slices/plannerSlice"
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

const EditPlanner = () => {
  const dispatch = useDispatch();
  const planner = useSelector((state) => state.planner);
  const [cat, setCat] = useState([]);
  const [catList, setCatList] = useState(planner.planner);
  const [plannerModal, setPlannerModal] = useState(false);
  const [noScroll, setNoScroll] = useState(false);

  console.log(planner)

  console.log(planner);
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

    const handleSave = () => {
      dispatch(setSelectedPlanner(catList))
    }
    const handleReset = () => {
      setCatList([]);
    }

  const togglePlannerModal = () => {
    // let key = category.user_category_id
    // console.log(key)
    toggleNoScroll();
    setPlannerModal(!plannerModal);
  };

  const toggleNoScroll = () => {
    // let key = category.user_category_id
    // console.log(key)y
    setNoScroll(!noScroll);
  };

  // API call to retrieve categories
  useEffect(() => {
    fetch("http://localhost:5000/usercategory/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookieValue,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [cookieValue]);

  //Handles State for Deleting Category from Planner
  const handleEvent = (event, key) => {
    

    const deleteCat = (key) => {

      const newList = catList.filter((_, index) => index !== key);
    setCatList(newList);
    }
    deleteCat(key)
  };



  const categories = catList.slice()
    .sort((a, b) => a.index - b.index)
    .map((category, index) => {
      return (
        <div  className={`${styles["cat-item"]}`}>
          <EditPlannerCard
            key={index}
            itemID={category.user_category_id}
            title={category.user_category_name}
            category={category}
          />
          <button
        type="button"
        onClick={event => handleEvent(event, index)}
        className={`${styles["edit-button"]}`}
      ></button>
      </div>
      );
    });
  

  return (
    <div className={`${styles["categories"]}`}>
      <h1>Edit Planner</h1>
      {categories}
      <a onClick={togglePlannerModal} className={`${styles["new-card"]}`}>
        <CreateNewCard />
      </a>
      <StandardButton
          buttonText="Save Planner Schedule"
          buttonStyle="green-button"
          onClick={handleSave}
        />
      <StandardButton
          buttonText="Clear Planner Schedule"
          buttonStyle="white-border-button"
          onClick={handleReset}
        />
      <Link to="/">
        <StandardButton
          buttonText="Back to Home"
          buttonStyle="small-green-border-button"
        />
      </Link>
      <EditPlannerModal
        cat={cat}
        toggleModal={togglePlannerModal}
        setCatList={setCatList}
        showModal={plannerModal}
      />
    </div>
  );
};
export default EditPlanner;
