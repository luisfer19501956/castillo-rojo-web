import React from 'react';
import { motion } from 'framer-motion'; 

const SWMMInfo = () => {
  return (
    <motion.section
      id="swmm-info"
      className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto my-16 text-gray-800"
    >
      <h2 className="text-3xl font-extrabold text-green-700 mb-4">¿Qué es SWMM?</h2>
      <p className="mb-4">
        SWMM es un modelo computacional que simula el drenaje pluvial urbano, es decir, cómo el agua de lluvia se escurre en zonas urbanas, atraviesa tuberías, canales, y llega a cuerpos de agua.
      </p>

      <h3 className="text-xl font-bold text-green-600 mt-6 mb-2">🔧 ¿Para qué se usa?</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Diseñar y evaluar alcantarillado pluvial y combinado.</li>
        <li>Analizar eventos extremos como inundaciones urbanas.</li>
        <li>Planificar soluciones como tanques de retención o drenajes sostenibles (LID).</li>
        <li>Evaluar la calidad del agua arrastrada por escorrentía.</li>
      </ul>

      <h3 className="text-xl font-bold text-green-600 mt-6 mb-2">⚙️ ¿Cómo funciona?</h3>
      <p className="mb-2">
        SWMM divide el área urbana en subcuencas y simula dos componentes principales:
      </p>
      <ul className="list-decimal pl-6 space-y-2">
        <li>
          <strong>Hidrología:</strong> Precipitación, infiltración, escorrentía. Determina cuánto fluye a los drenajes.
        </li>
        <li>
          <strong>Hidráulica:</strong> Flujo en tuberías, canales y estructuras usando ecuaciones como Saint-Venant.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-600 mt-6 mb-2">💧 ¿Qué datos necesita?</h3>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 text-sm mb-4 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Tipo de dato</th>
              <th className="border px-4 py-2 text-left">Ejemplos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Clima</td>
              <td className="border px-4 py-2">Lluvia, temperatura, evaporación</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Uso del suelo</td>
              <td className="border px-4 py-2">Impermeables vs. permeables</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Topografía</td>
              <td className="border px-4 py-2">Pendientes, áreas de escurrimiento</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Infraestructura</td>
              <td className="border px-4 py-2">Tuberías, longitudes, materiales</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Contaminación (opcional)</td>
              <td className="border px-4 py-2">Tipos de contaminantes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-bold text-green-600 mt-6 mb-2">🧪 ¿Qué resultados da?</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Caudales y niveles en cada punto del sistema.</li>
        <li>Volúmenes acumulados e infiltración.</li>
        <li>Duración de inundaciones.</li>
        <li>Cargas contaminantes (si se simula calidad).</li>
      </ul>

      <h3 className="text-xl font-bold text-green-600 mt-6 mb-2">📊 ¿Cómo se visualiza?</h3>
      <p className="mb-4">
        SWMM muestra nodos, enlaces y subcuencas en una interfaz gráfica interactiva, con gráficas, tablas y animaciones.
      </p>

      <h3 className="text-xl font-bold text-green-600 mt-6 mb-2">🌱 ¿Simula Soluciones Basadas en la Naturaleza?</h3>
      <p>
        ¡Sí! SWMM incluye elementos LID como bioretención, techos verdes, cisternas y pavimentos permeables.
      </p>
    </motion.section>
  );
};

export default SWMMInfo;

