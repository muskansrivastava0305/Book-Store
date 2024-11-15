import React from "react";

function Phone_Contact() {
  return (
    <div className=" flex pt-28 w-full h-full pb-10 m-5">
      <div className=" flex flex-col gap-10 p-10 w-full h-full shadow-md X">
        <p className=" font-bold text-4xl">Need help or have questions? Our customer service team is ready to assist you with inquiries and support.</p>
        <p><span className=" font-semibold">Hours: </span>Mon-Fri: 9 AM – 6 PM | Sat: 10 AM – 4 PM (Closed Sun & holidays)</p>
        <p><span className=" font-semibold">Phone: </span>+1 (XXX) XXX-XXXX</p>
        <p className=" text-xl font-medium">Call us today for prompt, personalized assistance!</p>
        </div>
      <div className=" w-full p-16">
        <img src="https://res.cloudinary.com/dmrqjhzx5/image/upload/v1728121302/book_pkijwy.webp" className=" w-full h-full"/>
        </div>
    </div>
  );
}

export default Phone_Contact;
