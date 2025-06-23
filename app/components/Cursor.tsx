"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleHoverStart);
      link.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleHoverStart);
        link.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className={`cursor hidden md:block ${isHovering ? "active" : ""}`}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.1,
        }}
      />
      <motion.div
        className="cursor-follower hidden md:block"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.001,
        }}
      />
    </>
  );
};

export default Cursor;
