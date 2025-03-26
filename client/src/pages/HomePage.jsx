import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const HomePage = () => {
  return (
    <>
    <div className="w-[100vw] h-[75vh] bg-blue-100 relative overflow-hidden mx-auto ">
     <Nav />
        <div className="pt-10 px-8 max-w-7xl mx-auto relative pb-64">
          
          <div className="blue-box absolute hidden md:block w-full h-full bg-blue-800 transform scale-75 translate-x-1/2 translate-y-20 -rotate-12 opacity-90"></div>
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex flex-col items-start w-full md:w-1/2 md:pr-16">
              <p className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-900 to-blue-600">Time to get your education right ! Schedule up fast !</p>
              <p className="text-lg text-blue-800 mt-7">Connect with one of are tutors</p>
              <div className="flex w-full mt-7">   
              </div>
            </div>
            <div className="relative w-full md:w-1/2 flex items-center justify-center">
              <div className="absolute opacity-100">
              </div>
              <img src="/assets/images/dog-grad.png" alt="Graduation Dog"
              className="relative max-w-sm md:w-96 w-full h-full"/>
            </div>
          </div>
        </div>
        </div>
      </>
  );
};

export default HomePage;
