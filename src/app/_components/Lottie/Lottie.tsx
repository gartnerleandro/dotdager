"use client";

import React from "react";
import Lottie from "lottie-react";


interface LottieComponentProps {
    animationData: unknown;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
  }

const LottieComponent: React.FC<LottieComponentProps> = ({
    animationData,
    loop = true,
    autoplay = true,
    className = ""
}) => {
  return (
    <Lottie
        animationData={animationData}
        className={className}
        loop={loop}
        autoplay={autoplay}
    />
  );
}

export default LottieComponent;