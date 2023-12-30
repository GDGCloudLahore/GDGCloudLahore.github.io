import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <div className={`${className} max-w-[1920px] mx-auto w-[96%]`}>
      {children}
    </div>
  );
};

export default Container;
