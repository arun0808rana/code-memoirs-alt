import React from "react";
import styles from "./home.module.css";
import Login from "./login/Login";

function Home() {
  return (
    <div>
      Home
      <Login />
      {/* <div className={styles.brut + " damn"}>Brutalism box</div>
      <button className={styles["brutal-btn"]}>Brutalist Button in CSS</button> */}
    </div>
  );
}

export default Home;
