import React from "react";
import styles from "./Home.module.scss";
import SproutLogo from "../components/Logo/SproutLogo";
import StandardButton from "../components/Common/StandardButton";

const Home = () => {
  return (
    <div className={`${styles["screen"]}`}>
      <SproutLogo />
      <div className={`${styles["nav"]}`}>
        <a href="./">
          <StandardButton
            buttonText="Open Planner"
            buttonStyle="green-button"
          />
        </a>
        <StandardButton
          buttonText="Edit Schedule"
          buttonStyle="white-border-button"
        />
        <a href="./EditCategories">
          <StandardButton
            buttonText="My Categories"
            buttonStyle="white-border-button"
          />
        </a>
      </div>
      <div className={`${styles["log-out"]}`}>
        <StandardButton
          buttonText="Log Out"
          buttonStyle="green-border-button"
        />
      </div>
    </div>
  );
};

export default Home;
