import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className=' flex h-screen  items-center justify-center'>
         <div id="my_modal_3" className="   ">
        <div className="  dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
          <div className=" mb-4">
          <h3 className="font-bold text-xl">SignUp</h3>
          </div>
         <div className="  h-10">
         <p className="p-1 flex items-center w-40 text-lg ">Name</p>
         <input type="text" placeholder=" Enter your FullName" className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white" />
         </div>
         <div className="  h-10 mt-16">
         <p className="p-1 flex items-center w-40 text-lg ">Email</p>
         <input type="text" placeholder="Enter your email" className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white" />
         </div>
         
         <div className="   h-10 mt-16">
         <p className="p-1 flex items-center w-40 text-lg">Password</p>
         <input type="password" placeholder="Password" className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white" />
         </div>
         <div className=" flex justify-between mt-12">
          <button className=" bg-pink-500 px-3 py-1 text-lg rounded hover:cursor-pointer hover:bg-pink-900 text-white">SignUp</button>
          <p className=" flex items-center">Have account? {" "}
            <Link to= "/signup"><span className=" text-blue-800 underline hover:cursor-pointer">Login</span>
            </Link> {" "} </p>
         </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup