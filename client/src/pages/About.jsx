import React from 'react';

export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>About</h1>
      <p className='mb-8 text-slate-700'>
        This is a MERN <span className='text-teal-500 font-semibold'>(MongoDB,
          Express, React, Node.js)</span> stack application with
        authentication. <span className='text-blue-500 text-2xl'>It allows users to sign up and
        provides access to protected routes only for authenticated users.</span>
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end of the application is built with <span className='text-lg text-slate-950'>React and uses React
        Router for client-side routing.</span> The back-end is built with <span className='text-yellow-500 text-lg'>Node.js</span> and
        <span className='text-red-500 text-lg'> Express</span>, and uses <span className='text-green-700 text-lg'> MongoDB </span> as the database. Authentication is implemented
        using <span className='text-slate-900 font-semibold'>JSON Web Tokens (JWT).</span> 
      </p>
    </div>
  );
}