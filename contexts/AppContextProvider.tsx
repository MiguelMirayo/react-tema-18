import { initialTasks, initialUsers } from "@/assets/data"
import type { Task, User } from "@/models"
import { AppContextType } from "@/models/contexts"
import React, { createContext, useState } from "react"

export const AppContext = createContext<AppContextType>(null!)

const AppContextProvider = ({ children }: React.PropsWithChildren) => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)
    const [users, setUsers] = useState<User[]>(initialUsers)
    return (
        <AppContext.Provider value={{ tasks, setTasks, users, setUsers }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
