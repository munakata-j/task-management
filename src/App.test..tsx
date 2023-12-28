// React testing methods are imported
import { render, screen } from '@testing-library/react';

import App from './App'; // Component to be tested

// Test block for the component
test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test("", () => {});