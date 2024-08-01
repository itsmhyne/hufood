import React from "react";
import { IoFastFood, IoPizzaOutline } from "react-icons/io5";
import { PiChefHat, PiForkKnife } from "react-icons/pi";

const Client = () => {
  return (
    <div className="bg-home-client w-full h-[468] bg-cover bg-center flex items-center justify-center relative px-10 py-32">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="w-full relative z-10 items-center gap-5 grid grid-cols-2">
        <div className="w-full flex flex-wrap text-center">
          <PiChefHat className="text-primary w-full h-10" />
          <h1 className="text-white font-medium w-full">Professional Chef</h1>
          <h1 className="text-white font-bold w-full">420</h1>
        </div>
        <div className="w-full flex flex-wrap text-center">
          <IoFastFood className="text-primary w-full h-10" />
          <h1 className="text-white font-medium w-full">Items of Food</h1>
          <h1 className="text-white font-bold w-full">320</h1>
        </div>
        <div className="w-full flex flex-wrap text-center">
          <PiForkKnife className="text-primary w-full h-10" />
          <h1 className="text-white font-medium w-full">Years of Experience</h1>
          <h1 className="text-white font-bold w-full">30+</h1>
        </div>
        <div className="w-full flex flex-wrap text-center">
          <IoPizzaOutline className="text-primary w-full h-10" />
          <h1 className="text-white font-medium w-full">Happy Customers</h1>
          <h1 className="text-white font-bold w-full">220</h1>
        </div>
      </div>
    </div>
  );
};

export default Client;
