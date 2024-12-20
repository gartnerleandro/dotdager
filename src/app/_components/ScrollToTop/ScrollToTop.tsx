"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [withScroll, setWithScroll] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setWithScroll(true);
      } else {
        setWithScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  function handleScroll() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setWithScroll(false);
    }
  }

  return (
    <button className={withScroll ? "arrow-top" : "hidden"} onClick={handleScroll}>
      <ArrowUp />
    </button>
  );
}
