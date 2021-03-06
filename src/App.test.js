import { render, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import Signup, { url } from './components/signup/Signup'
import userEvent from '@testing-library/user-event';
import App from './App';

axios.post = jest.fn().mockResolvedValue()

describe("Unica", () =>{

  test('renders elements correctly', async () => {
    const {getByPlaceholderText} = render(<App/>)

    expect(getByPlaceholderText("Nome")).toBeInTheDocument()
    expect(getByPlaceholderText("Idade")).toBeInTheDocument()
    expect(getByPlaceholderText("Email")).toBeInTheDocument()
    expect(getByPlaceholderText("Cidade")).toBeInTheDocument()

  });

  test('Register user', async () => {

    const input = {
      name: "test",
      age: 33,
      email: "test@email.com",
      city: "test"
    }

    const {getByPlaceholderText, getByText} = render(<App/>)

    try {
      const inputName = getByPlaceholderText('Nome')
      await userEvent.type(inputName, 'test')
  
  
      const inputAge = getByPlaceholderText('Idade')
      await userEvent.type(inputAge, 33)
  
  
      const inputEmail = getByPlaceholderText('Email')
      await userEvent.type(inputEmail, 'test@email.com')
      
  
      const inputCity = getByPlaceholderText('Cidade')
      await userEvent.type(inputCity, 'test')

      expect(inputName).toHaveValue('test')
      expect(inputAge).toHaveValue(33)
      expect(inputEmail).toHaveValue('test@email.com')
      expect(inputCity).toHaveValue('test')

      await userEvent.click(getByText("Confirm"))
  
      expect(axios.post).toHaveBeenCalledWith(url, input)
  
      expect(input).toHaveValue('')

    } catch (error) {
      
    }
  });
})