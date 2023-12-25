import {createContext, Dispatch, useReducer} from "react";
import useTaskReducer from "../reducers/useTaskReducer";
import {initialState, TaskAction, TaskList} from "../types/type";

interface Props {
    children: React.ReactNode
}
const TaskContext = createContext<{state: TaskList; dispatch:  Dispatch<TaskAction> } | undefined>(undefined)

const TaskProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(useTaskReducer, initialState)
    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}
export {TaskContext, TaskProvider}