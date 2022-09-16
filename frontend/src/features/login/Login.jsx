import React, { useState } from "react";
import { useLoginMutation, useSignupMutation } from "../api/apiSlice";
import styles from "./Login.module.css";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [ login ] = useLoginMutation();
  const [ signup ] = useSignupMutation();

  const handleLogin = () => {
    login(credentials);
  };

  const handleSignup = () => {
    signup(credentials);
  };

  return (
    <div className={styles.loginContainer + " brut"}>
      <div className={styles.heading}>Login / Sign Up</div>
      <div className={styles.control}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          className={"brut " + styles.email}
          onChange={(e) =>
            setCredentials((prevCred) => ({
              ...prevCred,
              email: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="">Password</label>
        <input
          type="text"
          className={"brut " + styles.password}
          onChange={(e) =>
            setCredentials((prevCred) => ({
              ...prevCred,
              password: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles["btn-controls"]}>
        <button className="brut btn" onClick={handleLogin}>
          Login
        </button>
        <button className="brut btn" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
