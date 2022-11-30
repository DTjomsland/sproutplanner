import React from "react";
import SproutLogo from "../components/Logo/SproutLogo";
import StandardButton from "../components/Common/StandardButton";
import styles from "./Authentication.module.scss";

const authentication = () => {
  
  return (
    <div className={`${styles["screen"]}`}>
      <SproutLogo />
      <div className={styles.buttons}>
        <StandardButton buttonText="Login" buttonStyle="green-button" />
        <StandardButton buttonText="Sign Up" buttonStyle="green-border-button" />
      </div>
    </div>
  );
};

export default authentication;
