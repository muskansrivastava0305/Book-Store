import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Phone_Contact from '../components/Phone_Contact'

function Phone() {
  return (
    <>
    <Navbar />
    <div className=" h-screen">
    <Phone_Contact />
    </div>
    <Footer />
    
    </>
  )
}

export default Phone