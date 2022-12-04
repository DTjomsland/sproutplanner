import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/editplanner">
        <StandardButton
          buttonText="Edit Planner"
          buttonStyle="white-border-button"
        />
        </Link>
        <Link to="/editcategories">
          <StandardButton
            buttonText="My Categories"
            buttonStyle="white-border-button"
          />
        </Link>
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
