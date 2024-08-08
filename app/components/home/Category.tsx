import Image from "next/image";
import item1 from "./../../../public/img/home/cfi1.png";
import item2 from "./../../../public/img/home/cfi2.png";
import item3 from "./../../../public/img/home/cfi3.png";
import item4 from "./../../../public/img/home/cfi4.png";
export const Category = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-primary font-greatvibes text-2xl">
        Food Category
      </h1>
      <h1 className="text-center text-white font-bold text-3xl mt-2">
        <span className="text-primary">Ch</span>oose Food Item
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-10 text-center">
        <Image src={item1} alt={"item1"} />
        <Image src={item2} alt={"item2"} />
        <Image src={item3} alt={"item3"} />
        <Image src={item4} alt={"item4"} />
      </div>
    </div>
  );
};
