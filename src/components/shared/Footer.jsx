import React from "react";
import Container from "./Container";
import Link from "next/link";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="mt-[24px] w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-[40px] sm:gap-0 mb-[16px] sm:mb-0">
          <Logo />
          <Link
            href="#"
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
