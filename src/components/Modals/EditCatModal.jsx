import { useState, useEffect } from "react";
import styles from "./EditCatModal.module.scss";
import SingleForm from "../Common/SingleForm.jsx";

const EditCatModal = (props) => {
  const [catName, setCatName] = useState("");


  // Pulls JWT token form the browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];


  // Handles the changing of the category name
  const handleChange = (event) => setCatName(event.target.value);
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:5000/usercategory/${props.itemID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookieValue,
        },

        body: JSON.stringify({
          user_category_name: catName,
        }),
      });
      const data = await res.json();
      console.log(data);

      if (res.status === 201) {
        props.toggleModal()
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
    <div className={`${styles[props.showModal ? "overlay" : "close-modal"]}`}>
      <div className={`${styles["modal-content"]}`}>
        <SingleForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Update Category"
          title="Edit Category Name:"
          textColor="greenText"
        />
      </div>
    </div>
  );
};

export default EditCatModal;
