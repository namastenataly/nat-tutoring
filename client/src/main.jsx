import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom/dist';
import './index.css';


import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import MeetTheTeam from './pages/meettheteam.jsx';
import Bookings from './pages/Bookings.jsx';
import Profile from './pages/Profile.jsx';
import Availability from './pages/Availability.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, 
    children: [
      {
        index: true,
        element: <Home /> 
      },
      {
        path: 'login',
        element: <Login /> 
      },
      {
        path: 'meettheteam',
        element: <MeetTheTeam /> 
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'bookings',
        element: <Bookings />
      },
      {
        path: 'availability',
        element: <Availability />
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
