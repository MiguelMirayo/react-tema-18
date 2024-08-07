import React from "react";
import styles from "./Container.module.css";
import { IoSearch } from "react-icons/io5"

const Header = () => {
  return <div className={styles.Header}>
    <div className={styles.SearchBar}>
        <span>Search</span>
        <IoSearch className={styles.SearchIcon}/>
    </div>
    <div className={styles.CardToggle}>
        <span className={`${styles.Card} ${styles.ActiveCard}`}>Card</span>
        <span className={styles.Card}>List</span>
    </div>
  </div>;
};

export default Header;
