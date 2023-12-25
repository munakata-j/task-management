import {Task} from "../types/type";

export const initialTasks = [
    {
        id: 1,
        title: "task1",
        priority: "High",
        status: "Undo",
        start_dt: "2023/12/12",
        deadline: "2023/12/31"
    },
    {
        id: 2,
        title: "task2",
        priority: "Middle",
        status: "Progress",
        start_dt: "2023/12/12",
        deadline: "2023/12/31"
    },
    {
        id: 3,
        title: "task3",
        priority: "Low",
        status: "Review",
        start_dt: "2023/12/12",
        deadline: "2023/12/31"
    },
    {
        id: 4,
        title: "task4",
        priority: "Low",
        status: "Done",
        start_dt: "2023/12/12",
        deadline: "2023/12/31"
    },
]

export const priorityMap = [
    {name: ""},
    {name: "High"},
    {name: "Middle"},
    {name: "Low"}
]

export const statusMap = [
    {name: ""},
    {
        name: "Undo",
    },
    {name: "Progress"},
    {name: "Review"},
    {name: "Done"}
]
