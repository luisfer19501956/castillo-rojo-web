import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaMapMarkedAlt,
  FaWater,
  FaCloud,
  FaProjectDiagram,
  FaCodeBranch,
  FaBrain,
  FaSatellite,
  FaRobot,
  FaArrowLeft
} from 'react-icons/fa';

interface SoftwareTool {
  name: string;
  description: string;
  icon: React.ElementType;
}

const tools = [
  {
    name: 'ArcGIS / QGIS',
    icon: FaMapMarkedAlt,
    description: `
¿Qué es ArcGIS / QGIS?
ArcGIS y QGIS son Sistemas de Información Geográfica (SIG) que permiten visualizar, analizar y gestionar datos geoespaciales.

🔧 ¿Para qué se usan?
- Elaborar mapas temáticos y análisis espacial.
- Evaluar riesgos ambientales y áreas sensibles.
- Apoyar licencias ambientales y ordenamiento territorial.
- Integrar bases de datos con información geográfica.

⚙️ ¿Cómo funcionan?
- ArcGIS es de pago, QGIS es libre.
- Utilizan capas vectoriales y ráster para representar información.
- Integran herramientas de análisis geoespacial, geoprocesamiento y modelamiento.

💧 ¿Qué datos necesitan?
- Cartografía base (curvas de nivel, vías, ríos).
- Imágenes satelitales o fotos aéreas.
- Base de datos con atributos (Excel, CSV, shapefiles).
- Coordenadas o GPS.

🧪 ¿Qué resultados dan?
- Mapas temáticos, series de tiempo, modelos de visibilidad, pendientes.
- Análisis multicriterio y simulaciones.

📊 ¿Cómo se visualiza?
- Interfaz con capas activables, simbología personalizada y leyenda.
- Salida en mapas impresos, PDF o visor web.

🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- No directamente, pero puede representar zonas verdes, coberturas, corredores ecológicos, etc.
`,
  },
  {
    name: 'HEC-RAS / HEC-HMS',
    icon: FaWater,
    description: `
¿Qué son HEC-RAS y HEC-HMS?
Son modelos del Cuerpo de Ingenieros de EE. UU. para analizar el comportamiento de ríos y cuencas hidrográficas.

🔧 ¿Para qué se usan?
- Modelar crecidas, caudales y láminas de agua.
- Diseñar obras hidráulicas (puentes, alcantarillas, canales).
- Evaluar zonas de inundación.

⚙️ ¿Cómo funcionan?
- **HEC-HMS**: simula precipitación, escorrentía y flujo superficial.
- **HEC-RAS**: simula flujo en canales y ríos (1D o 2D).

💧 ¿Qué datos necesitan?
- Curvas hipsométricas.
- Hidrogramas de entrada.
- Secciones transversales del cauce.
- Rugosidades (coef. Manning).

🧪 ¿Qué resultados dan?
- Caudales, velocidades y tirantes hidráulicos.
- Mapas de inundación y tiempo de concentración.

📊 ¿Cómo se visualiza?
- Perfil del cauce, secciones, y mapas exportables a SIG.

🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- Permite evaluar restauración de cauces, zonas de amortiguación y humedales.
`,
  },
  {
    name: 'AERMOD / CALPUFF',
    icon: FaCloud,
    description: `
¿Qué son AERMOD y CALPUFF?
Modelos de dispersión atmosférica para simular cómo se mueven contaminantes en el aire desde una fuente.

🔧 ¿Para qué se usan?
- Evaluar la calidad del aire.
- Estimar concentraciones de contaminantes.
- Soporte en licencias ambientales y planes de manejo.

⚙️ ¿Cómo funcionan?
- AERMOD: modelo gaussiano para terreno plano.
- CALPUFF: modelo no estacionario para terrenos complejos y larga distancia.

💧 ¿Qué datos necesitan?
- Emisiones (tipo, tasa, altura).
- Topografía y uso del suelo.
- Datos meteorológicos horarios.

🧪 ¿Qué resultados dan?
- Mapas de concentración.
- Superaciones de normas.
- Plumas de dispersión.

📊 ¿Cómo se visualiza?
- Salidas en tablas, gráficos y mapas SIG.

🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- No directamente, pero puede evaluar efectos de barreras vegetales o cambios de cobertura.
`,
  },
  {
    name: 'SWMM (EPA)',
    icon: FaWater,
    description: `
¿Qué es SWMM?
SWMM es un modelo computacional que simula el drenaje pluvial urbano.

🔧 ¿Para qué se usa?
- Diseñar alcantarillado pluvial.
- Analizar inundaciones.
- Evaluar calidad de escorrentía.

⚙️ ¿Cómo funciona?
- Divide la ciudad en subcuencas.
- Simula hidrología y flujo hidráulico en tuberías y canales.

💧 ¿Qué datos necesita?
- Lluvia, suelo, infraestructura, topografía.

🧪 ¿Qué resultados da?
- Caudales, niveles, contaminación.

📊 ¿Cómo se visualiza?
- Mapas, nodos y enlaces animados.

🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- Sí, incluye techos verdes, bioretención, LID.
`,
  },
  {
    name: 'Autodesk Civil 3D',
    icon: FaProjectDiagram,
    description: `
¿Qué es Civil 3D?
Herramienta de diseño y documentación para obras civiles.

🔧 ¿Para qué se usa?
- Diseño de vías, redes, plataformas.
- Integración con topografía y SIG.

⚙️ ¿Cómo funciona?
- Modelado inteligente de objetos.
- Líneas características, superficies, corredores y secciones.

💧 ¿Qué datos necesita?
- Nube de puntos, topografía, alineamientos.

🧪 ¿Qué resultados da?
- Planos, perfiles, cortes, volúmenes.

📊 ¿Cómo se visualiza?
- Interfaz CAD 3D, animaciones.

🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- Puede diseñar infraestructura verde (zanjas, humedales).
`,
  },
  {
    name: 'Python / R',
    icon: FaCodeBranch,
    description: `
¿Qué son Python y R?
Lenguajes de programación muy usados en ciencia de datos y análisis ambiental.

🔧 ¿Para qué se usan?
- Modelos predictivos, estadística, IA.
- Visualización y limpieza de datos.

⚙️ ¿Cómo funcionan?
- Python: versátil, orientado a objetos.
- R: orientado a análisis estadístico.

💧 ¿Qué datos necesitan?
- Series temporales, sensores, CSV, bases SIG.

🧪 ¿Qué resultados dan?
- Gráficos, reportes, dashboards, mapas.

📊 ¿Cómo se visualiza?
- Dash, Streamlit, matplotlib, ggplot.

🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- No directamente, pero permite modelar su efecto.
`,
  },
  {
    name: 'IA TensorFlow',
    icon: FaBrain,
    description: `
¿Qué es IA  TensorFlow?
Uso de redes neuronales para predecir fenómenos ambientales.

🔧 ¿Para qué se usa?
- Predicción de calidad del aire, lluvia, incendios.
- Clasificación de imágenes y patrones.

⚙️ ¿Cómo funciona?
- Usa deep learning para aprender relaciones complejas.

💧 ¿Qué datos necesita?
- Datos históricos, imágenes, sensores.

🧪 ¿Qué resultados da?
- Predicciones, clasificación, segmentación.

 📊 ¿Cómo se visualiza?
- Dashboards interactivos, mapas.

 🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- Puede ayudar a evaluar su impacto indirectamente.
`,
  },
  {
    name: 'Detección Satelital con IA',
    icon: FaSatellite,
    description: `
 ¿Qué es la Detección Satelital con IA?
Uso de imágenes satelitales procesadas con inteligencia artificial para monitoreo ambiental.

 🔧 ¿Para qué se usa?
- Cambios de cobertura, deforestación, incendios.

 ⚙️ ¿Cómo funciona?
- Redes neuronales procesan imágenes de satélite.

💧 ¿Qué datos necesita?
- Imágenes multiespectrales, SIG, datos climáticos.

 🧪 ¿Qué resultados da?
- Mapas clasificados, alertas tempranas.

 📊 ¿Cómo se visualiza?
- Visores, mapas interactivos.

🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- Puede detectar su efecto o implementación.
`,
  },
  {
    name: 'Machine Learning Geoespacial',
    icon: FaRobot,
    description: `
¿Qué es el Machine Learning Geoespacial?
Aplicación de algoritmos de aprendizaje automático sobre datos geoespaciales.

 🔧 ¿Para qué se usa?
- Clasificación de usos del suelo.
- Predicción de zonas de riesgo o impacto.

⚙️ ¿Cómo funciona?
- Algoritmos como Random Forest, SVM, redes neuronales.

💧 ¿Qué datos necesita?
- SIG, imágenes, sensores, clima, socioeconómicos.

 🧪 ¿Qué resultados da?
- Mapas de probabilidad, clusters, alertas.

 📊 ¿Cómo se visualiza?
- Mapas, dashboards.

🌱 ¿Simula Soluciones Basadas en la Naturaleza?
- Puede evaluar su efectividad espacial.
`,
  },
];

