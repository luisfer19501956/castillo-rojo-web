import React from "react";
import { Link } from "react-router-dom";

const LicenciamientoAmbientalColombia = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      {/* ===================== */}
      {/* ENCABEZADO */}
      {/* ===================== */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          Licenciamiento Ambiental en Colombia
        </h1>
        <p className="text-lg leading-relaxed">
          Asesoría jurídica y técnica especializada en{" "}
          <strong>licenciamiento ambiental</strong>, permisos y trámites ante la
          ANLA y las Corporaciones Autónomas Regionales (CAR), con enfoque
          preventivo, estratégico y corporativo.
        </p>
      </header>

      {/* ===================== */}
      {/* VIDEO */}
      {/* ===================== */}
      <section className="flex justify-center mb-14">
        <div className="w-full md:w-3/4 lg:w-2/3 border rounded-xl shadow-lg overflow-hidden">
          <video
            controls
            className="w-full h-auto"
            preload="metadata"
          >
            <source src="/videos/licenciamiento-ambiental.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </div>
      </section>

      {/* ===================== */}
      {/* CONTENIDO */}
      {/* ===================== */}
      <section className="space-y-6 text-justify">
        <p>
          El licenciamiento ambiental es un instrumento jurídico obligatorio para
          proyectos, obras o actividades que puedan generar impactos ambientales
          significativos. Su correcta gestión es clave para la viabilidad legal y
          financiera de cualquier iniciativa productiva en Colombia.
        </p>

        <p>
          En <strong>Castillo Rojo – Derecho Ambiental Corporativo</strong>,
          acompañamos integralmente a empresas y personas naturales en todas las
          etapas del proceso:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Evaluación de necesidad de licencia ambiental</li>
          <li>Elaboración y revisión jurídica del EIA</li>
          <li>Acompañamiento ante la ANLA o CAR competente</li>
          <li>Respuesta a requerimientos técnicos y jurídicos</li>
          <li>Seguimiento al cumplimiento de obligaciones ambientales</li>
        </ul>

        <p>
          Nuestro enfoque combina el análisis normativo, la experiencia en
          seguimiento ambiental y una visión estratégica orientada a prevenir
          sanciones y conflictos con la autoridad ambiental.
        </p>
      </section>

      {/* ===================== */}
      {/* CTA */}
      {/* ===================== */}
      <section className="mt-12">
        <Link
          to="/contacto"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
        >
          Solicitar asesoría en licenciamiento ambiental
        </Link>
      </section>
    </main>
  );
};

export default LicenciamientoAmbientalColombia;
