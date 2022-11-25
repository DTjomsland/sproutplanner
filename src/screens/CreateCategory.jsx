import React from "react";
import styles from "./CreateCategory.module.css";
import StandardButton from "../components/Common/StandardButton";
import SingleForm from "../components/Common/SingleForm";

const CreateCategory = () => {
  return (
    <div className={`${styles["create-category"]}`}>
      <h1>Create Category</h1>
      <div className={`${styles["category-form"]}`}>
        <form action="">
          <SingleForm title="Category Title:" />
          <StandardButton buttonText="Create" buttonStyle="green-button" />
        </form>
      </div>
      <a href="./editcategories"><StandardButton
        buttonText="Back to Categories"
        buttonStyle="small-green-border-button"
      /></a>
    </div>
  );
};

export default CreateCategory;
