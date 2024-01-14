import React from "react";

// Icons
import { Check, CheckCircle, CheckCircle2, Lightbulb, LightbulbIcon, Mail, Rocket } from "lucide-react";

// Components
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

const HeroSection = () => {
  const data = [
    "Guidance from industry experts.",
    "Cloud learning resources.",
    "Share your projects & ideas!",
    "Future insights!"
  ]

  const badgeStyles = [
    "right-[00px]",
    "right-[100px]",
    "right-[-100px]"
  ]

  const badgeIcons = [
    <CheckCircle width={20} height={20} color="#000" fill="white" />,
    <CheckCircle width={20} height={20} color="#000" fill="white" />,
    <Lightbulb width={24} height={24} color="#000" />,
    <Rocket width={24} height={24} color="#000" full="white" />
  ]

  const headingClassNames = "uppercase leading-[140%] font-semibold max-w-[500px] md:max-w-[660px] text-[22px] sm:text-[28px] md:text-[40px]"

  return (
    <section className="pt-[160px] flex justify-center items-center">
      <div></div>
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[8px]">
            <h1 className={headingClassNames}>
              Discover cloud computing with guidance from{" "}
              <span className="mt-[8px] md:mt-0 pt-[2px] sm:pt-0 w-fit text-white bg-black px-[16px] py-[4px] rounded-[12px] block md:inline">
                industry professionals!
              </span>
            </h1>
            <p className="mt-[8px] max-w-[350px] sm:max-w-[500px] md:max-w-[600px] text-[14px] sm:text-[16px] md:text-[18px] text-[#4d4d4d] leading-[140%]">
              We help people by offering well-organized learning paths,
              open-source projects by our development experts, and workshops that
              you can attend to enhance your skills.
            </p>
            <div className="mt-[24px] max-w-[340px] md:max-w-[450px] w-full flex flex-col justify-start items-start">
              <div className="flex justify-center items-center gap-1 sm:gap-2">
                <Mail
                  width={20}
                  height={20}
                  color="#4d4d4d"
                  className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[140%] text-[#4d4d4d]">
                  Want to place some notes?
                </p>
              </div>
              <Link
                href="https://github.com/orgs/GDGCloudLahore/discussions"
                target="_blank"
                className="max-w-[240px] md:max-w-[280px] w-full mt-[12px] md:mt-[20px]"
              >
                <Button variant="warning" size="large" className="font-semibold">
                  Join our discussion room
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center w-[1000px]">
            <div className="shadow-lg relative border-2 border-gray rounded-[16px] px-[26px] pt-[40px] pb-[26px] bg-[#f6f6f6]">
              <p className="absolute h-[46px] top-[-28px] w-fit bg-yellow text-black px-[20px] rounded-[14px] flex justify-center items-center gap-2">
              <span className="text-[18px] pb-1">👀</span> <span className="text-[16px]">Benefits to join</span>
              </p>
              <div className="flex flex-col gap-[20px] w-full max-w-[500px]">
                {
                  data.map((item, index) => (
                    <div key={index} className={`relative z-[2] w-full h-[70px] flex justify-start items-center gap-3 bg-white relative border-2 border-gray rounded-[14px] pl-[26px] pr-[36px] ${badgeStyles[index]} shadow-md bottom-0 hover:bottom-[3px] transition-all`}>
                      {badgeIcons[index]}
                      <p className="text-[18px] text-black">{item}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    // <section className="pt-[130px] flex justify-center items-center">
    //   <Container>
    //     <div className="flex flex-col justify-center items-center gap-[8px]">
    //       <h1 className="max-w-[500px] md:max-w-[720px] mx-auto uppercase text-[22px] sm:text-[28px] leading-[140%] font-semibold text-center">
    //         Discover cloud computing with guidance from{" "}
    //         <span className="mt-[8px] md:mt-0 pt-[2px] sm:pt-0 w-fit mx-auto text-white bg-black px-[16px] py-[4px] rounded-[12px] block md:inline">
    //           industry professionals!
    //         </span>
    //       </h1>
    //       <p className="mt-[8px] max-w-[350px] sm:max-w-[500px] md:max-w-[600px] text-[14px] sm:text-[16px] text-[#4d4d4d] leading-[140%] text-center">
    //         We help people by offering well-organized learning paths,
    //         open-source projects by our development experts, and workshops that
    //         you can attend to enhance your skills.
    //       </p>
    //       <div className="mx-auto mt-[20px] max-w-[340px] md:max-w-[450px] w-full flex flex-col justify-center items-center">
    //         <div className="flex justify-center items-center gap-1 sm:gap-2">
    //           <Mail
    //             width={20}
    //             height={20}
    //             color="#4d4d4d"
    //             className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
    //           />
    //           <p className="text-[14px] sm:text-[16px] leading-[140%] text-[#4d4d4d]">
    //             Want to place some notes?
    //           </p>
    //         </div>
    //         <Link
    //           href="https://github.com/orgs/GDGCloudLahore/discussions"
    //           target="_blank"
    //           className="max-w-[240px] md:max-w-[280px] w-full mt-[12px] md:mt-[20px]"
    //         >
    //           <Button variant="warning" size="small" className="font-semibold">
    //             Join our discussion room
    //           </Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </Container>
    // </section>
  );
};

export default HeroSection;
