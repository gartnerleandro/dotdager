"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "./Quotes.css";

const Quotes: React.FC = () => {
  return (
    <Swiper
      pagination
      keyboard
      loop
      autoplay
      modules={[Keyboard, Autoplay, A11y, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="slide-quote-wrapper">
          <div className="slide-quote">
            <q>Me encantan los pepinos</q>
            <p>Dot dager</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-quote-wrapper">
          <div className="slide-quote">
            <q>No lo puedo negar, me gustan mucho... y los libros también</q>
            <p>Dot dager</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-quote-wrapper">
          <div className="slide-quote">
            <q>Puto el que lee</q>
            <p>Dot dager</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-quote-wrapper">
          <div className="slide-quote">
            <q>¿Ya te dije que me encantan los pepinos?</q>
            <p>Dot dager</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-quote-wrapper">
          <div className="slide-quote">
            <q>No es que seas tonto, es que te faltan pre-requisitos</q>
            <p>Dot dager</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-quote-wrapper">
          <div className="slide-quote">
            <q>Hoy no voy a satisfacer a absolutamente nadie</q>
            <p>Dot dager</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Quotes;
