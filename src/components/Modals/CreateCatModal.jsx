import { useState, useEffect } from "react";
import styles from "./Modals.module.scss";
import SingleForm from "../Forms/SingleForm.jsx";

const CreateCatModal = (props) => {
  const [catName, setCatName] = useState("");

  // Pulls JWT token form the browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

  const handleChange = (event) => setCatName(event.target.value);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/usercategory/create", {
        method: "POST",
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
      props.createCat(data)
      //   console.log(res);
      if (res.status === 200) {
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
      <div onClick = {props.toggleModal} className={`${styles["x"]}`}></div>
        <SingleForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Create Category"
          title="Category Title:"
          catName={catName}
          textColor="greenText"
        />
      </div>
    </div>
  );
};

export default CreateCatModal;
