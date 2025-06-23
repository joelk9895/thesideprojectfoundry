"use client";

import { motion, Variants } from "framer-motion";
import { useRef, ElementType } from "react";

type SplitTextProps = {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  tag?: ElementType;
};

export const SplitText = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.05,
  tag: Tag = "div",
}: SplitTextProps) => {
  const container = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
      rotateX: 20,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        ref={container}
        style={{ display: "inline-block", overflow: "hidden" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {children.split(" ").map((word, i) => (
          <span
            key={i}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  transformOrigin: "bottom",
                }}
                variants={childVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default SplitText;
