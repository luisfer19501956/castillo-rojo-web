import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section
      id="quienes-somos"
      className="relative px-6 py-20 overflow-hidden"
      style={{
        backgroundImage: `url('/textures/fibra-papel.png'), linear-gradient(to bottom, #fefcf9, #f5f5f5)`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundBlendMode: 'multiply',
      }}
    >
      {/* Elemento decorativo */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-100 rounded-full opacity-30 blur-3xl z-0"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-8">
          ¿Quiénes somos?
        </h2>

        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          <strong>Castillo Rojo</strong> es una firma de <strong>Derecho Ambiental Corporativo</strong> que integra
          el conocimiento jurídico con la ingeniería y las ciencias ambientales para
          acompañar a empresas, proyectos y organizaciones en el cumplimiento normativo,
          la gestión del riesgo y la toma de decisiones estratégicas.
        </p>

        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-6">
          Actuamos con rigor técnico y criterio jurídico en procesos de
          <strong> licenciamiento ambiental</strong>, trámites ante la ANLA y las
          Corporaciones Autónomas Regionales, seguimiento a obligaciones ambientales,
          elaboración de estudios técnicos y defensa en procesos sancionatorios ambientales.
        </p>

        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-6">
          Nuestra diferencia radica en una visión integral del territorio:
          analizamos cada proyecto desde su impacto real, su viabilidad legal y su
          sostenibilidad en el tiempo, alineando el desarrollo empresarial con la
          normativa ambiental colombiana y las mejores prácticas técnicas.
        </p>
      </motion.div>

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-red-200 opacity-30"></div>
    </section>
  );
};

export default WhoWeAre;
