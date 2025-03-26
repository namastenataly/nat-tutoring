import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { useState } from 'react';
import {useMutation} from '@apollo/client';
import {ADD_USER} from '../utils/mutations';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }); 

  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

      try {
        const mutationResponse = await addUser({
          variables: {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            password: formState.password,
          },
        });
    
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    
        navigate('/profile')
      } catch (err) {
        console.error(err);
        alert("Oopsie! There was an error signing up!")
      }
  };
   

  const handleChange = (event) => {
    const {name, value }= event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      
    <Nav />
    <div className="w-[100] h-[100] flex items-center justify-center min-h-screen p-4 bg-white relative isolate">
      <div className="w-full p-8 max-w-lg bg-blue-800 rounded-3xl border-0">
        <p className="text-center text-4xl font-bold tracking-tight mb-10 text-white">Sign up</p>
        <p className="text-lg text-center text-white mb-20">Enter your details to sign up</p>
        <form onSubmit={handleFormSubmit} className="mt-10">
          <div className="space-y-5">
            <input 
              type="firstName"
              name='firstName'
              id='firstName' 
              placeholder="Enter first name" 
              className="border border-gray-200 p-3 focus:ring-1 focus:ring-gray-600 focus:outline-none w-full rounded-lg bg-white"
              onChange={handleChange}
            />
            <input 
              type="lastName"
              name='lastName'
              id='lastName' 
              placeholder="Enter last name" 
              className="border border-gray-200 p-3 focus:ring-1 focus:ring-gray-600 focus:outline-none w-full rounded-lg bg-white"
              onChange={handleChange}
            />
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
            Sign up
          </button>
        </form>
        <p className="text-center mt-4 text-white">
          <span>Already have an account?</span>
          <Link to="/login" className="underline font-semibold pl-2">Sign in</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
