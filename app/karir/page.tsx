import Image from "next/image";
import img1 from "../../public/img/home/wcu1.png";
import img2 from "../../public/img/home/wcu2.png";
import img3 from "../../public/img/home/wcu3.png";
import img4 from "../../public/img/home/wcu4.png";
import img5 from "../../public/img/home/wcu5.png";
import img6 from "../../public/img/home/wcu6.png";
const Karir = () => {
  return (
    <div className="container p-10">
      <div className="grid grid-cols-6 grid-rows-8 gap-2 grid-flow-col w-1/2">
        <Image
          src={img1}
          alt="image1"
          className="box col-span-4 row-start-1 row-end-4"
        />
        <Image
          src={img2}
          alt="image2"
          className="box bg-sky-500 col-span-2 col-start-5 row-start-2 row-end-4"
        />
        <Image
          src={img3}
          alt="image3"
          className="box row-start-4 row-end-8 col-span-4"
        />
        <Image
          src={img4}
          alt="image4"
          className="box bg-sky-500 col-start-5 row-start-4 row-end-7"
        />
        <Image
          src={img5}
          alt="image5"
          className="box bg-sky-500 col-start-6 row-span-4 row-start-4 row-end-6"
        />
        <Image
          src={img6}
          alt="image6"
          className="box bg-sky-500 col-start-6 row-span-4 row-start-6 row-end-8"
        />
      </div>
    </div>
  );
};

export default Karir;
