import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LineaJurisprudencial from "../components/LineaJurisprudencial";

const ProcesoSancionatorioAmbientalColombia = () => {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-gray-800">

      {/* Icono superior izquierdo */}
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
        Proceso Sancionatorio Ambiental en Colombia
      </motion.h1>

      {/* Breadcrumb y volver al inicio */}
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

      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
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
            Proceso Sancionatorio Ambiental
          </li>
        </ol>
      </nav>

      {/* ***** IMAGEN PRINCIPAL ***** */}
      <div className="w-full flex justify-center my-8">
        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <img
            src="/sanc.png"
            alt="Proceso sancionatorio ambiental en Colombia"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        El <strong>proceso sancionatorio ambiental</strong> es el mecanismo mediante el cual
        las autoridades ambientales investigan y sancionan presuntas infracciones a la
        normativa ambiental, pudiendo imponer multas, medidas preventivas, suspensión de
        actividades o revocatoria de permisos.
      </p>

      <p className="text-lg leading-relaxed mb-10">
        Una defensa adecuada exige un enfoque <strong>jurídico y técnico integrado</strong>,
        que garantice el debido proceso y la correcta valoración probatoria.
      </p>

      <h2 className="text-2xl font-bold text-red-700 mt-12 mb-4">
        ¿Cuándo se inicia un proceso sancionatorio ambiental?
      </h2>

      <ul className="list-disc list-inside space-y-2 mb-10">
        <li>Incumplimiento de obligaciones de licencias ambientales.</li>
        <li>Desarrollo de actividades sin permiso ambiental.</li>
        <li>Vertimientos o emisiones no autorizadas.</li>
        <li>Hallazgos en visitas de seguimiento.</li>
        <li>Denuncias o quejas de terceros.</li>
      </ul>

      <h2 className="text-2xl font-bold text-red-700 mt-12 mb-4">
        Riesgos de una defensa inadecuada
      </h2>

      <ul className="list-disc list-inside space-y-2 mb-10">
        <li>Multas económicas elevadas.</li>
        <li>Suspensión o cierre de actividades.</li>
        <li>Órdenes de restauración ambiental.</li>
        <li>Afectaciones reputacionales y contractuales.</li>
      </ul>

      {/* 🔴 NUEVA SECCIÓN AGREGADA: ANÁLISIS DE SENTENCIAS */}
      <h2 className="text-2xl font-bold text-red-700 mt-12 mb-4">
        Análisis de sentencias en materia sancionatoria ambiental
      </h2>

      <p className="text-lg leading-relaxed mb-10">
        Realizamos <strong>análisis especializado de jurisprudencia ambiental</strong>,
        identificando criterios de las Altas Cortes que inciden directamente en la
        responsabilidad ambiental, graduación de sanciones, debido proceso administrativo,
        valoración de pruebas técnicas y prescripción de la acción sancionatoria.
      </p>

      <div className="bg-gray-100 border-l-4 border-red-700 p-6 rounded-lg">
        <p className="text-lg mb-4">
          Una defensa técnica y jurídica oportuna puede marcar la diferencia en el
          resultado del proceso sancionatorio.
        </p>
        <a
          href="/#contacto"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
        >
          Solicitar defensa especializada
        </a>
      </div>
<h2 className="text-2xl font-bold text-red-700 mt-12 mb-4">
  Línea jurisprudencial – sancionatorio ambiental en Colombia
</h2>

<LineaJurisprudencial />

    </section>
  );
};

export default ProcesoSancionatorioAmbientalColombia;
