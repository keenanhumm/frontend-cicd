import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the app!/i);
  expect(linkElement).toBeInTheDocument();
});
