import { RiPlayLine } from "react-icons/ri";
import { Miniver } from "next/font/google";

const miniver = Miniver({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className="w-full flex text-white p-10">
      <section className="about">
        <h1 className="font-greatvibes text-primary text-xl">About us</h1>
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
        <ul className="py-5 flex flex-wrap gap-2 text-base font font-light text-slate-300">
          <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
        <button className="text-white bg-primary py-4 px-8 rounded-full font-medium">
          Read More
        </button>
      </section>
      <section className="image"></section>
    </div>
  );
};

export default About;
