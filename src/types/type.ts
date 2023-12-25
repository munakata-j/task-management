
export interface Task  {
    id: number,
    title: string,
    priority: string,
    status: string,
    start_dt: string,
    deadline: string
}
export interface TaskList {
    tasks: Task[]
}

export interface undoList {
    tasks: Task[]
}

export interface progressList {
    tasks: Task[]
}
export interface reviewList {
    tasks: Task[]
}

export interface doneList {
    task: []
}
export interface TaskAction {
    type: string,
    payload?: any
}
export const initialState: TaskList  ={
    tasks: []
}

