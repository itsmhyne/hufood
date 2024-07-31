"use client";
import Image from "next/image";
import logoSai from "../../../public/img/logo-sai.png";
import {
  RiBarChart2Line,
  RiBardLine,
  RiMenu2Line,
  RiSearch2Line,
  RiShoppingBag2Line,
  RiShoppingBagLine,
  RiShoppingCartLine,
  RiUser2Line,
  RiUser3Line,
} from "react-icons/ri";
import Link from "next/link";

const menu = [
  "Beranda",
  "Konsep Bisnis",
  "Menu Kami",
  "Karir",
  "Berita",
  "Kontak",
];

function handleScroll() {
  const header = document.querySelector("header");
  const fixedNav = header!.offsetTop;
  console.log("yuhu");

  if (window.scrollY > fixedNav!) {
    header?.classList.add("navbar-fixed");
  } else {
    header?.classList.remove("navbar-fixed");
  }
}

export const Navbar = () => (
  <header
    className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
    onScrollCapture={handleScroll}
  >
    <div className="container">
      <div className="flex items-center justify-between relative">
        <div className="px-4 py-6">
          <Image src={logoSai} alt="logo" width={50} height={50} />
        </div>
        <div className="flex items-center px-4">
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
);

// components/Navbar.js
// import Link from "next/link";

// export const Navbar = () => {
//   return (
//     <nav className="bg-transparent w-full fixed top-0 z-50">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>
//           {/* <div className="w-full flex items-center bg-slate-300 justify-between sm:items-stretch sm:justify-start"> */}
//           <div className="w-full flex items-center justify-between">
//             <div className="flex-shrink-0">
//               <Image src={logoSai} alt="logo" width={50} height={50} />
//             </div>
//             <div className="w-3/5 hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
//                 <div className="flex gap-5">
//                   {menu.map((item, index) => (
//                     <Link
//                       key={index}
//                       href={""}
//                       className={`text-xs font-light text-[#333333] hover:border-neutral-800 hover:border-b-2`}
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-3 w-1/4 justify-end">
//               <RiSearch2Line className="lg:text-white" />
//               <RiUser3Line className="lg:text-white" />
//               <RiShoppingBagLine className="lg:text-white" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
