import {Task, TaskAction, TaskList} from "../types/type";

const useTaskReducer = (state: TaskList, action: TaskAction): TaskList => {
    switch (action.type) {
        case "create":
            return {
                tasks: [...state.tasks, action.payload as Task]
            }
        case "update": {
            const updateTask = action.payload as Task
            const updateTasks = state.tasks.map(task => (
                task.id === updateTask.id ? updateTask : task
            ));

            return {
                tasks: updateTasks
            }
        }

        case "delete":
            const deleteTask = action.payload as Task
            const filteredTasks = state.tasks.filter(task => (
                task.id !== deleteTask.id
            ));
            return {
                tasks: filteredTasks
            }
        default:
            return state
    }
}
export default useTaskReducer