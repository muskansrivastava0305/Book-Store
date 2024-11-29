import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("logging Successfully");
          toast.success('logging Successfully');
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          //alert("Error:" + err.response.data.message);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };

  // const closeModal = () => {
  //   document.getElementById("my_modal_3").close(); // Close the modal explicitly
  // };

  return (
    <div className=" ">
      {/* <div className="btn" 
        onClick={() => document.getElementById("my_modal_3").showModal()}>
        </div>
      */}
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-ghost absolute right-2 top-2"
              // onClick={closeModal}
              onClick={() => document.getElementById("my_modal_3").closest()}
            >
              ✕
            </Link>

            <div className="">
              <div className=" mb-4">
                <h3 className="font-bold text-xl">Login</h3>
              </div>
              <div className="  h-10">
                <p className="p-1 flex items-center w-40 text-lg ">User Name</p>
                <input
                  type="text"
                  placeholder="UserName"
                  className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-400">This field is required</span>
                )}
              </div>

              <div className="   h-10 mt-16">
                <p className="p-1 flex items-center w-40 text-lg">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  className=" border rounded-md w-full p-2 dark:bg-slate-900 dark:text-white"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className=" text-red-400">This field is required</span>
                )}
              </div>
              <div className=" flex justify-between mt-20">
                <button
                  type="submit"
                  className=" bg-pink-500 px-3 py-1 text-lg rounded hover:cursor-pointer hover:bg-pink-900 text-white"
                >
                  Login
                </button>
                <p className=" flex items-center">
                  Not registered?{" "}
                  <Link to="/signup ">
                    <span
                      className=" text-blue-800 underline hover:cursor-pointer p-10"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Signup{" "}
                    </span>
                  </Link>{" "}
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
