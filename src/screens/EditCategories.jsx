import { useState, useEffect } from "react";
import StandardButton from "../components/Common/StandardButton";
import CatCard from "../components/Common/CatCard";
import CreateNewCard from "../components/Common/CreateNewCard";
import EditCatModal from "../components/Modals/EditCatModal";
import styles from "./EditCategories.module.scss";

const EditCategories = () => {
  const [cat, setCat] = useState([]);
  // Retrieve JWT from browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

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

  const updateCat = (catID, newName) => {
    const newCat = cat.map((object) => {
      if (object.user_category_id  === catID) {
        return { ...object, user_category_name: `${newName}` };
      }
      return object;
    });

    setCat(newCat);
    console.log(newCat);
  };

  // Creation of category cards from API array
  const categories = cat
    .sort((a, b) => a.user_category_id - b.user_category_id)
    .map((category) => {
      return (
        <CatCard
          updateCat={updateCat}
          itemID={category.user_category_id}
          title={category.user_category_name}
        />
      );
    });

  return (
    <div className={`${styles["categories"]}`}>
      <h1>Categories</h1>
      {categories}
      <a href="./createcategory">
        <CreateNewCard />
      </a>
      <a href="./">
        <StandardButton
          buttonText="Back to Home"
          buttonStyle="small-green-border-button"
        />
      </a>
    </div>
  );
};

export default EditCategories;
