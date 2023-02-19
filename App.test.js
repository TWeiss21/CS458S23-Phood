import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Changeform button to switch to reg or login', () => {
  render(<App />);
  const changeForm = screen.getByText(/Already have an account? Login here!/, /Don't have an account? Register here!/i);
  expect(changeForm).toBeInTheDocument();
});
