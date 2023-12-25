import {
    Button, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select, Text,
    useDisclosure
} from "@chakra-ui/react";
import {ChangeEvent, useContext, useEffect, useState} from "react";
import {Task} from "../../types/type";
import {TaskContext} from "../../context/taskContext";
import {generateUniqueID} from "../../libs/helper";
import {priorityMap, statusMap} from "../../config/const";
import {EditIcon} from "@chakra-ui/icons";

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
    const handleInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target
        setUpdateTask(prevState => ({...prevState, [name]: value}))
    }
    const saveUpdateTask = () => {
        context?.dispatch({
            type: "update",
            payload: updateTask
        })
    }
    useEffect(() => {
        console.log(updateTask)
    }, [updateTask]);
    return (
        <>
            <EditIcon style={{cursor: "pointer"}} onClick={onOpen} w={6} h={6} color='green.500'/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Create Task</ModalHeader>
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
                        </div>
                        <div className="form">
                            <Text mb='6px'>Priority</Text>
                            <Select name="priority" onChange={handleInput} defaultValue={task.priority}>
                                {priorityMap.map(priority => (
                                    <option key={priority.name} value={priority.name}>{priority.name}</option>
                                ))}
                            </Select>
                        </div>
                        <div className="form">
                            <Text mb='6px'>Status</Text>
                            <Select name="status" onChange={handleInput} defaultValue={task.status}>
                                {statusMap.map(status => (
                                    <option key={status.name} value={status.name}>{status.name}</option>
                                ))}
                            </Select>
                        </div>
                        <div className="form">
                            <Text mb='6px'>Start day</Text>
                            <Input
                                onChange={handleInput}
                                name="start_dt"
                                type="date"
                                placeholder='Here is a sample placeholder'
                                size='sm'
                                defaultValue={task.start_dt}
                            />
                        </div>
                        <div className="form">
                            <Text mb='6px'>Deadline</Text>
                            <Input
                                onChange={handleInput}
                                name="deadline"
                                type="date"
                                placeholder='Here is a sample placeholder'
                                size='sm'
                                defaultValue={task.deadline}
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='red' onClick={() => {
                            saveUpdateTask();
                            onClose();
                        }}>Update</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default UpdateTask
