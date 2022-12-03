import React, { useState } from "react";
import styles from "./SingleForm.module.scss";
import StandardButton from "../Common/StandardButton";
import SingleForm from "./SingleForm";
import ImageForm from "./ImageForm";

const UploadForm = (props) => {
  if (props.formDisplay == false) {
    return (
      <SingleForm
        handleChange={props.handleChange}
        handleSubmit={props.handleNameSubmit}
        buttonText="Create Activity"
        title="Activity Title:"
        actName={props.actName}
        textColor="greenText"
        errorText={props.errorText}
      />
    );
  } else if (props.formDisplay == true) {
    return (
      <ImageForm
        handleImageSubmit={props.handleImageSubmit}
        buttonText="Create Activity"
        title="Activity Title:"
        actName={props.actName}
        textColor="greenText"
        onClick={props.onClick}
      />
    );
  }
};

export default UploadForm;
