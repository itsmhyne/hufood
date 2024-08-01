import Image from "next/image";
import React from "react";
import { RiDrinksLine } from "react-icons/ri";
import img1 from "../../../public/img/home/wcu1.png";
import img2 from "../../../public/img/home/wcu2.png";
import img3 from "../../../public/img/home/wcu3.png";
import img4 from "../../../public/img/home/wcu4.png";
import img5 from "../../../public/img/home/wcu5.png";
import img6 from "../../../public/img/home/wcu6.png";
import { CiBurger } from "react-icons/ci";
import { LuCookie } from "react-icons/lu";

export const ChooseUs = () => {
  return (
    <div className="p-10 lg:flex pb-36">
      <div className="w-full lg:w-1/2 grid grid-cols-6 gap-4">
        <Image
          src={img1}
          alt="image1"
          className="row-start-1 row-end-4 col-span-3"
        />
        <Image
          src={img2}
          alt="image2"
          className=" row-span-2 row-start-2 col-span-3"
        />
        <Image
          src={img3}
          alt="image3"
          className=" row-start-4 row-end-6 col-span-2 row-span-4"
        />
        <Image src={img4} alt="image4" className="col-start-3 col-span-2" />
        <Image src={img5} alt="image5" className="col-span-2" />
        <Image src={img6} alt="image6" className="col-start-5 col-span-2" />
      </div>
      {/* <div className="w-full grid grid-rows-4 grid-flow-col gap-3"> */}
      {/* <Image src={img1} alt="image1" className="row-span-2" /> */}
      {/* <Image src={img2} alt="image2" className="row-end-2" /> */}
      {/* <Image src={img3} alt="image3" className="row-start-2" /> */}
      {/* <Image src={img4} alt="image4" /> */}
      {/* <Image src={img5} alt="image5" /> */}
      {/* <Image src={img6} alt="image6" /> */}
      {/* </div> */}
      <div className="w-full lg:w-1/2">
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
        <div className="detail flex py-10 gap-4">
          <div className="bg-primary p-5 rounded-md">
            <CiBurger className="text-white text-2xl" />
          </div>
          <div className="bg-primary p-5 rounded-md">
            <LuCookie className="text-white text-2xl" />
          </div>
          <div className="bg-primary p-5 rounded-md">
            <RiDrinksLine className="text-white text-2xl" />
          </div>
        </div>
        <div className="relative flex gap-4 px-10 py-2 items-center w-min">
          <div className="absolute inset-0 bg-primary rounded-lg"></div>
          <div className="absolute inset-0 bg-white ml-2 rounded-tr-lg rounded-br-lg"></div>
          <h1 className="text-primary font-semibold text-2xl relative z-10">
            30+
          </h1>
          <div className="relative z-10">
            <h3 className="font-medium">Years of</h3>
            <h2 className="font-bold">Experienced</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
