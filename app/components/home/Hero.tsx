import Image from "next/image";
import bgHero from "../../../public/img/bg.png";
import food from "../../../public/img/food.png";
import { Miniver } from "next/font/google";

const miniver = Miniver({
  weight: "400",
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <section className="lg:h-screen flex items-center">
      <div className="w-full items-start flex flex-wrap justify-start px-10 md:w-1/2">
        <span className={miniver.className}>
          <span className="italic text-xs font-medium text-primary">
            Healthy & Jesty Food _____
          </span>
        </span>
        <h1 className="text-4xl font-bold tracking-wide leading-tight mt-2">
          Enjoy Healthy Life & Testy Food.
        </h1>
        <p className="text-xs text-neutral-600 pb-5 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          delectus quisquam optio, vel cupiditate consectetur?
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-primary py-2 px-6 text-white rounded-md text-sm font-medium">
            Show more
          </button>
          <button className="border border-primary py-2 px-6 text-primary rounded-md text-sm font-medium">
            Place an Order
          </button>
        </div>
      </div>
      <div className="w-full self-end relative md:w-1/2">
        <Image src={food} alt="blob" width={400} height={400} />
        <Image src={bgHero} alt="blob" className="absolute bottom-10 -z-20" />
      </div>
    </section>
  );
};
