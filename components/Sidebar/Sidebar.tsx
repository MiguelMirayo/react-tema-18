import React from "react"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.Title}>Title</div>
            <div className={styles.Routes}>Routes</div>
            <div className={styles.LogOut}>LogOut</div>
        </div>
    )
}

export default Sidebar
