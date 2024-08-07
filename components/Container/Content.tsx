import React from "react"
import styles from "./Content.module.css"
import { useTasks } from "@/hooks/useTasks"
import TasksTable from "../TasksTable/TasksTable"

const Content = () => {
    const { tasks } = useTasks()
    return (
        <div className={styles.content}>
            <div className={styles.frame}>
                <div className={styles.div}>
                    <div className={styles["text-wrapper"]}>Last tasks</div>
                    <p className={styles["element-total-proceed-to"]}>
                        <span className={styles.span}>
                            {tasks.length} total
                        </span>
                        <span className={styles["text-wrapper-2"]}>, </span>
                        <span className={styles["text-wrapper-3"]}>
                            proceed to resolve them
                        </span>
                    </p>
                </div>
                <div className={styles["frame-2"]}>
                    <div className={styles["frame-3"]}>
                        <div className={styles["text-wrapper-4"]}>
                            {
                                tasks.filter(
                                    (task) => task.status === "completed"
                                ).length
                            }
                        </div>
                        <div className={styles["text-wrapper-5"]}>Done</div>
                    </div>
                    <div className={styles["frame-3"]}>
                        <div className={styles["text-wrapper-4"]}>
                            {
                                tasks.filter(
                                    (task) => task.status !== "completed"
                                ).length
                            }
                        </div>
                        <div className={styles["text-wrapper-5"]}>
                            In progress
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["frame-wrapper"]}>
                <TasksTable />
            </div>
        </div>
    )
}

export default Content
