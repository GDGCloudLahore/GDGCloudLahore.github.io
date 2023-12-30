"use client";

import React, { useState, useEffect } from "react";
import styles from "./CursorFollower.module.css";

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
  };

  return <div className={styles.customCursor} style={cursorStyle}></div>;
};

export default CursorFollower;
