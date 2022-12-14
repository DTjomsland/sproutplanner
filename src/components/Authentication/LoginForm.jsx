import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import StandardButton from "../Common/StandardButton";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const [message, setMessage] = useState(false);

//saves JWT credentials

const saveCookie = (data) => {
        let response = data
        document.cookie = "token=" + response.token
        console.log(response, document.cookie);
}


// Sends post request with email and password. Handles incoming errors.
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_email: email,
          user_password: password,
        }),
      });
      const data = await res.json();
      console.log(data);
      saveCookie(data);
      
    //   console.log(res);
      if (res.status === 200) {
        setEmail("");
        setPassword("");
        navigate("/")
      } else {
        // setMessage(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles["auth-form"]}`}>
      <label htmlFor="Email">
        <b>Email:</b>
      </label>
      <input
        className={`${styles["input"]}`}
        type="text"
        value={email}
        name="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <label htmlFor="psw">
        <b>Password:</b>
      </label>
      <input
        className={`${styles["input"]}`}
        type="password"
        value={password}
        name="psw"
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>
      <StandardButton
        buttonType="submit"
        buttonText={props.buttonText}
        buttonStyle="green-button"
      />
    </form>
  );
};

export default LoginForm;
