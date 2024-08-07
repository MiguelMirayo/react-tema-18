import { TaskStatus } from "@/models"
import styles from "./TaskStatusComponent.module.css"
import React from "react"

const TaskStatusComponent = ({ status }: { status: TaskStatus }) => {
    return (
        <div className={`${styles.StatusChip} ${styles[status]}`}>{status}</div>
    )
}

export default TaskStatusComponent
