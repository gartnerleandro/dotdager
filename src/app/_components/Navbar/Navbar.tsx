"use client";
import { useRef, useState } from 'react';
import Lottie from "lottie-react";
import animationData from '@/../public/menu.json';

import './Navbar.css';

const Navbar = () => {
  const menuButton = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (menuButton?.current) {
        if (isOpen) {
            (menuButton.current as any).setSpeed(3);
            (menuButton.current as any).playSegments([85, 140]);
        } else {
            (menuButton.current as any).setSpeed(3);
            (menuButton.current as any).playSegments([0, 85]);
        }
    }
  };

  const scrollToSection = (sectionId: string) => {
    toggleMenu();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="backdrop" onClick={toggleMenu}></div>
      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <Lottie
            loop={false}
            autoPlay={false}
            initialSegment={[0, 1]}
            lottieRef={menuButton}
            animationData={animationData}
            className={isOpen ? "open": "closed"}
        />
      </button>

      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => scrollToSection('projects')}>Proyectos</li>
          <li onClick={() => scrollToSection('quotes')}>Citas</li>
          <li onClick={() => scrollToSection('about')}>Sobre mí</li>
          <li onClick={() => scrollToSection('contact')}>Contacto</li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;