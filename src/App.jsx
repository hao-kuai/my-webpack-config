import React from "react";
import styles from "./App.module.css";
import smallImage from "./image/small.png";
import bigImage from "./image/big.png";
import Page1 from "./component/Page1.jsx";
export default class App extends React.Component {
  componentDidMount() {
    // console1.log("my-webpack-config");
  }
  render() {
    return (
      <div>
        <div className={styles.color}>my-webpack-config</div>
        <div className={`${styles.color} ${styles.font}`}>
          my-webpack-config
        </div>
        <Page1 />
        <img src={smallImage} alt=""></img>
        <img src={bigImage} alt=""></img>
      </div>
    );
  }
}
