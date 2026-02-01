import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Hecho ambiental",
    description:
      "Queja, denuncia, visita técnica o hallazgo directo por parte de la autoridad ambiental competente.",
  },
  {
    id: 2,
    title: "Indagación preliminar",
    description:
      "Actuación previa para verificar la existencia de mérito suficiente para iniciar el proceso sancionatorio.",
  },
  {
    id: 3,
    title: "Auto de apertura del proceso",
    description:
      "Apertura formal del expediente sancionatorio e identificación del presunto infractor.",
  },
  {
    id: 4,
    title: "Formulación de cargos",
    description:
      "Imputación fáctica y jurídica: hechos, normas presuntamente infringidas, nexo causal y modalidad de culpa o dolo.",
  },
  {
    id: 5,
    title: "Descargos y etapa probatoria",
    description:
      "Ejercicio del derecho de defensa mediante descargos, pruebas técnicas, peritajes y estudios especializados.",
  },
  {
    id: 6,
    title: "Alegatos de conclusión",
    description:
      "Valoración integral de las pruebas y fundamentos jurídicos antes de la decisión.",
  },
  {
    id: 7,
    title: "Resolución sancionatoria o de archivo",
    description:
      "Decisión motivada que impone sanción, exonera de responsabilidad o archiva la actuación.",
  },
  {
    id: 8,
    title: "Recursos en vía gubernativa",
    description:
      "Interposición de recursos de reposición y, en su caso, apelación.",
  },
];

const Procsanc = () => {
  return (
    <section className="relative bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Estructura del proceso sancionatorio ambiental
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-neutral-600">
            Flujo procedimental previsto en la Ley 1333 de 2009, orientado a garantizar el
            debido proceso y la correcta imputación de responsabilidad ambiental.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-200/70" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={`relative flex items-center gap-10 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-1/2">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="
  rounded-2xl
  border border-neutral-200
  bg-white
  p-7
  shadow-[0_10px_30px_rgba(185,28,28,0.12)]
"
                  >
                    <h3 className="text-base font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Nodo */}
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-red-700 shadow-md ring-4 ring-white">
                  <span className="text-sm font-semibold text-white">
                    {step.id}
                  </span>
                </div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capas estratégicas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 grid gap-10 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h4 className="text-lg font-semibold text-neutral-900">
              Medidas preventivas
            </h4>
            <p className="mt-3 text-sm text-neutral-600">
              Actuaciones administrativas inmediatas que no constituyen sanción y pueden
              adoptarse en cualquier etapa del proceso.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li>• Suspensión de actividades</li>
              <li>• Cierre temporal</li>
              <li>• Decomiso preventivo</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h4 className="text-lg font-semibold text-neutral-900">
              Defensa técnica y probatoria
            </h4>
            <p className="mt-3 text-sm text-neutral-600">
              Elemento determinante para controvertir el nexo causal, la imputación subjetiva
              y la graduación de la sanción.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li>• Prueba pericial</li>
              <li>• Estudios ambientales</li>
              <li>• Informes técnicos especializados</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Procsanc;
