import React from "react";
import { RiDrinksLine } from "react-icons/ri";

export const ChooseUs = () => {
  return (
    <div className="p-10">
      <div className="kiri w-full"></div>
      <div className="kanan w-full">
        <h1 className="font-greatvibes text-primary text-xl">Why Choose us</h1>
        <h1 className="text-white font-bold text-3xl py-5">
          <span className="text-primary">Ex</span>ta ordinary taste And
          Experienced
        </h1>
        <h3 className="text-base font-medium text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          praesentium officiis illum inventore magnam asperiores temporibus
          totam tempore at a, non perspiciatis facere quidem consequuntur vero,
          molestias perferendis ab quam?
        </h3>
        <div className="detail flex py-5 gap-4">
          <div className="bg-primary p-5 rounded-md">
            <RiDrinksLine className="text-white text-2xl" />
          </div>
          <div className="bg-primary p-5 rounded-md">
            <RiDrinksLine className="text-white text-2xl" />
          </div>
          <div className="bg-primary p-5 rounded-md">
            <RiDrinksLine className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
