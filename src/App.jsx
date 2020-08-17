import React from "react";
import styles from "./App.module.css";
import smallImage from "./image/small.png";
import bigImage from "./image/big.png";
export default class App extends React.Component {
  componentDidMount() {
    // console1.log("my-webpack-config");
  }
  render() {
    return (
      <div>
        <div className={styles.color}>my-webpack-config</div>
        <div className={`${styles.color} ${styles.myFirstFont}`}>
          my-webpack-config
        </div>
        <img src={smallImage} alt=""></img>
        <img src={bigImage} alt=""></img>
      </div>
    );
  }
}
