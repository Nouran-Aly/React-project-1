import React from "react";
import pic from "./../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 bg-[#1ABC9C] h-[80vh] ">
      <img src={pic} className="w-60" alt="" />
      <span className="text-white text-3xl font-bold uppercase">
        Start Framework
      </span>
      <div className="flex justify-center items-center">
        <div className="line m-3 w-20 h-1 bg-white"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line m-3 w-20 h-1 bg-white"></div>
      </div>
      <p className="font-medium text-white">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
