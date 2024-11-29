import React from "react";
import Home from "./Home/home";
import { Courses } from "./Courses/Courses";
import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup";
import Contact from "./Contact/Contact";
import Phone from "./Phone/Phone";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
     <div className=" dark:bg-slate-900 dark:text-white">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/phone" element={<Phone />} />
     </Routes>
     <Toaster />
     </div>

    
    </>
  );
}

export default App;
