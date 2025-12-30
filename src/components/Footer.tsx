import React from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-white text-center py-10 px-4"
      style={{
        backgroundImage: `url('/textures/tu.textura.png'), linear-gradient(to bottom, #000000, #111111)`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Logo + lema */}
        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="/icons/redcastle3.png"
            alt="Castillo Rojo logo"
            className="w-14 h-14 object-contain"
          />
          <p className="italic text-sm md:text-base text-gray-300 leading-snug">
            Hacemos de tu proyecto<br />
            <span className="text-white">nuestra razón de ser</span>
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-6 text-white">
          <a
            href="https://www.facebook.com/share/16iqnmWBB5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 hover:text-red-500 transition" />
          </a>

          <a
            href="https://www.instagram.com/castillorojosas?igsh=bnRtd2g5ZjE3czRt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 hover:text-red-500 transition" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 hover:text-red-500 transition" />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
        © 2023 Castillo Rojo. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
