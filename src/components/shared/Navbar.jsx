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
    },
    {
      name: "Blogs",
      url: "/blogs",
    },
    {
      name: "Learning",
      url: "/learning",
    },
    {
      name: "Roadmap",
      url: "/roadmap/cloud",
    },
    {
      name: "Opensource",
      url: "https://github.com/GDGCloudLahore",
    },
  ];

  return (
    <div className="hidden sm:flex fixed z-[100] h-[60px] bottom-[40px] left-[50%] transform translate-x-[-50%] bg-[#f8f8f8] border-2 border-[#dadada] rounded-[12px] p-[8px] justify-center items-center gap-2 shadow-lg">
      {links.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className={`${
            pathname === item.url
              ? "bg-black text-white"
              : "hover:bg-ghost hover:text-black"
          } relative h-full px-[16px] transition-all ease-in-out rounded-[8px] flex justify-center items-center`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
