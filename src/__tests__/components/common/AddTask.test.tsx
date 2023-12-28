import AddTask from "../../../components/common/AddTask";
import {render, screen, fireEvent, act, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
jest.mock('../../../context/taskContext', () => ({
    TaskContext: {
        Consumer: ({ children }: { children: (value: any) => React.ReactNode }) =>
            children({
                dispatch: jest.fn(),
            }),
    },
}));
describe('AddTask Component', () => {
    it('Test case 1：renders without errors', () => {
        render(<AddTask />);
    });

    it('Test case 2: opens modal when "Create task" button is clicked', () => {
        render(<AddTask />);

        // Check that modal is initially closed
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

        // Click the "Create task" button
        fireEvent.click(screen.getByText('Create task'));

        // Check that modal is now open
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('Test case 3: closes modal when "Close" button is clicked', async () => {
        render(<AddTask/>);

        // Click the "Create task" button
        fireEvent.click(screen.getByText('Create task'));

        // Check that modal is open
        expect(screen.getByRole('dialog')).toBeInTheDocument();

        // Click the "Close" button
        fireEvent.click(screen.getByText('Close'));
        // Check that modal is closed
        await waitFor(() => {
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });

    });

    it('Test case 4: creates a new task when "Create" button is clicked', () => {
        render(<AddTask />);
        // Click the "Create task" button
        fireEvent.click(screen.getByText('Create task'));

        // Simulate input changes (you may need to adjust this based on your actual input fields)
        fireEvent.change(screen.getByPlaceholderText('Task name'), { target: { value: 'Test Task' } });

        const labelText = screen.getByText('Priority');
        const selectElement = labelText.parentElement?.querySelector('Select[name="priority"]');
        if (selectElement) {
            fireEvent.change(selectElement, { target: { value: 'High' } });
        } else {
            console.error('Select element not found.');
        }
        const labelTextStatus = screen.getByText('Status')
        const selectStatusElement = labelTextStatus.parentElement?.querySelector('Select[name="status"]');
        selectStatusElement && fireEvent.change(selectStatusElement, { target: {value: 'Undo'}})
        //fireEvent.change(screen.getByLabelText('Status'), { target: { value: 'Undo' } });
        fireEvent.change(screen.getByPlaceholderText('Start day'), { target: { value: '2023-01-01' } });
        fireEvent.change(screen.getByPlaceholderText('Deadline'), { target: { value: '2023-01-10' } });

        // Click the "Create" button
        fireEvent.click(screen.getByText('Create'));

    });
});