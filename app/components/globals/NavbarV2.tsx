"use client";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

const NavbarV2 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses =
    "fixed w-full top-0 left-0 transition-all duration-300 ease-in-out";
  if (scrolled) {
    navbarClasses += " backdrop-blur-sm"; // Style when scrolled
  } else {
    navbarClasses += " bg-transparent"; // Style when at the top
  }

  return (
    <div
      className={`${navbarClasses} fixed top-0 z-20 w-full flex justify-between items-center p-10`}
    >
      <span className="text-primary font-bold font-inter">
        Hu<span className="text-white font-bold">Food</span>
      </span>
      <Bars3BottomRightIcon className="w-7 h-7 text-white" />
    </div>
  );
};

export default NavbarV2;
