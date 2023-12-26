import React from 'react'

import SearchBar from './SearchBar';
import logo from '../assets/logo.jpg'
import Image from 'next/image';

const AppBar = () => {
  
  return (
    <header className="w-full flex fixed gap-10 lg:gap-20 justify-between bg-gradient-to-r from-slate-800 to-gray-600 py-2">
      <div className="flex gap-4 items-center flex-shrink-0">
        <a href="/" className='flex space-x-1 text-xl'><Image alt=""  src={logo} className='w-10 rounded-tr-xl rounded-bl-xl'/><span className="font-mono"> SplitPrice </span></a>
      </div>
      <SearchBar/>
      <div className='flex justify-around'>
        <button className='bg-blue-600 rounded-l-lg p-1'>login</button>
        <button className='bg-red-600 rounded-r-lg border-solid p-1 border-white'>SignUp</button>
      </div>
    </header>
  )
}

export default AppBar;