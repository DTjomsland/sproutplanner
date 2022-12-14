import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import StandardButton from "../Common/StandardButton";

const SignupForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState(false);
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user_name: name,
          user_email: email,
          user_password: password,
        }),
      });
      const data = await res.json()
      console.log(data);
      console.log(res)
      if (res.status === 200) {
        setName("");
        setEmail("");
        setPassword("")
        // setMessage(false);
      } else {
        // setMessage(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <form onSubmit={handleSubmit} className={`${styles["auth-form"]}`}>
        <label htmlFor="uname">
          <b>Username:</b>
        </label>
        <input
          className={`${styles["input"]}`}
          type="text"
          name="uname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <label htmlFor="uname">
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
        {/* <p className= {!message && styles.error}>Email is already in use</p> */}
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

export default SignupForm;
