import React from "react";
import Card from "./Card";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
// import Card from "./Card";

function Course() {
  return (
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className=" pt-28 flex flex-col justify-center items-center text-center">
        <h1 className=" text-2xl font-semibold md:text-4xl justify-center text-center">
          We're delighted to have you {" "}
          <span className=" text-pink-500">Here! :)</span>
        </h1>
        <p className=" mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel
          sapiente commodi fugit asperiores, quis cum nostrum nemo ex alias
          omnis dicta molestias error eos veniam magnam voluptatibus.
          Blanditiis, laudantium?
        </p>
        <Link to={"/"}>
          <button className=" bg-pink-500 rounded-md text-white py-1 px-3 flex mt-4">
            Back
          </button>
        </Link>
      </div>
      <div className=" mt-12 grid grid-col-1 md:grid-cols-4 sm:grid-cols-2 justify-center items-center">
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
