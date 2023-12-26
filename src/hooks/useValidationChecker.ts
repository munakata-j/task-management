import {useState} from "react";
import {Task} from "../types/type";

const useValidationChecker = () => {
    const [errorMsg, setErrorMsg] = useState({
        tittleError: "",priorityError: "", statusError: "",
        deadlineError:"", otherError: "", startDayError: ""
    })
    let valid = true
    function isNUllEmptyHelper (value: any) {
        return value === null || value === "";
    }
    function isNullEmptyCheck (task: Task){
        if(isNUllEmptyHelper(task)){
            setErrorMsg(prevState =>(
                {...prevState, otherError: "valid"}))
            valid = false
        }
        if(isNUllEmptyHelper(task.title)){
            setErrorMsg(prevState => (
                {...prevState, tittleError: "Title is required"}))
            valid = false
        }
        if(isNUllEmptyHelper(task.priority)){
            setErrorMsg(prevState => (
                {...prevState, priorityError: "Priority is required"}))
            valid = false
        }
        if(isNUllEmptyHelper(task.status)){
            setErrorMsg(prevState => (
                {...prevState, statusError: "Status is required"}))
            valid = false
        }
        if(isNUllEmptyHelper(task.deadline)){
            setErrorMsg(prevState => (
                {...prevState, deadlineError: "Deadline is required"}))
            valid = false
        }
        if(isNUllEmptyHelper(task.start_dt)){
            setErrorMsg(prevState => (
                {...prevState, startDayError: "start day is required"}
            ))
            valid = false
        }
        return valid
    }

    function inputDeadlineCheck(deadline: string, start_dt: string){
        const parseDate = new Date(deadline)
        const startDay = new Date(start_dt)
        if(parseDate < startDay){
            setErrorMsg(prevState => (
                {...prevState, deadlineError: "Deadline must be "}))
            valid = false
        }
        return valid
    }

    return {valid, errorMsg, inputDeadlineCheck, isNullEmptyCheck}
}
export default useValidationChecker