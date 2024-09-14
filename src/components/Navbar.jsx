import React from 'react'
import logo from './../assets/logo.png';
const Navbar = () => {
  return (
    <div className='flex justify-between px-[5vw] py-4 items-center absolute w-full'>
    <p className='flex items-center text-5xl jost'> <img src={logo} alt="" className='w-9' />elp</p>
      <button className='text-xl px-6 py-3 bg-black text-white rounded-md'>Dashboard</button>
    </div>
  )
}

export default Navbar
