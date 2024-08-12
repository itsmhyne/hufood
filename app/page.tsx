import Image from "next/image";
import BgItemHero from "../public/img/item-hero.png";
// about us
import bgWCU1 from "../public/img/home/ab1.png";
import bgWCU2 from "../public/img/home/ab2.png";
import bgWCU3 from "../public/img/home/ab3.png";
// choose food item
import item1 from "../public/img/home/cfi1.png";
import item2 from "../public/img/home/cfi2.png";
import item3 from "../public/img/home/cfi3.png";
import item4 from "../public/img/home/cfi4.png";
// why choose us
import img1 from "../public/img/home/wcu1.png";
import img2 from "../public/img/home/wcu2.png";
import img3 from "../public/img/home/wcu3.png";
import img4 from "../public/img/home/wcu4.png";
import img5 from "../public/img/home/wcu5.png";
import img6 from "../public/img/home/wcu6.png";
// choose & pick
import ab1 from "../public/img/home/ab1.png";
import ab2 from "../public/img/home/ab2.png";
import ab3 from "../public/img/home/ab3.png";
import wcu1 from "../public/img/home/wcu1.png";
// staff
import staff1 from "../public/img/home/s1.png";
import staff2 from "../public/img/home/s2.png";
import staff3 from "../public/img/home/s3.png";
import staff4 from "../public/img/home/s4.png";
// testimonial
import imgComment from "../public/img/home/testi.png";
// icon
import { IoFastFood, IoPizzaOutline } from "react-icons/io5";
import { PiChefHat, PiForkKnife } from "react-icons/pi";
import {
  RiDrinksLine,
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
  RiThumbUpLine,
  RiMessage2Line,
  RiShare2Line,
  RiShareLine,
  RiHistoryLine,
} from "react-icons/ri";
import { TbBurger } from "react-icons/tb";
import { LuCookie } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa";
import { HandThumbUpIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="bg-black">
      {/* hero section */}
      <section className="bg-hero-pattern w-screen bg-cover bg-center h-screen flex items-center justify-center relative px-10 bg-fixed">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 flex flex-wrap items-center">
          <div className="w-full flex items-center justify-center gap-3 md:w-[17%] md:rotate-90">
            <hr className="w-28 h-1" />
            <RiFacebookFill className="text-white" />
            <RiYoutubeFill className="text-primary" />
            <RiInstagramFill className="text-white" />
            <hr className="w-28 h-1" />
          </div>
          <div className="w-full flex flex-wrap py-10 md:w-1/2">
            <h1 className="text-primary font-greatvibes text-3xl tracking-wider">
              It&apos;s Quick & Amusing!
            </h1>
            <h1 className="text-white font-bold text-6xl my-5">
              <span className="text-primary">Th</span>e art of speed food
              Quality
            </h1>
            <h3 className="text-base font-medium text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              ut saepe nobis eos? Placeat, deleniti!
            </h3>
            <button className="text-white bg-primary py-4 px-8 rounded-full text-base mt-10">
              See Menu
            </button>
          </div>
          <Image
            src={BgItemHero}
            alt={"hero item"}
            className="hidden md:block md:w-[33%]"
          />
        </div>
      </section>
      {/* end hero section */}

      {/* about section */}
      <section className="w-full flex flex-wrap text-white p-10 md:items-center">
        <section className="about w-full md:w-1/2 md:p-3">
          <h1 className="font-greatvibes text-primary text-3xl">About us</h1>
          <h1 className="text-white font-bold text-5xl py-5">
            <span className="text-primary">We </span>created the best foody
            product
          </h1>
          <h3 className="text-base font-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            praesentium officiis illum inventore magnam asperiores temporibus
            totam tempore at a, non perspiciatis facere quidem consequuntur
            vero, molestias perferendis ab quam?
          </h3>
          <ul className="pt-5 pb-10 flex flex-wrap gap-2 text-lg font font-light text-white">
            <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>✔ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          </ul>
          <button className="text-white bg-primary py-4 px-8 rounded-full text-base">
            Read More
          </button>
        </section>
        <div className="w-full flex flex-wrap mt-10 md:mt-0 md:w-1/2 gap-2">
          <Image src={bgWCU1} alt={"gambar1"} className="rounded-md w-full" />
          <Image src={bgWCU2} alt={"gambar1"} className="rounded-md w-[48%]" />
          <Image src={bgWCU3} alt={"gambar1"} className="rounded-md w-[48%]" />
        </div>
      </section>
      {/* end about section */}

      {/* category section */}
      <section className="p-10">
        <h1 className="text-center text-primary font-greatvibes text-3xl">
          Food Category
        </h1>
        <h1 className="text-center text-white font-bold text-5xl mt-2">
          <span className="text-primary">Ch</span>oose Food Item
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-10 text-center">
          <Image src={item1} alt={"item1"} />
          <Image src={item2} alt={"item2"} />
          <Image src={item3} alt={"item3"} />
          <Image src={item4} alt={"item4"} />
        </div>
      </section>
      {/* end category section */}

      {/* why choose us section */}
      <section className="p-10 lg:flex pb-36">
        <div className="w-full lg:w-1/2 grid grid-cols-6 gap-2">
          <Image
            src={img1}
            alt="image1"
            className="row-start-1 row-end-4 col-span-3"
          />
          <Image
            src={img2}
            alt="image2"
            className="row-span-2 row-start-2 col-start-4 col-span-3"
          />
          <Image
            src={img3}
            alt="image3"
            className="row-start-4 row-end-6 col-span-2 row-span-4"
          />
          <Image src={img4} alt="image4" className="col-start-3 col-span-2" />
          <Image src={img5} alt="image5" className="col-span-2" />
          <Image src={img6} alt="image6" className="col-start-5 col-span-2" />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="font-greatvibes text-primary text-3xl">
            Why Choose us
          </h1>
          <h1 className="text-white font-bold text-5xl py-5">
            <span className="text-primary">Ex</span>ta ordinary taste And
            Experienced
          </h1>
          <h3 className="text-base text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            praesentium officiis illum inventore magnam asperiores temporibus
            totam tempore at a, non perspiciatis facere quidem consequuntur
            vero, molestias perferendis ab quam?
          </h3>
          <div className="detail flex py-10 gap-4">
            <div className="text-center">
              <div className="bg-primary p-5 rounded-md">
                <TbBurger className="text-white text-2xl w-12 h-12" />
              </div>
              <span className="text-white">Fast Food</span>
            </div>
            <div className="text-center">
              <div className="bg-primary p-5 rounded-md">
                <LuCookie className="text-white text-2xl w-12 h-12" />
              </div>
              <span className="text-white">Lunch</span>
            </div>
            <div className="text-center">
              <div className="bg-primary p-5 rounded-md">
                <RiDrinksLine className="text-white text-2xl w-12 h-12" />
              </div>
              <span className="text-white">Dinner</span>
            </div>
          </div>
          <div className="relative flex gap-4 px-10 py-2 items-center w-min">
            <div className="absolute inset-0 bg-primary rounded-lg"></div>
            <div className="absolute inset-0 bg-white ml-2 rounded-tr-lg rounded-br-lg"></div>
            <h1 className="text-primary font-semibold text-5xl relative z-10">
              30+
            </h1>
            <div className="relative z-10">
              <h3 className="font-normal text-lg">Years of</h3>
              <h2 className="font-black text-2xl">Experienced</h2>
            </div>
          </div>
        </div>
      </section>
      {/* end why choose us section */}

      {/* client section */}
      <section className="bg-home-client w-full h-[500] bg-fixed bg-center flex items-center justify-center relative px-10 py-10">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="w-full flex flex-wrap relative z-10 items-center gap-5">
          <div className="w-[45%] flex flex-wrap text-center justify-center">
            <PiChefHat className="text-primary w-32 h-32" />
            <span className="text-2xl text-white w-full">
              Professional Chef
            </span>
            <span className="text-white font-normal text-4xl w-full">420</span>
          </div>
          <div className="w-[45%] flex flex-wrap text-center justify-center">
            <IoFastFood className="text-primary w-32 h-32" />
            <span className="text-sm font-normal text-white w-full">
              Items of Food
            </span>
            <span className="text-white font-normal text-4xl w-full">320</span>
          </div>
          <div className="w-[45%] flex flex-wrap text-center justify-center">
            <PiForkKnife className="text-primary w-full h-10" />
            <span className="text-base font-normal text-white w-full">
              Years of Experience
            </span>
            <span className="text-white font-normal text-4xl w-full">30+</span>
          </div>
          <div className="w-[45%] flex flex-wrap text-center justify-center">
            <IoPizzaOutline className="text-primary w-full h-10" />
            <span className="text-base font-normal text-white w-full">
              Happy Customers
            </span>
            <span className="text-white font-normal text-4xl w-full">220</span>
          </div>
        </div>
      </section>
      {/* end client section */}

      {/* choose & pick */}
      <section className="p-10 w-full">
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
      </section>
      {/* end choose & pick */}

      {/* staff */}
      <section className="p-10 flex flex-wrap justify-center">
        <h1 className="text-center text-primary font-greatvibes text-2xl w-full">
          Staff
        </h1>
        <h1 className="text-center text-white font-bold text-3xl mt-2 w-full">
          <span className="text-primary">Me</span>eet Our Staff
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-10 text-center">
          <Image src={staff1} alt={"staff1"} />
          <Image src={staff2} alt={"staff2"} />
          <Image src={staff3} alt={"staff3"} />
          <Image src={staff4} alt={"staff4"} />
        </div>

        <button className="bg-transparent text-white border border-primary  py-4 px-8 rounded-full font-medium mt-10">
          See More
        </button>
      </section>
      {/* end staff */}

      {/* testimonial */}
      <section className="p-10 flex flex-wrap">
        <section className="title">
          <h1 className="font-greatvibes text-primary text-2xl">
            Testimonials
          </h1>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos officia distinctio veritatis laborum at, modi deserunt
            saepe obcaecati nesciunt aliquam?
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
      </section>
      {/* end testimonial */}

      {/* restaurant active process */}
      <section className="bg-home-process w-full h-[500] bg-fixed bg-center flex items-center justify-center relative px-10 py-10">
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="w-full flex flex-wrap relative z-10 text-end gap-5 justify-end">
          <h1 className="font-greatvibes text-primary text-2xl">
            Restaurant Active Process
          </h1>
          <h1 className="text-white font-bold text-3xl py-2 text-end">
            <span className="text-primary">We </span>Document Every Food Bean
            Process untile it is saved.
          </h1>
          <p className="text-slate-400 text-xs pb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            corporis nesciunt repudiandae mollitia nihil voluptatum
            reprehenderit. Nisi ea quam at.
          </p>
          <div className="button flex">
            <button className="text-white border border-primary py-4 px-8 rounded-full font-medium">
              Read More
            </button>
            <button className="text-white bg-primary py-4 px-8 rounded-full font-medium ml-4">
              Play Video
            </button>
          </div>
        </div>
      </section>
      {/* end restaurant active process */}

      {/* blog */}
      <section className="p-10">
        <h1 className="text-center text-primary font-greatvibes text-3xl">
          Blog
        </h1>
        <h1 className="text-center text-white font-bold text-5xl mt-2">
          <span className="text-primary">La</span>test News & Blog
        </h1>
        <div className="w-full flex flex-wrap gap-4 mt-10">
          <div className="box border border-white rounded-md">
            <Image src={item1} alt="item1" />
            <div className="desc p-5">
              <span className="text-primary text-base">02 November 2023</span>
              <h5 className="text-white text-2xl py-3">
                Lorem ipsum dolor sit amet.
              </h5>
              <div className="subdesc flex justify-between items-center">
                <span className="text-base text-white">Learn More</span>
                <div className="icon flex gap-2">
                  <RiThumbUpLine className="text-white" />
                  <RiMessage2Line className="text-primary" />
                  <RiShareLine className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="box border border-white rounded-md">
            <Image src={item2} alt="item2" />
            <div className="desc p-5">
              <span className="text-primary text-base">02 November 2023</span>
              <h5 className="text-white text-2xl py-3">
                Lorem ipsum dolor sit amet.
              </h5>
              <div className="subdesc flex justify-between items-center">
                <span className="text-base text-white">Learn More</span>
                <div className="icon flex gap-2">
                  <RiThumbUpLine className="text-white" />
                  <RiMessage2Line className="text-primary" />
                  <RiShareLine className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="box border border-white rounded-md">
            <Image src={item3} alt="item3" />
            <div className="desc p-5">
              <span className="text-primary text-base">02 November 2023</span>
              <h5 className="text-white text-2xl py-3">
                Lorem ipsum dolor sit amet.
              </h5>
              <div className="subdesc flex justify-between items-center">
                <span className="text-base text-white">Learn More</span>
                <div className="icon flex gap-2">
                  <RiThumbUpLine className="text-white" />
                  <RiMessage2Line className="text-primary" />
                  <RiShareLine className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end blog */}

      {/* footer */}
      <section className="p-10">
        <div className="subscribe">
          <h4 className="text-white text-3xl">
            <span className="text-primary">St</span>ill You Need Our Support ?
          </h4>
          <p className="text-base text-white font-normal mt-5">
            Don&apos;t wait make a smart & logical quote here. Its pretty easy.
          </p>
          <div className="sub flex mt-10 w-full">
            <input
              type="text"
              name="email"
              id="email"
              className="bg-primary text-white px-4 py-2 text-base placeholder:text-white placeholder:font-light placeholder:text-xs"
              placeholder="Enter Your Email"
            />
            <button className="bg-white text-primary text-base text-nowrap px-2">
              Subscribe
            </button>
          </div>
          <div className="footer-bottom">
            <div className="about">
              <h5 className="textlg">About us</h5>
            </div>
          </div>
        </div>
        <hr className="border-primary my-10" />
        <div className="about-us">
          <h5 className="text-white text-2xl">About Us.</h5>
          <p className="text-white my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            libero quia fugiat aut assumenda et accusamus doloribus eveniet
            temporibus eaque.
          </p>
          <div className="flex gap-4 items-center">
            <div className="bg-primary p-4 rounded-sm">
              <RiHistoryLine className="text-white w-8 h-8" />
            </div>
            <div className="text-white flex flex-wrap gap-2">
              <h4 className="text-lg">Opening Houres</h4>
              <h6 className="text-base">Mon - Sat(8.00-22.00)</h6>
            </div>
          </div>
        </div>
        <div className="useful-links text-white my-5">
          <h5 className="text-2xl">Useful Links</h5>
          <h4 className="mt-4 text-base">About</h4>
          <h4 className="mt-4 text-base">News</h4>
          <h4 className="mt-4 text-base">Partners</h4>
          <h4 className="mt-4 text-base">Team</h4>
          <h4 className="mt-4 text-base">Menu</h4>
          <h4 className="mt-4 text-base">Contacts</h4>
        </div>
        <div className="help text-white my-5">
          <h5 className="text-2xl">Help?</h5>
          <h4 className="mt-4 text-base">FAQ</h4>
          <h4 className="mt-4 text-base">Terms & conditions</h4>
          <h4 className="mt-4 text-base">Reporting</h4>
          <h4 className="mt-4 text-base">Documentation</h4>
          <h4 className="mt-4 text-base">Support Policy</h4>
          <h4 className="mt-4 text-base">Privacy</h4>
        </div>
      </section>
      {/* end footer */}

      {/* padding bottom */}
      <div className="pb-[500px]"></div>
    </div>
    // <div className="bg-black">
    //   <HeroV2 />
    //   <About />
    //   <Category />
    //   <ChooseUs />
    //   <Client />
    //   <ChoosePick />
    //   <Staff />
    //   <Testimonial />
    //   <Process />
    //   <div className="pb-[500px]"></div>
    // </div>
  );
}
