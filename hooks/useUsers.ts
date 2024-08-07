import { useContext } from "react"
import { AppContext } from "@/contexts/AppContextProvider"

export const useUsers = () => {
    const { users, setUsers } = useContext(AppContext)

    const assignTaskToUser = (taskId: number, userId: number) => {
        const user = users.find((user) => user.id === userId)
        if (!user) return

        user.task_ids.push(taskId)
        setUsers([...users])
    }

    return { users, setUsers, assignTaskToUser }
}
