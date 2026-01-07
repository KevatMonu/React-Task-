import React from "react";
import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Footer from "./components/Footer";
import Course1 from "./pages/Course1";
import Course2 from "./pages/Course2";


const App = () => {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/course' element={<Course/>}>
          <Route path='/course/course1' element={<Course1/>}/>
          <Route path='/course/course2' element={<Course2/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
