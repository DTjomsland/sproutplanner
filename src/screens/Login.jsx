import React from "react";
import styles from "./Login.module.scss";
import SproutLogo from "../components/Logo/SproutLogo";
import StandardButton from "../components/Common/StandardButton";
import LoginForm from "../components/Authentication/LoginForm";

const Login = () => {
  return (
    <div className={`${styles["screen"]}`}>
      <SproutLogo />
      <LoginForm buttonText="Login" buttonStyle="green-button" />
      <a href = "./signup"><StandardButton buttonText="Sign Up" buttonStyle="white-border-button" /></a>
    </div>
  );
};

export default Login;
