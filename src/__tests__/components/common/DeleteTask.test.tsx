import {render, screen, fireEvent, act, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Task} from "../../../types/type";
import DeleteTask from "../../../components/common/DeleteTask";
jest.mock('react', () => {
    const createContextMock = jest.fn();
    return {
        ...jest.requireActual('react'),
        createContext: createContextMock,
    };
});
const task: Task = {
    id: 0,
    deadline: "2023/01/01",
    priority: "High",
    start_dt: "2023/01/05",
    status: "Review",
    title: "Task Update Test"
}

describe("DeleteTask ", () => {
    it('Test case 1：renders without errors', () => {
        render(<DeleteTask  task={task}/>);
    });
    it('Test case 2: opens modal when "Update" button is clicked', () => {
        render(<DeleteTask  task={task}/>);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

        fireEvent.click(screen.getByTestId('delete-icon'))

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('Test case 3: closes modal when "Close" button is clicked', async () => {
        render(<DeleteTask  task={task}/>);

        fireEvent.click(screen.getByTestId('delete-icon'))

        expect(screen.getByRole('dialog')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Close'));

        await waitFor(() => {
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });

    });
    // it('Test case 4:', async () => {
    //     render(<DeleteTask task={task}/>);
    //
    //     fireEvent.click(screen.getByTestId('delete-icon'))
    //     fireEvent.click(screen.getByText('Delete'))
    //
    // })
})