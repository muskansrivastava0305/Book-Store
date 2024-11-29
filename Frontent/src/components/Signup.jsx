import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo ={
      fullname:data.name,
      email:data.email,
      password:data.password,
      
    }
    await axios
    .post("http://localhost:4001/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
       // alert("Signup Successfully")
        toast.success("Signup Successfully");
      }
      localStorage.setItem("Users" ,JSON.stringify(res.data));
    }).catch((err)=>{
     if(err.response){
      console.log(err);
      toast.error("Error:" + err.response.data.message)
     }
    })
  }


  return (
    <div className=" flex h-screen items-center justify-center ">
      <div className=" w-[600px]">
        <div className=" modal-box  dark:bg-slate-900 dark:text-white ">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog" className=" ">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className=" selection:btn btn-sm btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
         
          <div className="">
            <div className=" mb-4">
              <h3 className="font-bold text-xl">SignUp</h3>
            </div>
            <div className="  h-10">
              <p className="p-1  text-lg ">Name</p>
              <input
                type="text"
                placeholder=" Enter your FullName"
                className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white"
                {...register("name", { required: true })}
              />
               {errors.name && <span className=" text-red-400">This field is required</span>}
            </div>
            <div className="  h-10 mt-16">
              <p className="p-1 flex items-center w-40 text-lg ">Email</p>
              <input
                type="text"
                placeholder="Enter your email"
                className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
               {errors.email && <span className=" text-red-400">This field is required</span>}
            </div>

            <div className="   h-10 mt-16">
              <p className="p-1 flex items-center w-40 text-lg">Password</p>
              <input
                type="password"
                placeholder="Password"
                className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
               {errors.password && <span className=" text-red-400">This field is required</span>}

            </div>
            <div className=" flex justify-between mt-20">
              <button type="submit" className=" bg-pink-500 px-3 py-1 text-lg rounded hover:cursor-pointer hover:bg-pink-900 text-white ">
                SignUp
              </button>
              <p className=" flex items-center text-lg">
                Have account?{" "}
                <button
                  className=" text-blue-800 underline hover:cursor-pointer text-lg font-semibold"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
