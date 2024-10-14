import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


function CusContact() {
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
        const onSubmit = (data) => console.log(data);
  return (
    <div className=' flex justify-center items-center mt-28 w-full'>
        <div className=" h-screen w-full  flex justify-center items-center">
            <img src='https://res.cloudinary.com/dmrqjhzx5/image/upload/v1728121431/pngtree_zkjm6c.png' className=' w-96 h-96 ' />
        </div>
        <div className=" h-screen flex w-full h-full ">
      <div className=" w-full">
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
              <h3 className="font-bold text-xl">Contact</h3>
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
              <p className="p-1 flex items-center w-40 text-lg">Message</p>
              <input
                type="text"
                placeholder="Message"
                className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white h-20"
                {...register("message", { required: true })}
              />
               {errors.message && <span className=" text-red-400">This field is required</span>}

            </div>
            <div className=" flex justify-between mt-28">
              <button type="submit" className=" bg-pink-500 px-3 py-1 text-lg rounded hover:cursor-pointer hover:bg-pink-900 text-white ">
                Submit
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CusContact