import React from "react";
import styles from "./Container.module.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Container = () => {
  return (
    <div className={styles.Container}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Container;
