import React from 'react';
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl  mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to my <span className='text-indigo-400 text-4xl'>Auth App!</span>
      </h1>
      <p></p>
      <p className='mb-4 text-slate-700'>
        This is real time User Login built with the MERN <span className='text-teal-500 font-semibold'>(MongoDB,
        Express, React, Node.js)</span> stack. It includes authentication features that
        allow users to <Link to='/sign-up'><span className='text-blue-500 hover:text-blue-700 text-xl'> SignUp</span></Link>,  
        <Link to='/sign-in'><span className='text-blue-500 hover:text-blue-700 text-xl'>SignIn</span></Link>
        , log in, and log out, and  
        <span className='text-bold text-slate-950 text-lg'> provides access to protected routes only for authenticated users.</span>
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with <span className='text-yellow-500 text-lg'>Node.js</span> and
        <span className='text-red-500 text-lg'> Express</span>, and uses<span className='text-green-700 text-lg'> MongoDB </span> as the database. Authentication is implemented
        using <span className='text-slate-900 font-semibold'>JSON Web Tokens (JWT).</span> 
      </p>
    </div>
  );
}