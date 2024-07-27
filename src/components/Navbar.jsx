import React from 'react'
import { FaRegMoon, FaSun } from "react-icons/fa6";

export default function Navbar( {  theme , handleThemeToggle }) {
  return (
    <div className='bg-white  dark:bg-slate-700 pb-3 shadow-md  sticky top-0  w-full   '>\
    <div className="container flex justify-between items-center py-3 ">
      <h2 className='text-2xl font-bold  dark:text-white '>Where in the world?</h2>


      <button onClick={ handleThemeToggle } className=' flex items-center gap-3 dark:bg-slate-700 dark:text-white bg-slate-200 dark:pb-3  p-2 rounded-md'>
        {theme == 'dark' ? (
          <div className='flex items-center gap-3'><FaRegMoon /><span className="hidden md:block">Dark mode </span></div>
        ):
        <div className='flex items-center gap-3'><FaSun /><span className="hidden md:block">Light mode </span></div>}
      
      </button>
      </div>
    </div>
  )
}
