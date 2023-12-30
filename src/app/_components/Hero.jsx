import React from "react";

// Icons
import { Mail } from "lucide-react";

// Components
import Container from "@/components/shared/Container";
import Newsletter from "./Newsletter";

const HeroSection = () => {
  return (
    <section className="h-auto pt-[140px] flex justify-center items-center">
      <Container>
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <h1 className="max-w-[720px] mx-auto uppercase text-[28px] leading-[140%] font-semibold text-center">
            Discover cloud computing with guidance from{" "}
            <span className="text-white bg-black px-[16px] py-[4px] rounded-[12px]">
              industry professionals!
            </span>
          </h1>
          <p className="mt-[8px] max-w-[600px] text-[16px] text-[#4d4d4d] leading-[140%] text-center">
            We assist students, beginners, and professionals by offering
            well-organized learning paths, open-source projects guided by
            development experts, and workshops that you can attend to enhance
            your knowledge.
          </p>
          <div className="mt-[20px] max-w-[450px] w-full">
            <div className="flex justify-center items-center gap-2">
              <Mail width={20} height={20} color="#4d4d4d" />
              <p className="text-[16px] leading-[140%] text-[#4d4d4d]">
                Subscribe for match updates
              </p>
            </div>
            <Newsletter className="mt-[8px] w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
