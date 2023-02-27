import { render, screen } from '@testing-library/react';
import {userEvent} from "@testing-library/user-event";
import App from '../pages/App';
import Login from '../components/Login';
import { userAgent } from 'next/server';
import React from "react";

const onSubmit = jest.fn()

beforeEach(()=>{
  const {  } = render(<Login />)
  onSubmit.mockClear()
})

test('Login form parameters are properly getting passed', async () => {
  const eMail = screen.getByTestId('text-input-element')
  const password = screen.getByTestId('password-input-element')
  userEvent.type(eMail, "fillWithTestUsername")
  userEvent.type(password, "fillWithTestPassword")

  userEvent.click(screen.getByTestId('login-button-element'))

  await waitFor(()=>{
    expect(onSubmit).toBeCalledTimes(1)
  })
})