export default function EnvironmentalTech() {
  const ref = useRef(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected !== null && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selected]);

  return (
    <motion.section
      ref={ref}
      id="tech" 
      className="relative py-20 px-6 md:px-20 overflow-hidden text-gray-800"
     style={{
  backgroundImage: `url('/textures/tu.textura.png'), linear-gradient(to bottom, rgba(34,197,94,0.07), transparent)`,
  backgroundRepeat: 'repeat',
  backgroundSize: 'auto',
}}

    >
      <motion.h2 className="text-4xl font-extrabold text-green-800 text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
        Tecnología Aplicada
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-green-500 hover:scale-105 transition-transform duration-300"
          >
            {React.createElement(tool.icon, { className: 'text-green-600 text-4xl mx-auto mb-4' })}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
            <p className="text-gray-600">{tool.description.split('\n')[0].replace(/^#+\s*/, '')}</p>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div ref={detailRef} className="bg-white mt-12 p-8 rounded-xl shadow-xl max-w-4xl mx-auto text-left">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-green-700">{tools[selected].name}</h3>
            <button
              onClick={() => setSelected(null)}
              className="text-green-700 hover:text-green-900 text-xl"
              title="Cerrar explicación"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="prose prose-green max-w-none whitespace-pre-wrap">
            {tools[selected].description.replace(/^###\s*/gm, '')}
          </div>
        </div>
      )}
    </motion.section>
  );
}
