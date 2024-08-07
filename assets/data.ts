import { Task, User } from "@/models"

export const initialTasks: Task[] = [
    { id: 1, text: "Crear la página de inicio", status: "in-progress" },
    { id: 2, text: "Diseñar la página de perfil", status: "completed" },
    {
        id: 3,
        text: "Implementar la funcionalidad de búsqueda",
        status: "not-started"
    },
    {
        id: 4,
        text: "Añadir soporte para múltiples idiomas",
        status: "in-progress"
    },
    { id: 5, text: "Crear la página de contacto", status: "completed" },
    { id: 6, text: "Diseñar la página de registro", status: "not-started" },
    {
        id: 7,
        text: "Implementar la funcionalidad de inicio de sesión",
        status: "in-progress"
    },
    { id: 8, text: "Añadir soporte para pagos en línea", status: "completed" },
    { id: 9, text: "Crear la página de ayuda", status: "not-started" },
    {
        id: 10,
        text: "Diseñar la página de configuración",
        status: "in-progress"
    }
]

export const initialUsers: User[] = [
    { id: 1, username: "joseperez", task_ids: [5] },
    { id: 2, username: "mariagarcia", task_ids: [2, 6] },
    { id: 3, username: "davidrodriguez", task_ids: [3, 9] },
    { id: 4, username: "lauramartinez", task_ids: [10, 8] },
    { id: 5, username: "carloslopez", task_ids: [1, 7] },
    { id: 6, username: "anaperez", task_ids: [4] }
]
