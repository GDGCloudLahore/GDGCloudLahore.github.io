import React from "react";
import Image from "next/image";

// Components
import Button from "./Button";
import Link from "next/link";

const Card = ({ className = "", image, title, descripton, labels, url }) => {
  return (
    <div
      className={`${className} border border-[#dadada] bg-[#fff] shadow-md p-[12px] rounded-[20px] flex flex-col`}
    >
      <div className="relative w-full h-[86vw] sm:h-[38vw] md:h-[41vw] lg:h-[27vw] xl:h-[20vw] 2xl:h-[16.5vw] 3xl:h-[34s0px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={title} fill />
      </div>
      <div className="mt-[24px] flex-1 flex flex-col">
        <div className="flex-1 flex flex-col gap-[20px] sm:gap-2">
          <h3 className="text-[20px] leading-[140%] font-semibold">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {labels.map((label, i) => (
              <p
                key={i}
                className="w-fit bg-white text-black rounded-[8px] px-[12px] py-[8px] text-[16px] sm:text-[16px]"
              >
                {label}
              </p>
            ))}
          </div>
          <p className="sm:mt-[16px] text-[16px] sm:text-[18px] text-black">
            <span className="font-semibold text-[20px] mt-[2px]">📅 </span>

            Date: {descripton}
          </p>
        </div>
        <Link href={url} target="_blank">
          <Button
            variant="default"
            size="small"
            className="mt-[40px] sm:mt-[16px]"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
