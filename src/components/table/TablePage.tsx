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
                        </Tr>
                    </Thead>
                    <Tbody>
                        {context?.state.tasks.map(task => (
                            task.status === "Undo" && (
                                <Tr>
                                    <Td>{task.title}</Td>
                                    <Td>{task.priority}</Td>
                                    <Td>{task.status}</Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                </Tr>
                            )
                        ))}
                        {initialTasks.map(task => (
                            task.status === "Progress" && (
                                <Tr>
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
                                <Tr>
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
                                <Tr>
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