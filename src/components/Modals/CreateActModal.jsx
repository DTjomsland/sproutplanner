import { useState, useEffect } from "react";
import styles from "./Modals.module.scss";
import UploadForm from "../Forms/UploadForm.jsx";

const CreateActModal = (props) => {
  const [actName, setActName] = useState("");
  const [formDisplay, setFormDisplay] = useState(false);
  const [activity, setActivity] = useState();
  

  const toggleForm = () => {
    setFormDisplay(!formDisplay);
  };

  const toggleAll = () => {
    setFormDisplay(false);
    props.toggleCreateModal();
  };
  // Pulls JWT token form the browser
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

  const handleChange = (event) => setActName(event.target.value);

 

  let handleNameSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `http://localhost:5000/useractivity/${props.categoryID}/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookieValue,
          },

          body: JSON.stringify({
            user_activity_name: actName,
          }),
        }
      );
      const data = await res.json();
      setActivity(data);
      //   console.log(res);
      if (res.status === 200) {
        props.createAct(data);
        toggleForm();
        // props.toggleModal();
        setActName("");
        // setMessage(false);
      } else {
        // setMessage(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  let handleImageSubmit = async (event) => {
      setFormDisplay(false);
      event.preventDefault();
    fetch(`http://localhost:5000/usericon/${activity.user_activity_id}/upload`, {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + cookieValue,
        },
        body: new FormData(event.target) // event.target is the form
  
    }).then((resp) => {
        return resp.json();
        //console.log(resp.json());
  
    }).then((body) => {
        // TODO handle body
        // console.log(body);
        if(body.status) {
            alert(body.message);
        }
        else {
            
        }
    }).catch((error) => {
        // TODO handle error
        //
    });
    };
  

  return (
    <div className={`${styles[props.showModal ? "overlay" : "close-modal"]}`}>
      <div className={`${styles["modal-content"]}`}>
        <div onClick={toggleAll} className={`${styles["x"]}`}></div>
        <UploadForm
          onClick={toggleAll}
          handleChange={handleChange}
          handleNameSubmit={handleNameSubmit}
          handleImageSubmit={handleImageSubmit}
          buttonText="Create Activity"
          title="Activity Title:"
          actName={actName}
          textColor="greenText"
          formDisplay={formDisplay}
        />
      </div>
    </div>
  );
};

export default CreateActModal;
