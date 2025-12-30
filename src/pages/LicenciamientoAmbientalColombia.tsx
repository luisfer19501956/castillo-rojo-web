import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LicenciamientoAmbientalColombia = () => {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-gray-800">

      {/* Icono superior izquierdo (no fijo) */}
      <div className="mb-10">
        <img
          src="/icons/redcastle3.png"
          alt="Castillo Rojo"
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* H1 – SEO PRINCIPAL */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-red-700 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6">
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-red-700 hover:text-red-900 transition"
    aria-label="Volver al inicio"
  >
    <img
      src="/icons/redcastle3.png"
      alt="Castillo Rojo – Inicio"
      className="w-10 h-10 object-contain"
    />
    <span className="text-sm font-semibold hidden sm:inline">
      Volver al inicio
    </span>
  </Link>
</div>
<nav
  aria-label="Breadcrumb"
  className="mb-8 text-sm text-gray-600"
>
  <ol className="flex flex-wrap items-center gap-2">
    <li>
      <Link to="/" className="hover:text-red-700 transition">
        Inicio
      </Link>
    </li>

    <li>/</li>

    <li>
      <Link to="/#servicios" className="hover:text-red-700 transition">
        Servicios
      </Link>
    </li>

    <li>/</li>

    <li className="text-gray-800 font-semibold">
      Licenciamiento Ambiental
    </li>
  </ol>
</nav>

        Licenciamiento Ambiental en Colombia
      </motion.h1>
      <p className="text-lg leading-relaxed mb-6">
        El <strong>licenciamiento ambiental</strong> es el instrumento mediante el cual
        la autoridad ambiental autoriza la ejecución de proyectos, obras o actividades
        que pueden generar impactos significativos sobre el ambiente, estableciendo
        obligaciones, restricciones y medidas de manejo ambiental.
      </p>

      <p className="text-lg leading-relaxed mb-10">
        Una adecuada estructuración jurídica y técnica del proceso de licenciamiento es
        determinante para la <strong>viabilidad legal, financiera y operativa</strong>
        de los proyectos en Colombia.
      </p>

      <h2 className="text-2xl font-bold text-red-700 mt-12 mb-4">
        ¿Cuándo se requiere licencia ambiental?
      </h2>

      <p className="text-lg leading-relaxed mb-6">
        Se requiere licencia ambiental cuando un proyecto, obra o actividad se encuentra
        listado en la normativa ambiental vigente y genera impactos que demandan una
        evaluación integral previa.
      </p>

      <ul className="list-disc list-inside space-y-2 mb-10">
        <li>Infraestructura vial, energética y de transporte.</li>
        <li>Minería e hidrocarburos.</li>
        <li>Proyectos industriales de gran escala.</li>
        <li>Obras hidráulicas y aprovechamiento de recursos naturales.</li>
      </ul>

      <h2 className="text-2xl font-bold text-red-700 mt-12 mb-4">
        Riesgos de un licenciamiento mal estructurado
      </h2>

      <ul className="list-disc list-inside space-y-2 mb-10">
        <li>Requerimientos reiterados de la autoridad ambiental.</li>
        <li>Retrasos en la ejecución del proyecto.</li>
        <li>Negación o condicionamiento de la licencia.</li>
        <li>Riesgo de procesos sancionatorios posteriores.</li>
      </ul>

      <div className="bg-gray-100 border-l-4 border-red-700 p-6 rounded-lg">
        <p className="text-lg mb-4">
          Contar con acompañamiento jurídico y técnico especializado es clave para la
          viabilidad de su proyecto.
        </p>
        <a
          href="/#contacto"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
        >
          Solicitar asesoría especializada
        </a>
      </div>

    </section>
  );
};

export default LicenciamientoAmbientalColombia;
