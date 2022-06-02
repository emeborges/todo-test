import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'
import { tasksProps } from './utils/types'

interface TasksProviderProps {
    children: ReactNode
}

interface TaskContextProps {
    tasks: tasksProps[] | undefined
    createTask: (task: tasksProps) => Promise<void>
    deleteTask: (taskId: number) => Promise<void>
}

export const TasksContext = createContext<TaskContextProps>(
    {} as TaskContextProps
)

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<tasksProps[]>()

    useEffect(() => {
        api.get('tasks').then((resp) => setTasks(resp.data.tasks))
    }, [])

    async function createTask(taskInput: tasksProps) {
        const tamanho = Math.floor(Math.random() * 100)
        const response = await api.post('/add/task', {
            id: +tamanho,
            ...taskInput,
        })
        const { task } = response.data

        setTasks([...tasks, task])
    }

    async function deleteTask(taskId: number) {
        const response = await api.delete(`tasks/${taskId}`)
        setTasks(response.data.tasks)

        return response
    }

    return (
        <TasksContext.Provider value={{ tasks, createTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}
