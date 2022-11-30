import React from "react";
import styles from "./Signup.module.scss";
import SproutLogo from "../components/Logo/SproutLogo";
import StandardButton from "../components/Common/StandardButton";
import AuthForm from "../components/Authentication/SignUpForm";

const Signup = () => {
  return (
    <div className={`${styles["screen"]}`}>
      <SproutLogo />
      <AuthForm buttonText="Create Account" buttonStyle="green-button" />
      <StandardButton buttonText="Login" buttonStyle="white-border-button" />
    </div>
  );
};

export default Signup;
