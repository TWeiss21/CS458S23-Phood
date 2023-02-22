import { render, screen } from '@testing-library/react';
import App from '../pages/App';
import Login from '../components/Login';
import { userAgent } from 'next/server';

it('should render a button with registering', async () => {
  user.setup();
  render(<Login />);

  const regBtn = screen.getByRole('button', {
    name: 'register'
  });

  expect(regBtn).toBeInTheDocument('register');
  await user.click(regBtn);
  
  // const usernameField = screen.getByLabelText(/username/i);
  // const passwordField = screen.getByLabelText(/password/i);
  // const submitButton = screen.getByText(/submit/i);

  // //const changeForm = screen.getByText(/Already have an account? Login here!/, /Don't have an account? Register here!/i);
  // expect(usernameField).toBeInTheDocument();
  // expect(passwordField).toBeInTheDocument();
  // expect(submitButton).toBeInTheDocument();
});
