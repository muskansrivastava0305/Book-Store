import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import list from "../../public/list.json"

export const Courses = () => {
    console.log(list);
    
  return (
   <>
   <Navbar />
   <div className=" min-h-screen">
   <Course />
   </div>
   <Footer />
   </>
  )
}
