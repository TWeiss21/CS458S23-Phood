import { render, screen } from '@testing-library/react';
import App from '../../pages/App';
import Login from '../../components/Login';
import { userAgent } from 'next/server';

it('should render a button with registering', async () => {
  user.setup();
  render(<Login />);

  const regBtn = screen.getByRole('button', {
    name: 'register'
  });

  expect(regBtn).toBeInTheDocument('register');
  await user.click(regBtn);
  
});
