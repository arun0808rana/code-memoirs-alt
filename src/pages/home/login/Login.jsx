import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.loginContainer + ' brut'}>
        <div className={styles.heading}>Login / Sign Up</div>
      <div className={styles.control}>
        <label htmlFor="">Username</label>
        <input type="text" className={"brut " + styles.username} />
      </div>
      <div className={styles.control}>
        <label htmlFor="">Password</label>
        <input type="text" className={"brut " + styles.password} />
      </div>
      <div className={styles['btn-controls']}>
        <button className="brut btn">Login</button>
        <button className="brut btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
