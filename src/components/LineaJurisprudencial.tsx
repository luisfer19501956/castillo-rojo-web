import React from 'react';
import { motion } from 'framer-motion';

const lineaJurisprudencial = [
  {
    anio: '2009',
    tipo: 'Control previo',
    titulo: 'Sentencia C-196 de 2009',
    descripcion:
      'Decisión sobre objeciones presidenciales al proyecto de la Ley 1333 de 2009. Hace parte de la historia constitucional del régimen sancionatorio ambiental y delimita su marco inicial.',
  },
  {
    anio: '2010',
    tipo: 'Control de constitucionalidad',
    titulo: 'Sentencia C-401 de 2010',
    descripcion:
      'Declara la exequibilidad de varias disposiciones de la Ley 1333 de 2009 y reconoce la especialidad del derecho sancionatorio ambiental.',
  },
  {
    anio: '2010',
    tipo: 'Control de constitucionalidad',
    titulo: 'Sentencia C-595 de 2010',
    descripcion:
      'Reitera que el procedimiento sancionatorio ambiental debe respetar plenamente el debido proceso, aun tratándose de una actuación administrativa.',
  },
  {
    anio: '2010',
    tipo: 'Control de constitucionalidad',
    titulo: 'Sentencia C-703 de 2010',
    descripcion:
      'Avaló el régimen sancionatorio ambiental, destacando su naturaleza preventiva y la legitimidad de medidas administrativas para proteger el ambiente.',
  },
  {
    anio: '2010',
    tipo: 'Control de constitucionalidad',
    titulo: 'Sentencia C-742 de 2010',
    descripcion:
      'Examina disposiciones procedimentales de la Ley 1333 y reafirma la necesidad de garantías procesales mínimas en la actuación sancionatoria ambiental.',
  },
  {
    anio: '2011',
    tipo: 'Control de constitucionalidad',
    titulo: 'Sentencia C-632 de 2011',
    descripcion:
      'Profundiza en la compatibilidad del procedimiento sancionatorio ambiental con los principios constitucionales del derecho sancionador.',
  },
  {
    anio: '2012',
    tipo: 'Control de constitucionalidad',
    titulo: 'Sentencia C-364 de 2012',
    descripcion:
      'Analiza el alcance de las sanciones ambientales y su proporcionalidad dentro del marco de la Ley 1333 de 2009.',
  },
  {
    anio: '2017',
    tipo: 'Control de constitucionalidad',
    titulo: 'Sentencia C-219 de 2017',
    descripcion:
      'Reitera la exequibilidad del procedimiento sancionatorio ambiental y su sujeción a principios como legalidad, proporcionalidad y debido proceso.',
  },
  {
    anio: '2025',
    tipo: 'Tutela',
    titulo: 'Sentencia T-210 de 2025',
    descripcion:
      'Contiene consideraciones relevantes sobre el procedimiento sancionatorio ambiental, sus etapas y efectos, en el contexto de la Ley 1333 y sus modificaciones posteriores, incluida la Ley 2387 de 2024.',
  },
];

const LineaJurisprudencial = () => {
  return (
    <section className="mt-24 relative">

      <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-14">
        Línea jurisprudencial del procedimiento sancionatorio ambiental
      </h2>

      {/* Línea vertical */}
      <div className="absolute left-3 top-0 bottom-0 w-1 bg-red-700/20 hidden md:block" />

      <div className="space-y-14 relative">
        {lineaJurisprudencial.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="md:pl-16 relative"
          >
            {/* Punto en la línea */}
            <div className="hidden md:block absolute left-1.5 top-3 w-4 h-4 rounded-full bg-red-700" />

            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <span className="text-xs uppercase tracking-wide font-bold text-red-700">
                {item.anio} · {item.tipo}
              </span>

              <h3 className="text-lg font-semibold mt-2">
                {item.titulo}
              </h3>

              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 bg-gray-100 border-l-4 border-red-700 p-6 rounded-lg">
        <p className="text-sm text-gray-800 leading-relaxed">
          La presente línea jurisprudencial recoge las principales sentencias de la Corte Constitucional
          que han definido, interpretado y validado el procedimiento sancionatorio ambiental en Colombia,
          sin perjuicio de otros pronunciamientos relevantes de la Jurisdicción Contencioso Administrativa
          y decisiones de tutela que desarrollan garantías procesales específicas.
        </p>
      </div>

    </section>
  );
};

export default LineaJurisprudencial;

