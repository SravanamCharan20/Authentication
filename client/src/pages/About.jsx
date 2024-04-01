import React from 'react';

export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>
        This is a MERN (MongoDB, Express, React, Node.js) stack application with
        authentication. <span className='text-blue-500 text-2xl'>It allows users to sign up and
        provides access to protected routes only for authenticated users.</span>
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using <span className='text-slate-900 font-semibold'>JSON Web Tokens (JWT).</span> 
      </p>
    </div>
  );
}