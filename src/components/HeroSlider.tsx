// src/components/HeroSlider.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Slide {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  button: string;
  link: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <header className="relative h-[100vh] overflow-hidden text-white">
      {/* ✅ ÚNICO H1 DEL SITIO */}
      <h1 className="sr-only">
        Castillo Rojo – Derecho Ambiental Corporativo en Colombia
      </h1>

      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})`, zIndex: 0 }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4 md:px-12">
                
                {/* Título visual del slide (H2, no H1) */}
                <motion.h2
                  className="text-4xl md:text-6xl font-extrabold text-red-500 drop-shadow-md"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  className="text-xl md:text-2xl italic mt-2"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.p
                  className="mt-6 text-lg max-w-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {slide.text}
                </motion.p>

                <motion.a
                  href={slide.link}
                  className="mt-8 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {slide.button}
                </motion.a>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Dots de navegación */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-red-500 scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </header>
  );
};

export default HeroSlider;
