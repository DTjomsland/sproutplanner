import React from "react";
import styles from "./ImageForm.module.scss";
import StandardButton from "../Common/StandardButton";
const ImageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleImageSubmit} name='file'>
        <div className={`${styles["single-form"]}`}>
          <label htmlFor="uname" className={`${styles[props.textColor]}`}>
            <b>Activity Image:</b>
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className={`${styles["upload"]}`}
            accept="image/png, image/gif, image/jpeg"
          />
          <StandardButton
            buttonType="submit"
            buttonText="Submit"
            buttonStyle="green-button"
          />
        </div>
      </form>
      <StandardButton
        buttonType="button"
        buttonText="No Image"
        buttonStyle="small-red-button"
        onClick={props.onClick}
      />
    </div>
  );
};

export default ImageForm;
