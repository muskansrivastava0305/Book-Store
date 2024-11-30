import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CusContact from "../components/CusContact";

function Contact() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <CusContact />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
