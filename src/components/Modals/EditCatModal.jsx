import { useState } from "react";
import styles from "./EditCatModal.module.scss";
import SingleForm from "../Common/SingleForm.jsx";
import StandardButton from "../Common/StandardButton.jsx";

const EditCatModal = (props) => {
  const [catName, setCatName] = useState("");

  // Pulls JWT token form the browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

  // Handles the changing of the category name
  const handleChange = (event) => setCatName(event.target.value);

  // Handles update of cat item
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `http://localhost:5000/usercategory/${props.itemID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookieValue,
          },

          body: JSON.stringify({
            user_category_name: catName,
          }),
        }
      );
      const data = await res.json();
      const catID = data.user_category_id;
      const newName = data.user_category_name;
      props.updateCat(catID, newName);
      console.log(props.itemID);

      if (res.status === 201) {
        props.toggleModal();
        setCatName("");
        // setMessage(false);
      } else {
        // setMessage(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //handles deletion ofC
  let handleDelete = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `http://localhost:5000/usercategory/${props.itemID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookieValue,
          },
          body: JSON.stringify({
            user_category_name: catName,
          }),
        }
      );
      const data = await res.json();
      const catID = props.itemID;
      props.deleteCat(catID);


      if (res.status === 201) {
        props.toggleModal();
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
        <StandardButton
          buttonType="button "
          buttonText="Delete"
          buttonStyle="small-red-button"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default EditCatModal;
