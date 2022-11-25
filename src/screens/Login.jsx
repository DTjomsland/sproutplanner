import React from "react";
import styles from "./Login.module.css";
import SproutLogo from "../components/Logo/SproutLogo";
import StandardButton from "../components/Common/StandardButton";
import AuthForm from "../components/Common/SignupForm";

const Login = () => {
  return (
    <div className={`${styles["screen"]}`}>
      <SproutLogo />
      <AuthForm buttonText="Login" buttonStyle="green-button" />
      <StandardButton buttonText="Sign Up" buttonStyle="white-border-button" />
    </div>
  );
};

export default Login;
