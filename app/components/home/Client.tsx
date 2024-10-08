import React from "react";
import { IoFastFood, IoPizzaOutline } from "react-icons/io5";
import { PiChefHat, PiForkKnife } from "react-icons/pi";

const Client = () => {
  return (
    <div className="bg-home-client w-full h-[500] bg-fixed bg-center flex items-center justify-center relative px-10 py-10">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="w-full flex flex-wrap relative z-10 items-center gap-5">
        <div className="w-[45%] flex flex-wrap text-center">
          <PiChefHat className="text-primary w-full h-10" />
          <span className="text-base font-normal text-slate-300 w-full">
            Professional Chef
          </span>
          <span className="text-slate-100 font-normal w-full">420</span>
        </div>
        <div className="w-[45%] flex flex-wrap text-center">
          <IoFastFood className="text-primary w-full h-10" />
          <span className="text-sm font-normal text-slate-300 w-full">
            Items of Food
          </span>
          <span className="text-slate-100 font-normal w-full">320</span>
        </div>
        <div className="w-[45%] flex flex-wrap text-center">
          <PiForkKnife className="text-primary w-full h-10" />
          <span className="text-base font-normal text-slate-300 w-full">
            Years of Experience
          </span>
          <span className="text-slate-100 font-normal w-full">30+</span>
        </div>
        <div className="w-[45%] flex flex-wrap text-center">
          <IoPizzaOutline className="text-primary w-full h-10" />
          <span className="text-base font-normal text-slate-300 w-full">
            Happy Customers
          </span>
          <span className="text-slate-100 font-normal w-full">220</span>
        </div>
      </div>
      {/* <div className="w-full relative z-10 items-center gap-5 grid grid-cols-2">
        <div className="w-full flex flex-wrap text-center">
          <PiChefHat className="text-primary w-full h-10" />
          <span className="text-base font-normal text-slate-300 w-full">
            Professional Chef
          </span>
          <span className="text-slate-100 font-normal w-full">420</span>
        </div>
        <div className="w-full flex flex-wrap text-center">
          <IoFastFood className="text-primary w-full h-10" />
          <span className="text-sm font-normal text-slate-300 w-full">
            Items of Food
          </span>
          <span className="text-slate-100 font-normal w-full">320</span>
        </div>
        <div className="w-full flex flex-wrap text-center">
          <PiForkKnife className="text-primary w-full h-10" />
          <span className="text-base font-normal text-slate-300 w-full">
            Years of Experience
          </span>
          <span className="text-slate-100 font-normal w-full">30+</span>
        </div>
        <div className="w-full flex flex-wrap text-center">
          <IoPizzaOutline className="text-primary w-full h-10" />
          <span className="text-base font-normal text-slate-300 w-full">
            Happy Customers
          </span>
          <span className="text-slate-100 font-normal w-full">220</span>
        </div>
      </div> */}
    </div>
  );
};

export default Client;
