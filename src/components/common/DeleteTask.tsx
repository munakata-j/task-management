import { useContext, useState} from "react";
import {TaskContext} from "../../context/taskContext";
import {
    Button,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {Task} from "../../types/type";
import {DeleteIcon} from "@chakra-ui/icons";
interface Props {
    task: Task
}
const DeleteTask = ({task}: Props) => {
    const context = useContext(TaskContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [deleteTask, setDeleteTask] = useState<Task>({
        deadline: task.deadline, id: task.id, priority:
        task.priority, start_dt: task.start_dt, status: task.status, title: task.title
    })

    const saveDeleteTask = () => {
        context?.dispatch({
            type: "delete",
            payload: deleteTask
        })
    }
    return (
        <>
            <DeleteIcon style={{cursor: "pointer"}} onClick={onOpen} w={6} h={6} color='red.500'/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="form">
                            Delete this task, Is it okay?
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='red' onClick={() => {
                            saveDeleteTask();
                            onClose();
                        }}>Update</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default DeleteTask
