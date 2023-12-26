import {
    Button, Input, Text,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure, Select
} from "@chakra-ui/react";
import {priorityMap, statusMap} from "../../config/const";
import {ChangeEvent, useContext, useState} from "react";
import {Task} from "../../types/type";
import {generateUniqueID} from "../../libs/helper";
import {TaskContext} from "../../context/taskContext";
import useValidationChecker from "../../hooks/useValidationChecker";

const AddTask = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [newTask, setNewTask] = useState<Task>({
        deadline: "", id: 0, priority: "", start_dt: "", status: "", title: ""
    })
    const {errorMsg, inputDeadlineCheck, isNullEmptyCheck} = useValidationChecker()
    const [isValid, setIsValid] = useState(true)
    const context = useContext(TaskContext)

    const handleInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target
        setNewTask(prevState => (
            {...prevState, [name]: value, id: generateUniqueID()}))

        setIsValid(true)
    }

    const saveNewTask = () => {
        if (!inputDeadlineCheck(newTask.deadline, newTask.start_dt) || !isNullEmptyCheck(newTask)) {
            keepState()
            setIsValid(false)
            return;
        }
        context?.dispatch({
            type: "create",
            payload: newTask
        })
        initializer()
        setIsValid(true)
        onClose();
    }

    const initializer = () => {
        setNewTask({
            deadline: "", id: 0, priority: "", start_dt: "", status: "", title: ""
        })
    }
    const keepState = () => {
        setNewTask({
            deadline: newTask.deadline, id: newTask.id, priority: newTask.priority,
            start_dt: newTask.start_dt, status: newTask.status, title: newTask.title
        })
    }
    return (
        <>
            <Button onClick={onOpen}>Create task</Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Create Task</ModalHeader>
                    <ModalBody>
                        <div className="form">
                            <Text mb='6px'>Task name</Text>
                            <Input
                                onChange={handleInput}
                                name="title"
                                placeholder='Task name'
                                size='sm'
                            />
                            {!isValid && (
                                <Text fontSize='sm' color="red">{errorMsg.tittleError}</Text>
                            )}
                        </div>
                        <div className="form">
                            <Text mb='6px'>Priority</Text>
                            <Select name="priority" onChange={handleInput}>
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
                            <Select name="status" onChange={handleInput}>
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
                                placeholder='Here is a sample placeholder'
                                size='sm'
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
                                placeholder='Here is a sample placeholder'
                                size='sm'
                            />
                            {!isValid && (
                                <Text fontSize='sm' color="red">{errorMsg.deadlineError}</Text>
                            )}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            onClose()
                            setIsValid(true)
                        }}>
                            Close
                        </Button>
                        {isValid ? (
                            <Button colorScheme='red' onClick={saveNewTask}>Create</Button>
                        ) : (
                            <Button isDisabled={true} colorScheme='red' onClick={() => {
                                saveNewTask();
                            }}>Create</Button>
                        )}

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AddTask
