"use client";

import { useEffect } from "react";
import { notFound } from "next/navigation";

export default function NotFoundTest() {
  useEffect(() => {
    // Trigger the not-found page
    notFound();
  }, []);
  
  // This content won't be shown as notFound() will be triggered
  return null;
}
