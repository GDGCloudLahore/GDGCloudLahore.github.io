import React from "react";
import PropTypes from "prop-types";

import localFont from "next/font/local";
const objectSans = localFont({ src: "../../fonts/ObjectSans-Regular.otf" });

const Button = ({
  className = "",
  variant,
  size,
  disabled,
  onClick,
  children,
}) => {
  const baseClasses = objectSans.className + " w-full rounded-[12px]";

  const variants = {
    default: "bg-black text-white",
    primary: "bg-blue text-white",
    ghost: "bg-ghost text-black",
    danger: "bg-red text-white",
    warning: "bg-yellow text-black",
    disabled: "opacity-80",
    outline: "bg-white text-black border border-black",
  };

  const sizes = {
    small: "h-[50px] text-[14px]",
    large: "h-[60px] text-[16px]",
  };

  const variantClasses = variants[variant];
  const sizeClasses = sizes[size];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "ghost",
    "danger",
    "warning",
    "disabled",
    "outline",
  ]),
  size: PropTypes.oneOf(["small", "large"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
