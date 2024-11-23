"use client";

import React from "react";
import dynamic from "next/dynamic";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });


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
    <DynamicLottie
      animationData={animationData}
      className={className}
      loop={loop}
      autoplay={autoplay}
    />
  );
}

export default LottieComponent;