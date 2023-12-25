import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import {initialTasks} from "../../config/const";
import {useContext, useEffect} from "react";
import {TaskContext} from "../../context/taskContext";
import UpdateTask from "../common/UpdateTask";
import DeleteTask from "../common/DeleteTask";
const TablePage = () => {
    const context = useContext(TaskContext)
    useEffect(() => {
        console.log("Tasks", context?.state)
    }, [context?.state]);
    return (
        <div>
            <TableContainer>
                <Table variant="simple">
                    <TableCaption></TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Task Title</Th>
                            <Th>Priority</Th>
                            <Th>Progress</Th>
                            <Th>Start day</Th>
                            <Th>Deadline</Th>
                            <Th>Update/Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {context?.state.tasks.map(task => (
                            task.status === "Undo" && (
                                <Tr key={task.id}>
                                    <Td>{task.title}</Td>
                                    <Td>{task.priority}</Td>
                                    <Td>{task.status}</Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                    <Td>
                                        <UpdateTask task={task}/>
                                        <DeleteTask task={task}/>
                                    </Td>
                                </Tr>
                            )
                        ))}
                        {initialTasks.map(task => (
                            task.status === "Progress" && (
                                <Tr key={task.id}>
                                    <Td>{task.title}</Td>
                                    <Td>{task.priority}</Td>
                                    <Td>{task.status}</Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                </Tr>
                            )
                        ))}
                        {initialTasks.map(task => (
                            task.status === "Review" && (
                                <Tr key={task.id}>
                                    <Td>{task.title}</Td>
                                    <Td>{task.priority}</Td>
                                    <Td>{task.status}</Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                </Tr>
                            )
                        ))}
                        {initialTasks.map(task => (
                            task.status === "Done" && (
                                <Tr key={task.id}>
                                    <Td>{task.title}</Td>
                                    <Td>{task.priority}</Td>
                                    <Td>{task.status}</Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                </Tr>
                            )
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default TablePage