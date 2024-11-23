"use client";

import React, { useEffect, useState } from "react";

import LottieComponent from "@/app/_components/Lottie/Lottie";
import animationData from "@/../public/scroll.json";

import "./ScrollAnimation.css";

export default function ScrollAnimation() {
    const [withScroll, setWithScroll] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 280) {
          setWithScroll(true);
        } else {
          setWithScroll(false);
        }
      };

      handleScroll();
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    if (!mounted) return null;

    const scrollToTop = () => {
      if (typeof window !== "undefined") {
        scrollTo({ top: 400, behavior: "smooth" })
      }
    }

    return (withScroll ? null :
      <button className="scroll-bottom" onClick={scrollToTop}>
        <LottieComponent
            animationData={animationData}
            className="lottie-component"
          />
      </button>
    );
}
