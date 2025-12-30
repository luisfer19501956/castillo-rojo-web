import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSlider, { Slide } from './components/HeroSlider';
import TickerLine from './components/TickerLine';
import WhoWeAre from './components/WhoWeAre';
import EnvironmentalTech from './components/EnvironmentalTech';
import { Link } from 'react-router-dom';
import LicenciamientoAmbientalColombia from './pages/LicenciamientoAmbientalColombia';
import ProcesoSancionatorioAmbientalColombia from './pages/ProcesoSancionatorioAmbientalColombia';

import {
  FaBalanceScale,
  FaClipboardList,
  FaChartBar,
  FaSearch,
  FaGavel,
  FaProjectDiagram,
} from 'react-icons/fa';

import './index.css';

/* ===================== */
/* HERO SLIDES */
/* ===================== */
const slides: Slide[] = [
  {
    image: '/bg-hero.jpg',
    title: 'Castillo Rojo',
    subtitle: 'Derecho Ambiental Corporativo',
    text: 'Nuestra visión es construir un legado donde las ciencias ambientales y el conocimiento jurídico transformen el futuro de las empresas y del territorio.',
    button: 'Conoce nuestros servicios',
    link: '#servicios',
  },
  {
    image: '/bg-hero-2.jpg',
    title: 'Soluciones Jurídicas Ambientales',
    subtitle: 'Compromiso y experiencia',
    text: 'Asesoramos con rigurosidad legal y técnica para asegurar que tu operación se ajuste a la normatividad colombiana.',
    button: 'Hablemos',
    link: '#contacto',
  },
  {
    image: '/bg-hero-3.jpg',
    title: 'Soluciones Técnicas de Ingeniería',
    subtitle: 'Estudios Ambientales',
    text: 'ArcGIS – QGIS – HEC-RAS – HEC-HMS – SWMM – AERMOD – Python – R.',
    button: 'Hablemos',
    link: '#contacto',
  },
  {
    image: '/bg-hero-4.jpg',
    title: 'Ambiental y Corporativo',
    subtitle: 'Transformando el territorio',
    text: 'Acompañamos a las empresas hacia un desarrollo sostenible e innovador.',
    button: 'Contáctanos',
    link: '#contacto',
  },
  {
    image: '/bg-hero-5.jpg',
    title: 'Proceso Sancionatorio Ambiental',
    subtitle: 'Especialistas en defensa ambiental',
    text: 'Defensa técnica y jurídica frente a autoridades ambientales.',
    button: 'Hablemos',
    link: '#contacto',
  },
];

function App() {
  return (
    <Routes>

      {/* ===================== */}
      {/* HOME */}
      {/* ===================== */}
      <Route
        path="/"
        element={
          <div className="font-sans bg-white text-gray-900">
            <Header />
            <div className="pt-20"></div>

            <HeroSlider slides={slides} />
            <TickerLine />

            <main className="p-6 md:p-10 max-w-6xl mx-auto">
              <WhoWeAre />

              {/* ===================== */}
              {/* SERVICIOS */}
              {/* ===================== */}
              <motion.section
                id="servicios"
                className="my-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-extrabold text-red-700 text-center mb-6">
                  Nuestros Servicios
                </h2>

                <p className="max-w-4xl mx-auto text-center text-lg text-gray-700 mb-12">
                  Acompañamos a empresas y proyectos en la gestión integral de sus
                  obligaciones ambientales, combinando rigor jurídico, soporte
                  técnico y criterio estratégico.
                </p>

                <div className="grid md:grid-cols-3 gap-6">

                  <motion.div
  className="bg-white border-t-8 border-red-700 p-6 rounded-xl shadow-xl text-center"
  whileHover={{ scale: 1.05 }}
>
  <FaBalanceScale size={40} className="text-red-700 mx-auto mb-4" />

  <h3 className="text-xl font-bold text-red-700 mb-3">
    Licenciamiento Ambiental
  </h3>

  <p className="text-gray-700 mb-6">
    Asesoría integral en la estructuración, presentación y seguimiento de licencias
    ambientales, garantizando coherencia técnica y jurídica.
  </p>

  <Link
    to="/licenciamiento-ambiental-colombia"
    className="inline-block bg-red-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-800 transition"
  >
    Ver detalle
  </Link>
</motion.div>

                  <ServiceCard
                    icon={<FaClipboardList size={40} />}
                    title="Trámites Ambientales"
                    text="Permisos de vertimiento, concesiones de agua y autorizaciones ambientales."
                  />

                  <ServiceCard
                    icon={<FaChartBar size={40} />}
                    title="Estudios Técnicos"
                    text="Soporte técnico en hidrología, calidad del aire, recursos hídricos y clima."
                  />

                  <ServiceCard
                    icon={<FaSearch size={40} />}
                    title="Seguimiento Ambiental"
                    text="Cumplimiento de obligaciones ambientales e Informes ICA."
                  />

                  <motion.div
  className="bg-white border-t-8 border-red-700 p-6 rounded-xl shadow-xl text-center"
  whileHover={{ scale: 1.05 }}
>
  <FaGavel size={40} className="text-red-700 mx-auto mb-4" />

  <h3 className="text-xl font-bold text-red-700 mb-3">
    Procesos Sancionatorios Ambientales
  </h3>

  <p className="text-gray-700 mb-6">
    Defensa técnica y jurídica en procesos sancionatorios ambientales, desde la
    etapa preventiva hasta la representación ante autoridades.
  </p>

  <Link
    to="/proceso-sancionatorio-ambiental-colombia"
    className="inline-block bg-red-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-800 transition"
  >
    Ver detalle
  </Link>
</motion.div>

                  <ServiceCard
                    icon={<FaProjectDiagram size={40} />}
                    title="Planeación Estratégica"
                    text="Evaluación de riesgos y estrategia normativa ambiental."
                  />

                </div>
              </motion.section>

              <EnvironmentalTech />

              {/* ===================== */}
              {/* CONTACTO */}
              {/* ===================== */}
              <motion.section
                id="contacto"
                className="my-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-extrabold text-red-700 mb-6">
                  Contáctanos
                </h2>

                <p className="text-lg mb-6">
                  ¿Requieres asesoría jurídica ambiental especializada?
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <a
                    href="https://wa.me/573202718872"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </a>

                  <a
                    href="mailto:contacto@elcastillorojo.com"
                    className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
                  >
                    Correo electrónico
                  </a>
                </div>
              </motion.section>
            </main>

            <Footer />
          </div>
        }
      />

      {/* ===================== */}
      {/* PÁGINA SEO */}
      {/* ===================== */}
      <Route
        path="/licenciamiento-ambiental-colombia"
        element={<LicenciamientoAmbientalColombia />}
      />
<Route
  path="/proceso-sancionatorio-ambiental-colombia"
  element={<ProcesoSancionatorioAmbientalColombia />}
/>

    </Routes>
  );
}

/* ===================== */
/* COMPONENTE SERVICIO */
/* ===================== */
const ServiceCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <motion.div
    className="bg-white border-t-8 border-red-700 p-6 rounded-xl shadow-xl text-center"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-red-700 mx-auto mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-red-700 mb-3">
      {title}
    </h3>
    <p className="text-gray-700">
      {text}
    </p>
  </motion.div>
);

export default App;
