import Image from "next/image";
import imgComment from "../../../public/img/home/testi.png";
import { GrBlockQuote } from "react-icons/gr";
import { BsQuote } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { RiStarFill } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div className="p-10 flex flex-wrap">
      <section className="title">
        <h1 className="font-greatvibes text-primary text-2xl">Testimonials</h1>
        <h1 className="text-slate-100 font-bold text-3xl py-5">
          <span className="text-primary">Wh</span>at our client are saying
        </h1>
      </section>
      <div className="w-full flex flex-wrap gap-4 items-center text-center justify-center mt-10 bg-white p-5 rounded-lg">
        <Image
          src={imgComment}
          alt="user avatar"
          className="rounded-full"
          width={100}
        />
        <FaQuoteRight className="text-primary w-full" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          officia distinctio veritatis laborum at, modi deserunt saepe obcaecati
          nesciunt aliquam?
        </p>
        <div className="rating flex">
          <RiStarFill className="text-primary" />
          <RiStarFill className="text-primary" />
          <RiStarFill className="text-primary" />
          <RiStarFill className="text-primary" />
          <RiStarFill className="text-slate-400" />
        </div>
        <div className="comment w-full">
          <h3 className="font-bold text-xl">John Doe</h3>
          <p className="font-thin text-xs">Food Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
