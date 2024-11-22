"use client";

import React, { useEffect } from "react";

import LottieComponent from "@/components/Lottie/Lottie";
import animationData from "@/../public/scroll.json";

import "./ScrollAnimation.css";

export default function ScrollAnimation() {
    const [withScroll, setWithScroll] = React.useState(false);

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

    

    return (withScroll ? null :
      <button className="scroll-bottom" onClick={() => scrollTo({ top: 400, behavior: "smooth" })}>
        <LottieComponent
            animationData={animationData}
            className="lottie-component"
          />
      </button>
        
    );
}
