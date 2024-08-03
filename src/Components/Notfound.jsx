import React from "react";
import notfound from "./../assets/notfound.png";

export default function Notfound() {
  return (
    <div className="flex justify-center items-center my-16">
      <img src={notfound} className="w-1/3" alt="" />
    </div>
  );
}
