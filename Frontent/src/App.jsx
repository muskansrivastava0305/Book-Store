import React from "react";
import Home from "./Home/home";
import { Courses } from "./Courses/Courses";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses />} />
     </Routes>
    </>
  );
}

export default App;
