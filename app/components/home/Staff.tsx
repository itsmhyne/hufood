import Image from "next/image";
import item1 from "./../../../public/img/home/s1.png";
import item2 from "./../../../public/img/home/s2.png";
import item3 from "./../../../public/img/home/s3.png";
import item4 from "./../../../public/img/home/s4.png";
export const Staff = () => {
  return (
    <div className="p-10 flex flex-wrap justify-center">
      <h1 className="text-center text-primary font-greatvibes text-2xl w-full">
        Staff
      </h1>
      <h1 className="text-center text-white font-bold text-3xl mt-2 w-full">
        <span className="text-primary">Me</span>eet Our Staff
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-center">
        <Image src={item1} alt={"item1"} />
        <Image src={item2} alt={"item2"} />
        <Image src={item3} alt={"item3"} />
        <Image src={item4} alt={"item4"} />
      </div>

      <button className="bg-transparent text-white border border-primary  py-4 px-8 rounded-full font-medium mt-10">
        See More
      </button>
    </div>
  );
};
