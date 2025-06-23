"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SplitText } from "./SplitText";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Create subject and body for the email
      const subject = `New Contact Form Submission from ${formState.name}`;
      const body = `
Name: ${formState.name}
Email: ${formState.email}

Message:
${formState.message}
      `;

      // Encode for mailto link
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      // Create mailto link
      const mailtoLink = `mailto:tryloopey@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

      // Open user's mail client
      window.location.href = mailtoLink;

      // Set success status
      setSubmitStatus("success");

      // Reset form after a short delay
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          message: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      // Reset error status after delay
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 lg:py-36 relative font-sans bg-white text-black"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-6 max-w-6xl">
        <div className="text-left mb-12 md:mb-16 max-w-xl">
          <div className="mb-2">
            <SplitText
              tag="p"
              className="text-xs tracking-widest uppercase text-accent-color font-light"
              delay={0.2}
              staggerDelay={0.03}
              duration={0.4}
            >
              Contact Us
            </SplitText>
          </div>

          <div className="mb-4">
            <SplitText
              tag="h2"
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-black"
              delay={0.3}
              staggerDelay={0.025}
            >
              Get in Touch
            </SplitText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            className="md:col-span-5 md:col-start-2 px-1 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden mb-5 md:mb-6">
              <SplitText
                tag="h3"
                className="text-xl sm:text-2xl md:text-3xl font-bold text-black"
                delay={0.2}
              >
                Let&apos;s build something minimal & impactful
              </SplitText>
            </div>

            <motion.p
              className="text-base mb-7 md:mb-8 text-black/70"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have a project in mind? We&apos;d love to hear about it. Fill out
              the form and we&apos;ll get back to you as soon as possible.
            </motion.p>

            <div className="space-y-5 md:space-y-6">
              {[
                {
                  icon: "email",
                  label: "Email",
                  value: "tryloopey@gmail.com",
                },
                {
                  icon: "location",
                  label: "Location",
                  value: "Kerala, India",
                },
                { icon: "phone", label: "Phone", value: "+91 87144 16007" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-black rounded-full">
                    {item.icon === "email" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {item.icon === "location" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                    {item.icon === "phone" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black">
                      {item.label}
                    </h4>
                    <p className="text-black/70">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              ease: [0.215, 0.61, 0.355, 1],
              delay: 0.2,
            }}
            className="md:col-span-5 bg-white border border-black/10 p-6 sm:p-7 lg:p-8 rounded-xl shadow-[0_5px_30px_rgba(0,0,0,0.03)]"
          >
            <form className="space-y-5 w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm text-black/80 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-black/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-black/60 focus:border-black/60 transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm text-black/80 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-black/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-black/60 focus:border-black/60 transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm text-black/80 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-black/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-black/60 focus:border-black/60 transition-all"
                    required
                  ></textarea>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-black text-sm font-medium border border-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Send Message
                </button>

                {submitStatus === "success" && (
                  <motion.div
                    className="mt-4 text-sm text-green-600"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Your email client has been opened with the message. Thank
                    you for reaching out!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="mt-4 text-sm text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    There was an error preparing your message. Please try again
                    or email us directly.
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
