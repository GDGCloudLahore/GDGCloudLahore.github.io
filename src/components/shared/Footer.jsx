import React from "react";
import Container from "./Container";
import Link from "next/link";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="w-full h-[60px] bg-black rounded-[12px] flex justify-center items-center">
          <p className="text-[18px] text-white font-normal">Developed by <Link target="_blank" href="https://www.linkedin.com/in/hasnaat-iftikhar" className="text-yellow font-medium">Hasnaat Iftikhar</Link></p>
        </div>
        <div className="mt-[24px] w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-[40px] sm:gap-0 mb-[16px] sm:mb-0">
          <Logo />
          <Link
            href="https://events.linuxfoundation.org/about/code-of-conduct/"
            target="_blank"
            className="text-[18px] xl:text-[20px] text-black"
          >
            Code of Conduct
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
