import { useTasks } from "@/hooks/useTasks"
import { useUsers } from "@/hooks/useUsers"
import React, { useState } from "react"
import styles from "./TasksTable.module.css"
import TaskStatusComponent from "./TaskStatusComponent"
import { Task } from "@/models"
import { IoCheckmarkCircleOutline } from "react-icons/io5"

const TasksTable = () => {
    const { tasks, addNewTask } = useTasks()
    const { users, assignTaskToUser } = useUsers()
    const [newTask, setNewTask] = useState<Task>({
        id: tasks.length + 1,
        text: "",
        status: "not-started"
    })
    const [selectedUserId, setSelectedUserId] = useState(1)

    const createNewTask = () => {
        addNewTask(newTask)
        assignTaskToUser(newTask.id, selectedUserId)
        setNewTask({ id: newTask.id + 1, text: "", status: "not-started" })
        setSelectedUserId(1)
    }
    return (
        <table id="tasks-table" className={styles.TasksTable}>
            <thead>
                <tr>
                    <th>Tarea</th>
                    <th>Responsable</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            value={newTask.text}
                            onChange={(e) =>
                                setNewTask({ ...newTask, text: e.target.value })
                            }
                        />
                    </td>
                    <td>
                        <select
                            value={selectedUserId}
                            id="user-select"
                            onChange={(e) =>
                                setSelectedUserId(Number(e.target.value))
                            }
                        >
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.username}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <button id="create-task-button" onClick={createNewTask}>
                            <IoCheckmarkCircleOutline />
                        </button>
                    </td>
                </tr>
                {tasks.map((task) => {
                    const user = users.find((user) =>
                        user.task_ids.includes(task.id)
                    )
                    return (
                        <tr key={task.id}>
                            <td className={styles.Text}>{task.text}</td>
                            <td>{user?.username}</td>
                            <td>
                                <TaskStatusComponent status={task.status} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TasksTable
