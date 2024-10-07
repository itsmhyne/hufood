import Image from "next/image";
import React from "react";
import BgItemHero from "../../public/img/item-hero.png";

const Menu = () => {
  return (
    <>
      {/* hero section */}
      <section className="bg-hero-pattern w-screen bg-cover bg-center h-60 flex items-center justify-center relative px-10 bg-fixed">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 flex flex-wrap items-center">
          {/* <div className="w-full flex items-center justify-center gap-3 md:w-[17%] md:rotate-90">
            <hr className="w-28 h-1" />
            <RiFacebookFill className="text-white" />
            <RiYoutubeFill className="text-primary" />
            <RiInstagramFill className="text-white" />
            <hr className="w-28 h-1" />
          </div> */}
          <div className="w-full flex flex-wrap py-10 md:w-1/2">
            <h1 className="text-primary font-greatvibes text-xl md:text-3xl tracking-wider">
              It&apos;s Quick & Amusing!
            </h1>
            <h1 className="text-white font-bold text-2xl md:text-6xl mt-5">
              <span className="text-primary">Th</span>e art of speed food
              Quality
            </h1>
            <h3 className="text-sm md:text-lg font-medium text-white mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              ut saepe nobis eos? Placeat, deleniti!
            </h3>
            <button className="text-white bg-primary py-3 px-6 rounded-full mt-10 text-xs md:text-base">
              See Menu
            </button>
          </div>
          <Image
            src={BgItemHero}
            alt={"hero item"}
            className="hidden md:block md:w-1/2"
          />
        </div>
      </section>
      {/* hero section */}
    </>
  );
};

export default Menu;
