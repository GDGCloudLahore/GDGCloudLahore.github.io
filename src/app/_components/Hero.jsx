import React from "react";

// Icons
import { Mail } from "lucide-react";

// Components
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-[130px] flex justify-center items-center">
      <Container>
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <h1 className="max-w-[500px] md:max-w-[720px] mx-auto uppercase text-[22px] sm:text-[28px] leading-[140%] font-semibold text-center">
            Discover cloud computing with guidance from{" "}
            <span className="mt-[8px] md:mt-0 pt-[2px] sm:pt-0 w-fit mx-auto text-white bg-black px-[16px] py-[4px] rounded-[12px] block md:inline">
              industry professionals!
            </span>
          </h1>
          <p className="mt-[8px] max-w-[350px] sm:max-w-[500px] md:max-w-[600px] text-[14px] sm:text-[16px] text-[#4d4d4d] leading-[140%] text-center">
            We help people by offering well-organized learning paths,
            open-source projects by our development experts, and workshops that
            you can attend to enhance your skills.
          </p>
          <div className="mx-auto mt-[20px] max-w-[340px] md:max-w-[450px] w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-1 sm:gap-2">
              <Mail
                width={20}
                height={20}
                color="#4d4d4d"
                className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px] sm:text-[16px] leading-[140%] text-[#4d4d4d]">
                Want to place some notes?
              </p>
            </div>
            <Link
              href="https://github.com/orgs/GDGCloudLahore/discussions"
              target="_blank"
              className="max-w-[240px] md:max-w-[280px] w-full mt-[12px] md:mt-[20px]"
            >
              <Button variant="warning" size="small" className="font-semibold">
                Join our discussion room
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
