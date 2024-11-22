"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import "./ScrollToTop.css";

export default function ScrollToTop() {
    const [withScroll, setWithScroll] = React.useState(false);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => setMounted(true), []);
    
    if (!mounted) return null;

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 280) {
            setWithScroll(true);
          } else {
            setWithScroll(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    function handleScroll() {
        window.scrollTo({top: 0,  behavior: 'smooth'});
        setWithScroll(false);
    }

    return (<button className={withScroll ? "arrow-top" : "hidden"} onClick={handleScroll}><ArrowUp /></button>)
}