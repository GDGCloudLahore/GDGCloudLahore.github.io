"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      url: "/",
      newPage: false,
    },
    {
      name: "GCP Mindmap",
      url: "https://cloudlahore.gumroad.com/",
      newPage: true,
    },
  ];

  return (
    <div className="hidden sm:flex fixed z-[100] h-[70px] bottom-[40px] left-[50%] transform translate-x-[-50%] bg-[#f8f8f8] border-2 border-[#dadada] rounded-[14px] p-[8px] justify-center items-center gap-2 shadow-lg">
      {links.map((item, i) => (
        <Link
          key={i}
          target={item.newPage ? "_blank" : "_self"}
          href={item.url}
          className={`${
            pathname === item.url
              ? "bg-black text-white"
              : "hover:bg-ghost hover:text-black"
          } relative h-full px-[30px] transition-all ease-in-out rounded-[10px] flex justify-center items-center text-[18px]`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
