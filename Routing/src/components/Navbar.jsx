import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-18 bg-amber-600 flex justify-between px-5 text-3xl align-middle text-center items-center">
      <h1 className="uppercase font-bold text-white">Navbar</h1>
      <div className="flex gap-5">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
                 textDecoration:isActive? "underline" :"none",
            textDecorationThickness:"2px",
       
          })}
        >
          Home
        </NavLink>

        <NavLink to="/about"
        style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
            textDecoration:isActive? "underline" :"none",
            textDecorationThickness:"2px",
      
          })}
        >
            About
            </NavLink>
        <NavLink to="/course"
        style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
     textDecoration:isActive? "underline" :"none",
            textDecorationThickness:"2px",
          
          })}
        >
            Course
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
