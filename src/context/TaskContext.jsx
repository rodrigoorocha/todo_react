import { createContext, useState } from "react";

export const TaskContext = createContext()

export function TaskProvider({children}){

    const [tasks, setTasks] = useState([{
        id: "9898989898",
        name: "lavar roupa",
        priority :"2"
    }])
    const [activeTask, setActiveTask] = useState();

    const createTask = (task) =>{
        setTasks(currentTasks => [...currentTasks, task]) 
    }

    const deleteTask = (taskId) =>{
        setTasks( currentTasks => currentTasks.filter( (t)=> t.id !== taskId))
    }

    const updateTask = (newTask) =>{
        setTasks( currentTasks => currentTasks.map( (currentTask)=> {
           if (currentTask.id == newTask.id) return newTask
            else return currentTask

        }))
    }

    return(

        <TaskContext.Provider value={{tasks,deleteTask, createTask, updateTask, activeTask, setActiveTask }}>
            {children}
        </TaskContext.Provider>
        )


}