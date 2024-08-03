import React from "react";
import pic1 from "./../assets/poert1.png";
import pic2 from "./../assets/port2.png";
import pic3 from "./../assets/port3.png";

export default function Portfolio() {
  return (
    <div className="h-full my-8">
      <h1 className="uppercase text-3xl text-center font-bold py-4 text-[#2C3E50]">
        portfolio component
      </h1>
      <div className="flex justify-center items-center">
        <div className="line m-3 w-20 h-1 bg-[#2C3E50]"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line m-3 w-20 h-1 bg-[#2C3E50]"></div>
      </div>
      <div className="mx-20 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="overlay">
          <img className="p-img rounded-lg" src={pic1} alt="" />
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="overlay">
          <img className="p-img rounded-lg" src={pic2} alt="" />
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="overlay">
          <img className="p-img rounded-lg" src={pic3} alt="" />
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="overlay">
          <img className="p-img rounded-lg" src={pic1} alt="" />
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="overlay">
          <img className="p-img rounded-lg" src={pic2} alt="" />
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="overlay">
          <img className="p-img rounded-lg" src={pic3} alt="" />
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
}
