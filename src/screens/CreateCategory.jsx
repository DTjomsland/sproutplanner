import React, { useState } from "react";
import styles from "./CreateCategory.module.css";
import StandardButton from "../components/Common/StandardButton";
import SingleForm from "../components/Common/SingleForm";

const CreateCategory = () => {
  const [catName, setCatName] = useState("");

  const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('token'))
  .split('=')[1];

  const handleChange = (event) => setCatName(event.target.value)
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/usercategory/create", {
        method: "POST",
        headers: { "Content-Type": "application/json",
        'Authorization': 'Bearer ' + cookieValue, },
        
        body: JSON.stringify({
          user_category_name: catName,
        }),
      });
      const data = await res.json();
      console.log(data);
      
    //   console.log(res);
      if (res.status === 200) {
        setCatName("");
        // setMessage(false);
      } else {
        // setMessage(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${styles["create-category"]}`}>
      <h1>Create Category</h1>
      <div className={`${styles["category-form"]}`}>
          <SingleForm handleChange = {handleChange} handleSubmit = {handleSubmit} title="Category Title:" />
      </div>
      <a href="./editcategories"><StandardButton
        buttonText="Back to Categories"
        buttonStyle="small-green-border-button"
      /></a>
    </div>
  );
};

export default CreateCategory;
