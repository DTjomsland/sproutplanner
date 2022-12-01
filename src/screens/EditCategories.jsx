import { useState, useEffect } from "react";
import StandardButton from "../components/Common/StandardButton";
import CatCard from "../components/Common/CatCard";
import CreateNewCard from "../components/Common/CreateNewCard";
import CreateCatModal from "../components/Modals/CreateCatModal";
import styles from "./EditCategories.module.scss";

const EditCategories = () => {
  const [cat, setCat] = useState([]);
  const [createModal, setCreateModal] = useState(false);

  // Retrieve JWT from browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

  const toggleCreateModal = () => {
    // let key = category.user_category_id
    // console.log(key)
    setCreateModal(!createModal);
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

  //Handles State for Creating Cat
  const createCat = (data) => {
    let newCat = [...cat, data]
    setCat(newCat);
  }

  //Handles State for Updating Cat
  const updateCat = (catID, newName) => {
    let newCat = cat.map((object) => {
      if (object.user_category_id === catID) {
        return { ...object, user_category_name: `${newName}` };
      }
      return object;
    });

    setCat(newCat);
    console.log(newCat);
  };



  //Handles State for Deleting Cat
  const deleteCat = (catID) => {
    const newCat = cat.filter((object) => object.user_category_id !== catID);
    setCat(newCat);
  };

  // Creation of category cards from API array
  const categories = cat
    .sort((a, b) => a.user_category_id - b.user_category_id)
    .map((category) => {
      return (
        <CatCard
          key={category.user_category_id}
          updateCat={updateCat}
          deleteCat={deleteCat}
          itemID={category.user_category_id}
          title={category.user_category_name}
        />
      );
    });

  return (
    <div className={`${styles["categories"]}`}>
      <h1>Categories</h1>
      {categories}
      <a onClick={toggleCreateModal} className={`${styles["new-card"]}`}>
        <CreateNewCard />
      </a>
      <a href="./">
        <StandardButton
          buttonText="Back to Home"
          buttonStyle="small-green-border-button"
        />
      </a>
      <CreateCatModal toggleModal={toggleCreateModal} showModal={createModal} createCat={createCat}/>
    </div>
  );
};

export default EditCategories;
