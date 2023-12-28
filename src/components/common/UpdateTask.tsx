import {
    Button, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select, Text,
    useDisclosure
} from "@chakra-ui/react";
import {ChangeEvent, useContext, useState} from "react";
import {Task} from "../../types/type";
import {TaskContext} from "../../context/taskContext";
import {priorityMap, statusMap} from "../../config/const";
import {EditIcon} from "@chakra-ui/icons";
import useValidationChecker from "../../hooks/useValidationChecker";

interface Props {
    task: Task
}

const UpdateTask = ({task}: Props) => {
    const context = useContext(TaskContext)
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [updateTask, setUpdateTask] = useState<Task>({
        deadline: task.deadline, id: task.id, priority:
        task.priority, start_dt: task.start_dt, status: task.status, title: task.title
    })
    const {errorMsg, inputDeadlineCheck, isNullEmptyCheck} = useValidationChecker()
    const [isValid, setIsValid] = useState(true)

    const handleInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target
        setUpdateTask(prevState => ({...prevState, [name]: value}))
        setIsValid(true)
    }
    const saveUpdateTask = () => {
        if(!isNullEmptyCheck(updateTask) ||
            !inputDeadlineCheck(updateTask.deadline, updateTask.start_dt)){
            setIsValid(false)
            keepState()
            return;
        }
        context?.dispatch({
            type: "update",
            payload: updateTask
        })
        initializer()
        setIsValid(true)
        onClose();
    }

    const initializer = () => {
        setUpdateTask({
            deadline: "", id: 0, priority: "",
            start_dt: "", status: "", title: ""
        })
    }
    const keepState = () => {
        setUpdateTask({
            deadline: updateTask.deadline, id: updateTask.id, priority: updateTask.priority,
            start_dt: updateTask.start_dt, status: updateTask.status, title: updateTask.title
        })
    }

    return (
        <>
            <EditIcon　data-testid="edit-icon" style={{cursor: "pointer"}} onClick={onOpen} w={6} h={6} color='green.500'/>
            <Modal　closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Update Task</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <div className="form">
                            <Text mb='6px'>Task name</Text>
                            <Input
                                onChange={handleInput}
                                name="title"
                                placeholder='Task name'
                                size='sm'
                                defaultValue={task.title}
                            />
                            {!isValid && (
                                <Text fontSize='sm' color="red">{errorMsg.tittleError}</Text>
                            )}
                        </div>
                        <div className="form">
                            <Text mb='6px'>Priority</Text>
                            <Select name="priority" onChange={handleInput} defaultValue={task.priority}>
                                {priorityMap.map(priority => (
                                    <option key={priority.name} value={priority.name}>{priority.name}</option>
                                ))}
                            </Select>
                            {!isValid && (
                                <Text fontSize='sm' color="red">{errorMsg.priorityError}</Text>
                            )}
                        </div>
                        <div className="form">
                            <Text mb='6px'>Status</Text>
                            <Select name="status" onChange={handleInput} defaultValue={task.status}>
                                {statusMap.map(status => (
                                    <option key={status.name} value={status.name}>{status.name}</option>
                                ))}
                            </Select>
                            {!isValid && (
                                <Text fontSize='sm' color="red">{errorMsg.statusError}</Text>
                            )}
                        </div>
                        <div className="form">
                            <Text mb='6px'>Start day</Text>
                            <Input
                                onChange={handleInput}
                                name="start_dt"
                                type="date"
                                placeholder='Start day'
                                size='sm'
                                defaultValue={task.start_dt}
                            />
                            {!isValid && (
                                <Text fontSize='sm' color="red">{errorMsg.startDayError}</Text>
                            )}
                        </div>
                        <div className="form">
                            <Text mb='6px'>Deadline</Text>
                            <Input
                                onChange={handleInput}
                                name="deadline"
                                type="date"
                                placeholder='Deadline'
                                size='sm'
                                defaultValue={task.deadline}
                            />
                            {!isValid && (
                                <Text fontSize='sm' color="red">{errorMsg.deadlineError}</Text>
                            )}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {isValid ? (
                            <Button colorScheme='red' onClick={() => {
                                saveUpdateTask();
                            }}>Update</Button>
                        ):(
                            <Button isDisabled={true} colorScheme='red' onClick={() => {
                                saveUpdateTask();
                            }}>Update</Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default UpdateTask
