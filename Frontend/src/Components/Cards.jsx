import React from "react";

const Cards = ({info}) => {
  return (
    <>
      <div>
        <div className="card md:w-80 bg-base-100 shadow-2xl w-full mt-7 hover:scale-105 duration-300 hover:shadow-md hover:shadow-pink-700">
          <figure>
            <img className="h-56 w-full"
              src={info.image}
              alt="books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {info.name}
              <div className="badge badge-secondary">{info.category}</div>
            </h2>
            <p>{info.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline text-lg">${info.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-black text-lg ">BuyNow</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
