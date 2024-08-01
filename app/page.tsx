import NavbarV2 from "./components/globals/NavbarV2";
import About from "./components/home/About";
import { Category } from "./components/home/Category";
import { ChooseUs } from "./components/home/ChooseUs";
import Client from "./components/home/Client";
import HeroV2 from "./components/home/HeroV2";

export default function Home() {
  const itemsCarousel: string[] = ["slide 1", "slide 2", "slide 3"];
  return (
    <div className="bg-black">
      <HeroV2 />
      <About />
      <Category />
      <ChooseUs />
      <Client />
    </div>
  );
}
