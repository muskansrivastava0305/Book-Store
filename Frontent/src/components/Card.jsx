import React from "react";

function Card({ item }) {

  return (
    <div className=" m-4 flex gap-10">
      <div className="card bg-base-100 shadow-xl ">
        <figure>
          <img src={item.image} alt="Shoes" className=" bg-blue-100 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-3">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 p-3 cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
