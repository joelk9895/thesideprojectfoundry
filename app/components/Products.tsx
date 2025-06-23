"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SplitText } from "./SplitText";
// Product data for our showcase
const productFeatures = [
  {
    title: "Feedback Collection",
    description:
      "Multiple channels to gather customer insights through forms, surveys, and more.",
  },
  {
    title: "Smart Analysis",
    description:
      "AI-powered sentiment analysis to categorize and prioritize feedback automatically.",
  },
  {
    title: "Action Management",
    description:
      "Turn feedback into actionable tasks and track their progress from start to finish.",
  },
  {
    title: "Integration",
    description:
      "Seamlessly connect with your existing tools like Slack, Jira, and Trello.",
  },
];

export const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-24 md:py-36 relative bg-white font-sans text-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-primary/20 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
          }
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-primary/20 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
          }
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[10%] h-56 w-56 rounded-full bg-accent-color/5 blur-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute top-[20%] left-[10%] h-64 w-64 rounded-full bg-blue-primary/5 blur-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Title */}
        <div className="text-left mb-32 max-w-xl" ref={titleRef}>
          <div className="mb-2">
            <SplitText
              tag="p"
              className="text-xs tracking-widest uppercase text-accent-color font-light"
              delay={0.2}
              staggerDelay={0.03}
              duration={0.4}
            >
              Our Product
            </SplitText>
          </div>

          <div className="mb-4">
            {" "}
            <SplitText
              tag="h2"
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-black"
              delay={0.3}
              staggerDelay={0.025}
            >
              Introducing Loopey
            </SplitText>
          </div>

          <div className="mb-8 max-w-md">
            {" "}
            <SplitText
              tag="p"
              className="text-sm md:text-base text-black/70"
              delay={0.5}
              staggerDelay={0.01}
            >
              A minimalist feedback management platform that transforms customer
              insights into actionable data.
            </SplitText>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image with Parallax */}
          <motion.div
            style={{ scale: imageScale, opacity: imageOpacity }}
            className="rounded-xl overflow-hidden relative h-[500px] bg-gradient-to-br from-blue-primary/5 to-blue-primary/10 border border-white/10"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="rounded-xl overflow-hidden bg-white w-full max-w-md aspect-video relative shadow-[0_0_25px_rgba(0,0,255,0.1)]"
              >
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-primary to-blue-secondary flex items-center px-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                </div>
                <div className="pt-6 px-4 pb-4 h-full">
                  <div className="w-full h-8 bg-blue-primary/10 rounded mb-3"></div>
                  <div className="flex gap-2 mb-3">
                    <div className="w-24 h-6 bg-blue-primary/5 rounded"></div>
                    <div className="w-32 h-6 bg-blue-primary/5 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-video bg-accent-color/20 rounded"></div>
                    <div className="aspect-video bg-blue-primary/20 rounded"></div>
                    <div className="aspect-video bg-blue-primary/10 rounded"></div>
                    <div className="aspect-video bg-accent-color/10 rounded"></div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-12 right-12 p-4 bg-white rounded-lg shadow-[0_5px_20px_rgba(0,0,255,0.08)] max-w-[200px]"
              >
                <div className="w-full h-2 bg-accent-color mb-2 rounded-full"></div>
                <div className="w-3/4 h-2 bg-blue-primary/20 mb-2 rounded-full"></div>
                <div className="w-5/6 h-2 bg-blue-primary/20 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Product Features */}
          <motion.div className="space-y-14">
            {productFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setActiveFeature(i)}
                onMouseLeave={() => setActiveFeature(null)}
                className="group"
              >
                <div>
                  <motion.h3
                    className="text-xl font-bold mb-2 text-black relative inline-block"
                    animate={{
                      x: activeFeature === i ? 5 : 0,
                      color:
                        activeFeature === i ? "var(--blue-primary)" : "black",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {feature.title}
                    <motion.span
                      className="block h-px bg-black mt-1 w-10"
                      animate={{
                        width: activeFeature === i ? 40 : 10,
                        backgroundColor:
                          activeFeature === i ? "var(--blue-primary)" : "black",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.h3>{" "}
                  <p className="text-black/70 leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4"
            >
              <motion.a
                href="https://loopey.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 bg-white text-black text-sm font-medium border border-black hover:bg-black hover:text-white transition-colors duration-300"
                whileHover={{ x: 3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Loopey →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
