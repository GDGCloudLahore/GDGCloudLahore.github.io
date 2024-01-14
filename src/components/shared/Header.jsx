"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);

    if (!toggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const socials = [
    {
      name: "LinkedIn - GDG Cloud Lahore",
      icon: "/assets/icons/linkedin.svg",
      link: "https://www.linkedin.com/company/gdgcloudlahore/",
    },
    {
      name: "Instagram - GDG Cloud Lahore",
      icon: "/assets/icons/instagram.svg",
      link: "https://www.instagram.com/cloudlahoregdg/",
    },
  ];

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "GCP Mindmap",
      url: "https://cloudlahore.gumroad.com/",
    }
  ];

  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <Logo />

          {toggle ? (
            <X
              className="relative z-[100] block sm:hidden mt-[6px]"
              onClick={handleToggle}
            />
          ) : (
            <Menu
              className="relative z-[100] block sm:hidden mt-[6px]"
              onClick={handleToggle}
            />
          )}
          <div className="hidden sm:flex justify-center items-center gap-3">
            {socials.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="hover:opacity-90 hover:trnasform hover:scale-95 transition-all ease-in-out"
              >
                <Image src={item.icon} alt={item.name} width={52} height={52} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
      {toggle && (
        <div className="fixed top-[0] pt-[100px] pb-[16px] left-0 right-0 bottom-0 bg-white flex flex-col justify-start items-start">
          <div className="flex-1 w-[94%] flex flex-col justify-start items-center gap-[30px]">
            {links.map((item, i) => (
              <div key={i} className="w-full flex justify-between items-center">
                <Link
                  href={item.url}
                  className={`relative h-full px-[16px] transition-all ease-in-out rounded-[8px] flex justify-center items-center text-[16px]`}
                >
                  {item.name}
                </Link>

                <ArrowUpRight width={18} height={18} color="#4669fa" />
              </div>
            ))}
          </div>

          <div className="w-[94%] mx-auto flex flex-row justify-start items-start gap-3">
            {socials.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="hover:opacity-90 hover:trnasform hover:scale-95 transition-all ease-in-out"
              >
                <Image src={item.icon} alt={item.name} width={42} height={42} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
