import React from "react";

function Banner() {
  return (
    <div className="  max-w-screen-2xl container mx-auto md:px-16 px-6 flex flex-col md:flex-row my-16">
      <div className="flex flex-col gap-9  w-full justify-center mt-10 order-2 md:order-1">
        <div className=" flex flex-col gap-9">
          <h1 className=" text-4xl font-bold">
            Hello, welcomes here to learn somthing{" "}
            <span className=" text-pink-500">new everyday!!!</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            rem voluptatem sequi voluptatum deleniti voluptas vitae perspiciatis
            sapiente reiciendis laboriosam natus cupiditate odit explicabo magni
            iusto, debitis autem dicta? Autem!
          </p>
        </div>
        <div className=" ">
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
        </div>
        <div className=" ">
          <button className=" bg-pink-600 text-white p-2 rounded">
            Scondary
          </button>
        </div>
      </div>

      <div className="  p-4 w-full flex justify-center mt-5 order-1 md:order-2">
        <img
          src="https://res.cloudinary.com/dmrqjhzx5/image/upload/v1728122175/Banner_zi4nji.png"
          className=" w-80 md:w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
