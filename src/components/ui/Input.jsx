import React from "react";
import PropTypes from "prop-types";

import localFont from "next/font/local";
const objectSans = localFont({ src: "../../fonts/ObjectSans-Regular.otf" });

const Input = ({
  label,
  fieldClassName,
  placeholder,
  value,
  onChange,
  icon,
  className,
}) => {
  return (
    <div className={`${className} h-auto`}>
      {label && <label className="text-[14px] mb-[8px]">{label}</label>}
      <div
        className={`${fieldClassName} h-auto flex justify-start items-center gap-2 border border-black rounded-[12px] px-[16px]`}
      >
        {icon && icon}
        <input
          className={`${objectSans.className} bg-transparent outline-0 flex-1 h-[50px] w-full flex justify-start items-center text-[14px]`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default Input;
