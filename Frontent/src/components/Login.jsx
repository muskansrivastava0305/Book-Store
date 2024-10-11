import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" ">
      {/* <div className="btn" 
        onClick={() => document.getElementById("my_modal_3").showModal()}>
        </div>
      */}
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
          <div className=" mb-4">
          <h3 className="font-bold text-xl">Login</h3>
          </div>
         <div className="  h-10">
         <p className="p-1 flex items-center w-40 text-lg ">User Name</p>
         <input type="text" placeholder="UserName" className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white" />
         </div>
         
         <div className="   h-10 mt-16">
         <p className="p-1 flex items-center w-40 text-lg">Password</p>
         <input type="password" placeholder="Password" className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white" />
         </div>
         <div className=" flex justify-between mt-12">
          <button className=" bg-pink-500 px-3 py-1 text-lg rounded hover:cursor-pointer hover:bg-pink-900 text-white">Login</button>
          <p className=" flex items-center">Not registered? {" "}
            <Link to= "/signup "><span className=" text-blue-800 underline hover:cursor-pointer">Signup </span>
            </Link> {" "} </p>
         </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
