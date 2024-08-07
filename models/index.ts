export type TaskStatus = 'not-started' | 'in-progress' | 'completed'

export interface Task {
    id: number
    text: string
    status: TaskStatus
}

export interface User {
    id: number
    username: string
    task_ids: number[]
}