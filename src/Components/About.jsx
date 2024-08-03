import React from "react";
import pic from "./../assets/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-5 bg-[#1ABC9C] py-20 px-10">
      <h1 className="uppercase text-3xl text-center font-bold py-4 text-white">
        about component
      </h1>
      <div className="flex justify-center items-center">
        <div className="line m-3 w-20 h-1 bg-white"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="line m-3 w-20 h-1 bg-white"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
