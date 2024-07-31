import React from "react";

export const Category = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-primary font-greatvibes text-xl">
        Food Category
      </h1>
      <h1 className="text-center text-white font-bold text-3xl mt-2">
        <span className="text-primary">Ch</span>oose Food Item
      </h1>
      <div className="flex flex-wrap gap-4 mt-10">
        <div className="box w-full h-[329px] lg:w-[306px] bg-sky-500 rounded-md"></div>
        <div className="box w-full h-[329px] lg:w-[306px] bg-sky-500 rounded-md"></div>
        <div className="box w-full h-[329px] lg:w-[306px] bg-sky-500 rounded-md"></div>
        <div className="box w-full h-[329px] lg:w-[306px] bg-sky-500 rounded-md"></div>
      </div>
    </div>
  );
};
