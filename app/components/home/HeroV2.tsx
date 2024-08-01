import Image from "next/image";
import BgItemHero from "../../../public/img/item-hero.png";
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import NavbarV2 from "../globals/NavbarV2";

const HeroV2 = () => {
  return (
    <div className="bg-hero-pattern w-screen bg-cover bg-center h-screen flex items-center justify-center relative px-10">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 flex flex-wrap items-center">
        <div className="w-full flex items-center justify-center gap-3">
          <hr className="w-28 h-1" />
          <RiFacebookFill className="text-white" />
          <RiYoutubeFill className="text-primary" />
          <RiInstagramFill className="text-white" />
          <hr className="w-28 h-1" />
        </div>
        <div className="w-full flex flex-wrap py-10">
          <h1 className="text-primary font-greatvibes text-xl tracking-wider">
            It&apos;s Quick & Amusing!
          </h1>
          <h1 className="text-white font-bold text-5xl my-5">
            <span className="text-primary">Th</span>e art of speed food Quality
          </h1>
          <h3 className="text-base font-medium text-slate-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ut
            saepe nobis eos? Placeat, deleniti!
          </h3>
          <button className="text-white bg-primary py-4 px-8 rounded-full font-medium mt-10">
            See Menu
          </button>
        </div>
        <Image src={BgItemHero} alt={"hero item"} className="hidden" />
      </div>
    </div>
  );
};

export default HeroV2;
