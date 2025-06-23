"use client";

import { useEffect } from "react";
import Cursor from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Cursor />
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
