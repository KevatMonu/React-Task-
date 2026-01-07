import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
   const navi = useNavigate()
  return (
    <div className='w-full h-18 bg-fuchsia-700 absolute bottom-0 flex justify-between items-center align-middle text-center px-5'>
      <h1 className='text-white text-4xl uppercase font-bold '>Footer</h1>
      <button onClick={()=>{
        navi('/course')
      }} className='px-5 py-3 bg-red-200 rounded-full active:scale-[.95]'>Courses</button>
    </div> 
  )
}

export default Footer
