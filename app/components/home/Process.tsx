import React from "react";
import { IoFastFood, IoPizzaOutline } from "react-icons/io5";
import { PiChefHat, PiForkKnife } from "react-icons/pi";
import { RiPlayLine } from "react-icons/ri";

const Process = () => {
  return (
    <div className="bg-home-process w-full h-[500] bg-fixed bg-center flex items-center justify-center relative px-10 py-10">
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="w-full flex flex-wrap relative z-10 text-end gap-5 justify-end">
        <h1 className="font-greatvibes text-primary text-2xl">
          Restaurant Active Process
        </h1>
        <h1 className="text-white font-bold text-3xl py-2 text-end">
          <span className="text-primary">We </span>Document Every Food Bean
          Process untile it is saved.
        </h1>
        <p className="text-slate-400 text-xs pb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          corporis nesciunt repudiandae mollitia nihil voluptatum reprehenderit.
          Nisi ea quam at.
        </p>
        <div className="button">
          <button className="text-white border border-primary py-4 px-8 rounded-full font-medium">
            Read More
          </button>
          <button className="text-white bg-primary py-4 px-8 rounded-full font-medium ml-4">
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
