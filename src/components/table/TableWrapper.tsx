import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Badge,
} from '@chakra-ui/react'
import {useContext} from "react";
import {TaskContext} from "../../context/taskContext";
import UpdateTask from "../common/UpdateTask";
import DeleteTask from "../common/DeleteTask";
import {getPriorityColor} from "../../libs/helper";
export function TableWrapper () {
    const context = useContext(TaskContext)

    return (
        <div className="table-container">
            <TableContainer>
                <Table variant="simple">
                    <TableCaption></TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Task Title</Th>
                            <Th>Priority</Th>
                            <Th>Status</Th>
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
                                    <Td><Badge colorScheme={getPriorityColor(task.priority)}>{task.priority}</Badge></Td>
                                    <Td><Badge colorScheme='green'>{task.status}</Badge></Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                    <Td className="flexItem">
                                        <UpdateTask task={task}/>
                                        <DeleteTask task={task}/>
                                    </Td>
                                </Tr>
                            )
                        ))}
                        {context?.state.tasks.map(task => (
                            task.status === "Progress" && (
                                <Tr key={task.id}>
                                    <Td>{task.title}</Td>
                                    <Td><Badge colorScheme={getPriorityColor(task.priority)}>{task.priority}</Badge></Td>
                                    <Td><Badge colorScheme='blue'>{task.status}</Badge></Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                    <Td className="flexItem">
                                        <UpdateTask task={task}/>
                                        <DeleteTask task={task}/>
                                    </Td>
                                </Tr>
                            )
                        ))}
                        {context?.state.tasks.map(task => (
                            task.status === "Review" && (
                                <Tr key={task.id}>
                                    <Td>{task.title}</Td>
                                    <Td><Badge colorScheme={getPriorityColor(task.priority)}>{task.priority}</Badge></Td>
                                    <Td><Badge colorScheme='yellow'>{task.status}</Badge></Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                    <Td className="flexItem">
                                        <UpdateTask task={task}/>
                                        <DeleteTask task={task}/>
                                    </Td>
                                </Tr>
                            )
                        ))}
                        {context?.state.tasks.map(task => (
                            task.status === "Done" && (
                                <Tr key={task.id}>
                                    <Td>{task.title}</Td>
                                    <Td><Badge colorScheme={getPriorityColor(task.priority)}>{task.priority}</Badge></Td>
                                    <Td><Badge colorScheme='red'>{task.status}</Badge></Td>
                                    <Td>{task.start_dt}</Td>
                                    <Td>{task.deadline}</Td>
                                    <Td className="flexItem">
                                        <UpdateTask task={task}/>
                                        <DeleteTask task={task}/>
                                    </Td>
                                </Tr>
                            )
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}