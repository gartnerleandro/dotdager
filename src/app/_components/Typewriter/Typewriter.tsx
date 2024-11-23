"use client";

import React, { useState, useEffect } from "react";

import "./Typewriter.css";

interface TypewriterProps {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  autoStart?: boolean;
  loop?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  strings,
  speed = 150,
  deleteSpeed = 75,
  delay = 2000,
  autoStart = true,
  loop = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    if (!autoStart) return;

    let timeout: NodeJS.Timeout | undefined;

    const currentString = strings[stringIndex];

    if (!isDeleting && index < currentString.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentString.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (index === currentString.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % strings.length);
      if (!loop && stringIndex === strings.length - 1) {
        clearTimeout(timeout);
        return;
      }
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, strings, stringIndex, speed, deleteSpeed, delay, autoStart, loop]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;
