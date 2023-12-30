import React from "react";

const SectionHeader = ({ className = "", title, badge }) => {
  return (
    <div className={`${className}flex flex-col gap-2`}>
      <p className="w-fit bg-black text-white px-[16px] py-[8px] rounded-[12px] text-[14px]">
        {badge}
      </p>
      <h2 className="text-[28px] font-semibold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
