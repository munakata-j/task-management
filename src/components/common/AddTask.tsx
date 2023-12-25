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

const AddTask = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [newTask, setNewTask] = useState<Task>({
        deadline: "", id: 0, priority: "", start_dt: "", status: "", title: ""
    })
    const context = useContext(TaskContext)
    const handleInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target
        setNewTask(prevState => ({...prevState, [name]: value, id: generateUniqueID()}))
    }
    const saveNewTask = () => {
        context?.dispatch({
            type: "create",
            payload: newTask
        })
    }
    return (
        <>
            <Button onClick={onOpen}>Create task</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="form">
                            <Text mb='6px'>Task name</Text>
                            <Input
                                onChange={handleInput}
                                name="title"
                                placeholder='Task name'
                                size='sm'
                            />
                        </div>
                        <div className="form">
                            <Text mb='6px'>Priority</Text>
                            <Select name="priority" onChange={handleInput}>
                                {priorityMap.map(priority => (
                                    <option key={priority.name} value={priority.name}>{priority.name}</option>
                                ))}
                            </Select>
                        </div>
                        <div className="form">
                            <Text mb='6px'>Status</Text>
                            <Select name="status" onChange={handleInput}>
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
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='red' onClick={() => {
                            saveNewTask();
                            onClose();
                        }}>Create</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AddTask
