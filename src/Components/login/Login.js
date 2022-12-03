import React from "react";
import styles from "./sign.module.css";
import SignInDesc from "./SignInDesc";
import { SignData } from "./SignInData";
const Login = () => {
  return (
    <div className={styles.SignContainer}>
      <SignInDesc />
      <div className={styles.backgroundSign}>
        <img src={SignData[1].img}></img>
      </div>
    </div>
  );
};

export default Login;
