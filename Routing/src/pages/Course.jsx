import React from 'react'
import { Outlet } from 'react-router-dom'

const Course = () => {
  return (
   <div className="w-full   bg-gray-900 ">
      <h1 className=" text-9xl font-extrabold flex whitespace-nowrap  uppercase  text-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Course Page
      </h1>
      <Outlet/>
    </div>
  )
}

export default Course