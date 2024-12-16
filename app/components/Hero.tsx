"use client";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Hero = () => {
  const slides = [
    {
      title: 'Artisanal Chocolate',
      description: 'Handcrafted brownies made with premium ingredients',
      buttonText: 'Browse Collection',
      buttonLink: 'https://drive.google.com/file/d/16xmIPPGK-XTPbC-ZEJwXxDjOy3prQWV5/view?usp=drive_link',
      image: '/images/Hero.png',
    },
    {
      title: 'Pure Indulgence',
      description: 'Experience our signature gourmet selection',
      buttonText: 'Order Now',
      buttonLink: 'https://drive.google.com/file/d/16xmIPPGK-XTPbC-ZEJwXxDjOy3prQWV5/view?usp=drive_link',
      image: '/images/Hero1.png',
    },
    {
      title: 'Gifting Perfection',
      description: 'Elevate any moment with our artisanal treats',
      buttonText: 'Discover',
      buttonLink: 'https://drive.google.com/file/d/16xmIPPGK-XTPbC-ZEJwXxDjOy3prQWV5/view?usp=drive_link',
      image: '/images/Hero.png',
    },
  ];

  return (
    <div className="relative h-screen">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen w-full flex items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Refined overlay with reduced opacity */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Container for right-aligned content */}
              <div className="relative z-10 w-full flex justify-center ml-12 pr-8 md:pr-16 lg:pr-24">
                <div className="text-white max-w-xl">
                  <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg font-light tracking-wide mb-8 opacity-90">
                    {slide.description}
                  </p>
                  <a
                    href={slide.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 
                             text-sm uppercase tracking-wider border border-white/20 
                             hover:bg-white/20 transition-all duration-300 ease-in-out"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;