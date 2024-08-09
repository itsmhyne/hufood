import Image from "next/image";
import ab1 from "./../../../public/img/home/ab1.png";
import ab2 from "./../../../public/img/home/ab2.png";
import ab3 from "./../../../public/img/home/ab3.png";
import wcu1 from "./../../../public/img/home/wcu1.png";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const ChoosePick = () => {
  return (
    <div className="p-10 w-full">
      <h1 className="text-center font-greatvibes text-primary text-2xl">
        Choose & Pick
      </h1>
      <h1 className="text-center text-white font-bold text-3xl py-5">
        <span className="text-primary">Fr</span>om Our Menu
      </h1>

      <div className="slider mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-slate-300">Breakfast</h3>
          <div className="navigator flex">
            <RiArrowLeftSLine className="text-slate-300" />
            <RiArrowRightSLine className="text-primary" />
          </div>
        </div>
        <hr className="bg-slate-500 mt-4" />
      </div>
      <div className="menu mt-5 flex flex-wrap gap-4">
        <div className="menu flex gap-3">
          <Image
            src={ab1}
            alt="food"
            className="bg-contain w-20 h-20 rounded-md"
          />
          <div className="text-white">
            <h1 className="font-bold tracking-wide">Lectuce Leaf</h1>
            <p className="text-neutral-300 font-light">
              Lorem ipsum dolor sit amet.
            </p>
            <h4 className="text-primary font-bold">Rp.12.500,00</h4>
          </div>
        </div>
        <div className="menu flex gap-3">
          <Image
            src={ab2}
            alt="food"
            className="bg-contain w-20 h-20 rounded-md"
          />
          <div className="text-white">
            <h1 className="font-bold tracking-wide">Fresh Breakfast</h1>
            <p className="text-neutral-300 font-light">
              Lorem ipsum dolor sit amet.
            </p>
            <h4 className="text-primary font-bold">Rp.12.500,00</h4>
          </div>
        </div>
        <div className="menu flex gap-3">
          <Image
            src={ab3}
            alt="food"
            className="bg-contain w-20 h-20 rounded-md"
          />
          <div className="text-white">
            <h1 className="font-bold tracking-wide">Mild Butter</h1>
            <p className="text-neutral-300 font-light">
              Lorem ipsum dolor sit amet.
            </p>
            <h4 className="text-primary font-bold">Rp.12.500,00</h4>
          </div>
        </div>
        <div className="menu flex gap-3">
          <Image
            src={wcu1}
            alt="food"
            className="bg-contain w-20 h-20 rounded-md"
          />
          <div className="text-white">
            <h1 className="font-bold tracking-wide">Fresh Bread</h1>
            <p className="text-neutral-300 font-light">
              Lorem ipsum dolor sit amet.
            </p>
            <h4 className="text-primary font-bold">Rp.12.500,00</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
