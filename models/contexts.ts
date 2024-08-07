import { Task, User } from "."

export interface AppContextType {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    users: User[]
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}
