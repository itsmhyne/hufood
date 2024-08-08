import { RiPlayLine } from "react-icons/ri";
import { Miniver } from "next/font/google";
import Image from "next/image";
import bgWCU1 from "./../../../public/img/home/ab1.png";
import bgWCU2 from "./../../../public/img/home/ab2.png";
import bgWCU3 from "./../../../public/img/home/ab3.png";

const miniver = Miniver({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className="w-full flex flex-wrap text-white p-10 md:items-center">
      <section className="about w-full md:w-1/2 md:p-3">
        <h1 className="font-greatvibes text-primary text-2xl">About us</h1>
        <h1 className="text-white font-bold text-3xl py-5">
          <span className="text-primary">We </span>created the best foody
          product
        </h1>
        <h3 className="text-base font-medium text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          praesentium officiis illum inventore magnam asperiores temporibus
          totam tempore at a, non perspiciatis facere quidem consequuntur vero,
          molestias perferendis ab quam?
        </h3>
        <ul className="pt-5 pb-10 flex flex-wrap gap-2 text-base font font-light text-slate-300">
          <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
        <button className="text-white bg-primary py-4 px-8 rounded-full font-medium">
          Read More
        </button>
      </section>
      <div className="w-full flex flex-wrap mt-10 md:mt-0 md:w-1/2 gap-2">
        <Image src={bgWCU1} alt={"gambar1"} className="rounded-md w-full" />
        <Image src={bgWCU2} alt={"gambar1"} className="rounded-md w-[48%]" />
        <Image src={bgWCU3} alt={"gambar1"} className="rounded-md w-[48%]" />
      </div>
      {/* <section className="w-full image grid grid-rows-2 mt-10 gap-2 md:w-1/2 md:p-3">
        <Image src={bgWCU1} alt={"gambar1"} className="col-span-2" />
        <Image src={bgWCU2} alt={"gambar1"} className="rounded-md" />
        <Image src={bgWCU3} alt={"gambar1"} className="rounded-md" />
      </section> */}
    </div>
  );
};

export default About;
