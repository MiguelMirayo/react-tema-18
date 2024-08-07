import { AppContext } from "@/contexts/AppContextProvider"
import { Task } from "@/models"
import { useContext } from "react"
import { toast } from "sonner"

export const useTasks = () => {
    const { tasks, setTasks } = useContext(AppContext)

    const addNewTask = (newTask: Task) => {
        setTasks([...tasks, newTask])
        toast.success("Tarea añadida con éxito")
    }

    return { tasks, setTasks, addNewTask }
}
