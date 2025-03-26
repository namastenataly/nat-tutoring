import Nav from '../components/Nav';
import React, { useState } from 'react';
import {useMutation} from '@apollo/client';
import {LOGIN} from '../utils/mutations';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [login, {error}] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);

      navigate('/profile')

    } catch (error) {
      console.log('There was an error logging in!', error);
      alert("Oopsie! There was an error logging in!")
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
  <Nav />

  <div className="w-[100] h-[100] flex items-center justify-center min-h-screen p-4 bg-white relative isolate">
      <div className="w-full p-8 max-w-lg bg-blue-800 rounded-3xl">
        <p className="text-center text-4xl font-bold tracking-tight mb-10 text-white">Login</p>
        <p className="text-lg text-center text-white mb-10">Enter your details to login</p>
        <form  onSubmit={handleFormSubmit} className="mt-10">
          <div className="space-y-5">
            <input
              type="email"
              name='email'
              id='email'
              placeholder="Enter email"
              className="border border-gray-200 p-3 focus:ring-1 focus:ring-gray-600 focus:outline-none w-full rounded-lg bg-white"
              onChange={handleChange}
            />
            <input
              type="password"
              name='password'
              id='pwd'
              placeholder="Enter password"
              className="border border-gray-200 p-3 focus:ring-1 focus:ring-gray-600 focus:outline-none w-full rounded-lg bg-white"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="p-3 w-full bg-black text-white rounded-lg mt-10 font-semibold"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-white">
            Don't have an account?
            <a href="/signup" className="underline font-semibold ml-2">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
