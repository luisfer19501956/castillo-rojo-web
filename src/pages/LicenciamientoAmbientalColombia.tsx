// src/pages/LicenciamientoAmbientalColombia.tsx

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LicenciamientoAmbientalColombia: React.FC = () => {
  return (
    <>
      {/* ===================== */}
      {/* SEO + SCHEMA */}
      {/* ===================== */}
      <Helmet>
        <title>Licenciamiento Ambiental en Colombia | Derecho Ambiental Corporativo – Castillo Rojo</title>

        <meta
          name="description"
          content="Asesoría jurídica especializada en licenciamiento ambiental en Colombia. Acompañamiento legal y estratégico ante la ANLA y autoridades ambientales regionales."
        />

        {/* ===== Schema: LegalService ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Castillo Rojo – Derecho Ambiental Corporativo",
            url: "https://www.elcastillorojo.com/licenciamiento-ambiental-colombia",
            logo: "https://www.elcastillorojo.com/icons/redcastle3.png",
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
            serviceType: "Licenciamiento Ambiental",
            description:
              "Asesoría jurídica especializada en licenciamiento ambiental en Colombia, incluyendo trámites ante la ANLA y autoridades ambientales regionales.",
            provider: {
              "@type": "Organization",
              name: "Castillo Rojo – Derecho Ambiental Corporativo",
              url: "https://www.elcastillorojo.com",
            },
          })}
        </script>

        {/* ===== Schema: Article ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Licenciamiento Ambiental en Colombia",
            description:
              "Análisis jurídico especializado sobre licenciamiento ambiental en Colombia, requisitos legales y acompañamiento estratégico ante la autoridad ambiental.",
            author: {
              "@type": "Organization",
              name: "Castillo Rojo – Derecho Ambiental Corporativo",
            },
            publisher: {
              "@type": "Organization",
              name: "Castillo Rojo – Derecho Ambiental Corporativo",
              logo: {
                "@type": "ImageObject",
                url: "https://www.elcastillorojo.com/icons/redcastle3.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.elcastillorojo.com/licenciamiento-ambiental-colombia",
            },
          })}
        </script>
      </Helmet>

      {/* ===================== */}
      {/* CONTENIDO */}
      {/* ===================== */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-gray-800">
        {/* Volver al inicio */}
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

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-gray-600">
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

        {/* Título */}
        <h1 className="text-4xl font-extrabold text-red-700 mb-6">
          Licenciamiento Ambiental en Colombia
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          El licenciamiento ambiental en Colombia es el instrumento mediante el
          cual la autoridad ambiental autoriza la ejecución de proyectos, obras o
          actividades susceptibles de generar impactos ambientales
          significativos, estableciendo obligaciones, restricciones y medidas de
          manejo ambiental de obligatorio cumplimiento.
        </p>

        <p className="text-lg leading-relaxed mb-10">
          En <strong>Castillo Rojo</strong> brindamos acompañamiento jurídico
          especializado a empresas y titulares de proyectos en todas las etapas
          del licenciamiento ambiental, integrando el análisis normativo con una
          visión estratégica orientada a la prevención del riesgo legal y
          operativo.
        </p>

        {/* VIDEO */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6">
            Enfoque jurídico del licenciamiento ambiental
          </h2>

          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-lg"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/watch?v=PX9Dibbde3o&pp=ygUhbGljZW5jaWFtaWVudG8gYW1iaWVudGFsIGNvbG9tYmlh"
              title="Licenciamiento Ambiental en Colombia – Castillo Rojo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="mt-6 text-lg leading-relaxed">
            En este video se explica el alcance jurídico del licenciamiento
            ambiental, los principales errores que enfrentan los proyectos y la
            importancia de una adecuada gestión legal frente a la autoridad
            ambiental.
          </p>
        </div>

        {/* Desarrollo */}
        <p className="text-lg leading-relaxed mb-6">
          Nuestro acompañamiento incluye la estructuración jurídica del trámite
          ante la ANLA o la autoridad ambiental competente, la revisión de los
          estudios ambientales desde una perspectiva legal y el análisis de los
          riesgos regulatorios asociados al proyecto.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Asimismo, asesoramos procesos de modificación, ajuste o cesión de
          licencias ambientales, y brindamos soporte jurídico permanente durante
          la fase de seguimiento y cumplimiento de obligaciones ambientales.
        </p>

        <p className="text-lg leading-relaxed">
          Una adecuada gestión del licenciamiento ambiental no solo garantiza el
          cumplimiento normativo, sino que constituye una herramienta clave para
          la sostenibilidad jurídica y financiera de los proyectos.
        </p>
      </section>
    </>
  );
};

export default LicenciamientoAmbientalColombia;
