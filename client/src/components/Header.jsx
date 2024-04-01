import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-slate-300'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold  text-2xl'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='text-slate-700 text-lg hover:text-blue-700'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='text-slate-700 text-lg hover:text-blue-700'>About</li>
          </Link>
          <Link to='/sign-in'>
            <li className='text-blue-500 text-lg hover:text-blue-700'>Sign In</li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
}