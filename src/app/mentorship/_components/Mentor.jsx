import React from "react";
import Image from "next/image";

// Components
import Button from "@/components/ui/Button";

const Mentor = ({ className = "", image, name, bio, skill, tag, topmate, linkedin }) => {
  return (
    <div
      className={`${className} border border-[#dadada] bg-[#fff] shadow-md p-[12px] rounded-[20px] flex flex-col`}
    >
      <div className="border border-[#dadada] relative w-full h-[86vw] sm:h-[38vw] md:h-[41vw] lg:h-[27vw] xl:h-[28vw] 2xl:h-[20.8vw] 3xl:h-[340px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="mt-[24px] flex-1 flex flex-col">
        <div className="flex justify-between items-start">
            <div className="flex flex-col gap-[20px] sm:gap-2">
                <h3 className="text-[20px] font-semibold">{name}</h3>
                <div className="flex flex-wrap gap-2">
                    <p className="w-fit text-black text-[16px] sm:text-[16px]">
                    {skill}
                    </p>
                </div>
            </div>
            <p
                className="w-fit bg-[#ebebeb] text-black rounded-[8px] px-[12px] py-[8px] text-[14px]"
            >
                {tag.name}
            </p>
        </div>
        <p className="flex-1 mt-[20px] text-[16px] sm:text-[16px] text-black leading-[150%]">
            {bio}
        </p>
      </div>
      <div className="mt-[16px] flex justify-center items-center gap-2">
        <Button variant="default" size="large" className="flex-1 flex justify-center items-center gap-[8px]">
            <Image src="/assets/icons/topmate.png" width={24} height={24} />
            Topmate
        </Button>
        <Button variant="primary" size="large" className="flex-1 flex justify-center items-center gap-[8px]">
            <Image src="/assets/icons/linkedin-light.svg" width={24} height={24} />
            LinkedIn
        </Button>
      </div>
    </div>
  );
};

export default Mentor;
