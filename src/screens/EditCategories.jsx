import React from "react";
import StandardButton from "../components/Common/StandardButton";
import CatCard from "../components/Common/CatCard";
import CreateNewCard from "../components/Common/CreateNewCard";
import styles from "./EditCategories.module.css";

const EditCategories = () => {
  return (
    <div className={`${styles["categories"]}`}>
      <h1>Categories</h1>
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <a href="./createcategory"><CreateNewCard /></a>
      <a href='./'><StandardButton
        buttonText="Back to Home"
        buttonStyle="small-green-border-button"
      /></a>
    </div>
  );
};

export default EditCategories;
