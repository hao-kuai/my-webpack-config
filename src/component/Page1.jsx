import React from "react";
import styles from "./Page1.css";

export default class Page1 extends React.Component {
  componentDidMount() {
    // console1.log("my-webpack-config");
  }
  render() {
    return (
      <div>
        <div className={styles.color}>my-webpack-config</div>
      </div>
    );
  }
}
