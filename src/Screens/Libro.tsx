import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { DATOS_LIBRO, type HojaData } from "../config/libroData";

const LibroInteractivo: React.FC = () => {
  const ANCHO_PAGINA = 300;
  const ALTO_PAGINA = 450;

  const [hojas, setHojas] = useState<HojaData[]>(DATOS_LIBRO);
  const [hojaArrastrandose, setHojaArrastrandose] = useState<string | number | null>(null);

  return (
    <section className="min-h-screen w-full bg-[#0F172A] flex items-center justify-center p-4 select-none">
      <div className="relative w-[600px] h-[450px] bg-[#1E1B4B] rounded-xl shadow-[0_25px_50px_-12px_rgba(124,58,237,0.25)] flex overflow-hidden">
        <div className="w-1/2 h-full bg-[#2E1065] rounded-l-md border-r border-[#1E1B4B]" />
        <div className="w-1/2 h-full bg-[#2E1065] rounded-r-md" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-full bg-[#0284C7] z-50 shadow-lg pointer-events-none" />

        {hojas.map((hoja, index) => {
          let zIndexCalculado = hoja.lado_activo 
            ? hojas.length - index 
            : index + 1;

          if (hojaArrastrandose === hoja.id) {
            zIndexCalculado = 100;
          }

          return (
            <HojaInteractiva
              key={hoja.id}
              hoja={hoja}
              zIndex={zIndexCalculado}
              ancho={ANCHO_PAGINA}
              alto={ALTO_PAGINA}
              onDragStart={() => setHojaArrastrandose(hoja.id)}
              onTurn={(nuevoLado) => {
                setHojaArrastrandose(null);
                setHojas((prev) =>
                  prev.map((h) => (h.id === hoja.id ? { ...h, lado_activo: nuevoLado } : h))
                );
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

interface HojaProps {
  hoja: HojaData;
  zIndex: number;
  ancho: number;
  alto: number;
  onDragStart: () => void;
  onTurn: (nuevoLado: boolean) => void;
}

const HojaInteractiva: React.FC<HojaProps> = ({ hoja, zIndex, ancho, alto, onDragStart, onTurn }) => {
  const initialX = hoja.lado_activo ? ancho : -ancho;
  const dragX = useMotionValue(initialX);

  const maxCurvatura = hoja.esTapa ? 12 : 35;

  const pathD = useTransform(dragX, (x) => {
    const curveOffset = (1 - Math.abs(x) / ancho) * maxCurvatura;
    const controlX = x > 0 ? x - curveOffset : x + curveOffset;

    return `M 0,0 
            L ${x},0 
            Q ${controlX},${alto / 2} ${x},${alto} 
            L 0,${alto} 
            Z`;
  });

  const showFront = useTransform(dragX, (x) => (x >= 0 ? 1 : 0));
  const showBack = useTransform(dragX, (x) => (x < 0 ? 1 : 0));

  const handleDragEnd = () => {
    const xActual = dragX.get();

    if (xActual < 0) {
      animate(dragX, -ancho, { type: "spring", stiffness: 200, damping: 20 });
      onTurn(false);
    } else {
      animate(dragX, ancho, { type: "spring", stiffness: 200, damping: 20 });
      onTurn(true);
    }
  };

  return (
    <div className="absolute left-1/2 top-0 w-0 h-full overflow-visible pointer-events-none" style={{ zIndex }}>
      {/* Permitimos que los clics atraviesen el SVG si no se presiona el dibujo */}
      <svg className="overflow-visible pointer-events-none" width={ancho} height={alto}>
        <defs>
          <clipPath id={`page-clip-${hoja.id}`}>
            <motion.path d={pathD} />
          </clipPath>
          <filter id={`shadow-${hoja.id}`} x="-30%" y="-10%" width="160%" height="120%">
            <feDropShadow 
              dx="0" 
              dy={hoja.esTapa ? "10" : "5"} 
              stdDeviation={hoja.esTapa ? "8" : "4"} 
              floodColor="#000000" 
              floodOpacity={hoja.esTapa ? "0.6" : "0.3"} 
            />
          </filter>
        </defs>

        <motion.path
          d={pathD}
          fill={hoja.esTapa ? "#2E1065" : "#F4EAE1"}
          stroke={hoja.esTapa ? "#1E1B4B" : "#D0C0B0"}
          strokeWidth={hoja.esTapa ? "3" : "1"}
          filter={`url(#shadow-${hoja.id})`}
          className="pointer-events-none"
        />

        <g clipPath={`url(#page-clip-${hoja.id})`}>
          {/* Habilitamos los eventos de ratón explícitamente dentro del foreignObject */}
          <motion.foreignObject x="0" y="0" width={ancho} height={alto} style={{ opacity: showFront }}>
            <div className="w-full h-full pointer-events-auto">
              {hoja.frente}
            </div>
          </motion.foreignObject>

          <motion.foreignObject x={-ancho} y="0" width={ancho} height={alto} style={{ opacity: showBack }}>
            <div className="w-full h-full pointer-events-auto">
              {hoja.reverso}
            </div>
          </motion.foreignObject>
        </g>
      </svg>

      {/* Pestaña / Manija lateral reducida para pasar hoja sin tapar las citas */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -ancho, right: ancho }}
        dragElastic={0.05}
        style={{ x: dragX }}
        onDragStart={onDragStart}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
        className="absolute top-0 -left-3 w-6 h-full cursor-grab flex items-center justify-center z-50 pointer-events-auto"
      >
        <div className={`w-1.5 h-24 rounded-full opacity-80 ${hoja.esTapa ? 'bg-[#38BDF8]' : 'bg-[#EC4899]'}`} />
      </motion.div>
    </div>
  );
};

export default LibroInteractivo;