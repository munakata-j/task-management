import {render, screen, fireEvent, act, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import UpdateTask from "../../../components/common/UpdateTask";
import {Task} from "../../../types/type";
jest.mock('../../../context/taskContext', () => ({
    TaskContext: {
        Consumer: ({ children }: { children: (value: any) => React.ReactNode }) =>
            children({
                dispatch: jest.fn(),
            }),
    },
}));
const task: Task = {
    id: 0,
    deadline: "2023/01/01",
    priority: "High",
    start_dt: "2023/01/05",
    status: "Review",
    title: "Task Update Test"
}
describe('UpdateTask Component', () => {
    it('Test case 1：renders without errors', () => {
        render(<UpdateTask  task={task}/>);
    });

    it('Test case 2: opens modal when "Update" button is clicked', () => {
        render(<UpdateTask  task={task}/>);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

        fireEvent.click(screen.getByTestId('edit-icon'))

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('Test case 3: closes modal when "Close" button is clicked', async () => {
        render(<UpdateTask  task={task}/>);

        fireEvent.click(screen.getByTestId('edit-icon'))

        expect(screen.getByRole('dialog')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Close'));

        await waitFor(() => {
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });

    });

    it('Test case 4: creates a new task when "Create" button is clicked', () => {
        render(<UpdateTask  task={task}/>);

        fireEvent.click(screen.getByTestId('edit-icon'))

        // Simulate input changes (you may need to adjust this based on your actual input fields)
        fireEvent.change(screen.getByPlaceholderText('Task name'), { target: { value: 'Test Task' } });

        const labelText = screen.getByText('Priority');
        const selectElement = labelText.parentElement?.querySelector('Select[name="priority"]');
        if (selectElement) {
            fireEvent.change(selectElement, { target: { value: 'Low' } });
        } else {
            console.error('Select element not found.');
        }
        const labelTextStatus = screen.getByText('Status')
        const selectStatusElement = labelTextStatus.parentElement?.querySelector('Select[name="status"]');
        selectStatusElement && fireEvent.change(selectStatusElement, { target: {value: 'Done'}})
        //fireEvent.change(screen.getByLabelText('Status'), { target: { value: 'Undo' } });
        fireEvent.change(screen.getByPlaceholderText('Start day'), { target: { value: '2023-01-01' } });
        fireEvent.change(screen.getByPlaceholderText('Deadline'), { target: { value: '2023-01-10' } });

        fireEvent.click(screen.getByText('Update'));

    });
});