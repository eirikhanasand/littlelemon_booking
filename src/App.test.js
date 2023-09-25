import { render, screen } from '@testing-library/react';
import App from './App';

test('Tests entire application', () => {
    render(<App />);
    const linkElement = screen.getByText(/Our dishes/i);
    expect(linkElement).toBeInTheDocument();
});
