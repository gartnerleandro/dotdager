"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";

import animationData from "@/../public/menu.json";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

import "./Navbar.css";

const Navbar = () => {
  const menuButton = useRef<LottieRefCurrentProps>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (menuButton?.current) {
      if (isOpen) {
        menuButton.current.setSpeed(3);
        menuButton.current.playSegments([85, 140]);
      } else {
        menuButton.current.setSpeed(3);
        menuButton.current.playSegments([0, 85]);
      }
    }
  };

  if (!mounted) return null;

  const scrollToSection = (sectionId: string) => {
    if (typeof document !== "undefined") {
      toggleMenu();
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="backdrop" onClick={toggleMenu}></div>
      <button className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <DynamicLottie
          loop={false}
          autoPlay={false}
          initialSegment={[0, 1]}
          lottieRef={menuButton}
          animationData={animationData}
          className={isOpen ? "open" : "closed"}
        />
      </button>

      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("projects")}>Proyectos</li>
          <li onClick={() => scrollToSection("quotes")}>Citas</li>
          <li onClick={() => scrollToSection("about")}>Sobre mí</li>
          <li onClick={() => scrollToSection("contact")}>Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
