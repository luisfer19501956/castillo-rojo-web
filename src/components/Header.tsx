// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Header: React.FC = () => {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    controls.start({
      y: visible ? 0 : -110,
      transition: { duration: 0.35, ease: 'easeOut' },
    });
  }, [visible, controls]);

  return (
    <motion.header
      animate={controls}
      className="fixed top-0 left-0 w-full bg-white text-gray-800 shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo + Identidad */}
        <a href="#top" className="flex items-center space-x-3">
          <img
            src="/icons/redcastle3.png"
            alt="Castillo Rojo – Derecho Ambiental Corporativo"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-red-700">
              Castillo Rojo
            </span>
            <span className="text-xs font-medium text-gray-600">
              Derecho Ambiental Corporativo
            </span>
          </div>
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a
            href="#top"
            className="hover:text-red-700 transition-colors duration-300"
          >
            Inicio
          </a>
          <a
            href="#quienes-somos"
            className="hover:text-red-700 transition-colors duration-300"
          >
            ¿Quiénes somos?
          </a>
          <a
            href="#servicios"
            className="hover:text-red-700 transition-colors duration-300"
          >
            Servicios
          </a>
          <a
            href="#tech"
            className="hover:text-red-700 transition-colors duration-300"
          >
            Tecnología
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 rounded-md bg-red-700 text-white hover:bg-red-800 transition-colors duration-300"
          >
            Contáctenos
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
