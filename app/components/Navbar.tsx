"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled beyond 95vh
      const isScrolled = window.scrollY > window.innerHeight * 0.95;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)",
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
        delayChildren: 0.1,
        staggerChildren: 0.07,
        when: "beforeChildren",
      },
    },
  };

  const menuItemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      <motion.nav
        className={`container mx-auto px-4 py-6 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="font-bold text-xl sm:text-2xl"
          variants={linkVariants}
        >
          <Link href="/">
            <svg
              width="396"
              height="396"
              className="w-8 h-8 sm:w-10 sm:h-10"
              viewBox="0 0 396 396"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.7021 395.972C48.702 395.504 23.603 391.373 0 383.938V343.631C29.5506 359.991 67.1307 368.848 104.609 367.582C124.646 366.993 145.365 363.251 166.573 359.17C187.828 355.01 209.762 350.315 232.548 347.837C289.551 341.728 347.714 351.222 396 372.839V376.227C345.567 358.373 288.264 354.056 236.411 363.96C215.801 367.854 195.595 373.952 174.597 379.849C153.69 385.791 131.781 391.536 108.027 394.336C99.1149 395.351 90.0144 395.888 80.9831 395.972C78.5372 395.996 76.15 396.021 73.7021 395.972ZM396 344.449C366.475 328.148 328.946 319.351 291.539 320.615C271.503 321.204 250.783 324.945 229.576 329.027C208.321 333.187 186.387 337.764 163.601 340.243C106.529 346.359 48.3203 336.884 0 315.24V311.969C50.4628 329.859 107.843 334.148 159.737 324.237C180.348 320.342 200.554 314.244 221.552 308.347C242.459 302.405 264.368 296.66 288.122 293.86C324.029 289.77 361.577 293.263 396 304.025V344.449ZM73.7021 298.533C48.702 298.074 23.603 294.019 0 286.616V246.192C29.5506 262.552 67.1307 271.409 104.609 270.143C124.646 269.554 145.365 265.813 166.573 261.731C187.828 257.571 209.762 252.994 232.548 250.515C289.551 244.406 347.714 253.813 396 275.4V278.788C345.567 260.935 288.264 256.617 236.411 266.521C215.801 270.416 195.595 276.514 174.597 282.41C153.69 288.352 131.781 294.097 108.027 296.898C99.1149 297.913 90.0144 298.45 80.9831 298.533C78.5372 298.558 76.15 298.576 73.7021 298.533ZM396 247.01C366.475 230.71 328.946 221.912 291.539 223.176C271.503 223.765 250.783 227.506 229.576 231.588C208.321 235.748 186.387 240.325 163.601 242.804C106.529 248.92 48.3203 239.445 0 217.802V214.53C50.4628 232.421 107.843 236.709 159.737 226.798C180.348 222.903 200.554 216.805 221.552 210.908C242.459 204.967 264.368 199.222 288.122 196.421C324.029 192.331 361.577 195.824 396 206.586V247.01ZM73.7021 201.095C48.702 200.636 23.603 196.581 0 189.178V148.754C29.5506 165.113 67.1307 173.971 104.609 172.704C124.646 172.115 145.365 168.374 166.573 164.292C187.828 160.132 209.762 155.555 232.548 153.076C289.551 146.968 347.714 156.374 396 177.962V181.35C345.567 163.496 288.264 159.179 236.411 169.082C215.801 172.977 195.595 179.075 174.597 184.972C153.69 190.914 131.781 196.659 108.027 199.459C99.1149 200.474 90.0144 201.011 80.9831 201.095C78.5372 201.119 76.15 201.137 73.7021 201.095ZM396 149.571C366.475 133.271 328.946 124.473 291.539 125.737C271.503 126.326 250.783 130.068 229.576 134.149C208.321 138.309 186.387 142.887 163.601 145.365C106.529 151.481 48.3203 142.006 0 120.363V117.092C50.4628 134.982 107.843 139.271 159.737 129.359C180.348 125.464 200.554 119.367 221.552 113.47C242.459 107.528 264.368 101.783 288.122 98.9826C324.029 94.8924 361.577 98.3857 396 109.147V149.571ZM73.7021 103.656C48.702 103.197 23.603 99.1422 0 91.739V51.3149C29.5506 67.6747 67.1307 76.532 104.609 75.2656C124.646 74.6766 145.365 70.9354 166.573 66.8536C187.828 62.6936 209.762 58.1162 232.548 55.6376C289.551 49.5289 347.714 58.9353 396 80.5231V83.9112C345.567 66.0574 288.264 61.7402 236.411 71.6437C215.801 75.5385 195.595 81.6363 174.597 87.533C153.69 93.4748 131.781 99.2199 108.027 102.02C99.1149 103.035 90.0144 103.572 80.9831 103.656C78.5372 103.68 76.15 103.698 73.7021 103.656ZM396 52.1326C366.475 35.8324 328.946 27.0347 291.539 28.2988C271.503 28.8877 250.784 32.629 229.576 36.7108C208.321 40.8708 186.387 45.565 163.601 48.0436C106.529 54.1597 48.3203 44.5969 0 22.9245V19.6531C50.4628 37.5432 107.843 41.8321 159.737 31.9205C180.348 28.0258 200.554 21.928 221.552 16.0312C242.459 10.0893 264.368 4.46118 288.122 1.6608C324.029 -2.42944 361.577 1.06394 396 11.8253V52.1326Z"
                fill={scrolled ? "black" : "white"}
              />
            </svg>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {["Services", "Work", "About", "Products", "Contact"].map(
            (item, i) => (
              <motion.div
                key={i}
                variants={linkVariants}
                className="relative group"
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-black hover:text-accent-color"
                      : "text-white hover:text-accent-color"
                  }`}
                >
                  {item}
                </Link>
                <motion.div className="absolute bottom-0 left-0 h-[2px] bg-accent-color w-0 group-hover:w-full transition-all duration-300" />
              </motion.div>
            )
          )}
        </div>

        <motion.button
          className="flex md:hidden flex-col gap-1.5 w-10 h-10 items-center justify-center z-50 relative"
          onClick={toggleMenu}
          variants={linkVariants}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              isOpen
                ? "rotate-45 translate-y-2 bg-white"
                : scrolled
                ? "bg-black"
                : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            } ${scrolled ? "bg-black" : "bg-white"}`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-2 bg-white"
                : scrolled
                ? "bg-black"
                : "bg-white"
            }`}
          />
        </motion.button>
      </motion.nav>

      <motion.div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center p-8 z-40"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col items-center gap-10 text-center">
          {["Services", "Work", "About", "Products", "Contact"].map(
            (item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                variants={menuItemVariants}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-4xl font-medium tracking-tight text-white hover:text-accent-color transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
