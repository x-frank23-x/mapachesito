import React, { useState } from "react";

export const ListaCitas: React.FC = () => {
  const [completadas, setCompletadas] = useState<Record<number, boolean>>({});

  const toggleCheck = (e: React.MouseEvent, num: number) => {
    // Evita que el clic sea capturado por el gesto de arrastre de la hoja
    e.stopPropagation();
    e.preventDefault();
    
    setCompletadas((prev) => ({ 
      ...prev, 
      [num]: !prev[num] 
    }));
  };

  const citas = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <div className="w-full h-full p-4 bg-[#F4EAE1] flex flex-col relative z-50 select-none">
      <h3 className="text-xs font-bold text-[#9333EA] uppercase tracking-wider text-center mb-2 pointer-events-none">
        Nuestras 50 Citas Juntos ✨
      </h3>
      
      {/* Contenedor de scroll con captura de eventos prioritaria */}
      <div 
        onPointerDown={(e) => e.stopPropagation()} 
        onMouseDown={(e) => e.stopPropagation()}
        className="flex-grow overflow-y-auto space-y-1.5 pr-1 custom-scrollbar pointer-events-auto relative z-50"
      >
        {citas.map((num) => (
          <div
            key={num}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => toggleCheck(e, num)}
            className="flex items-center gap-2 bg-[#FFFBF7] p-2 rounded border border-[#E9D5FF] cursor-pointer hover:bg-[#F3E8FF] active:scale-[0.98] transition-all relative z-50"
          >
            <input
              type="checkbox"
              checked={!!completadas[num]}
              onChange={() => {}} 
              className="accent-[#7C3AED] w-4 h-4 rounded cursor-pointer pointer-events-none"
            />
            <span
              className={`text-[10px] ${
                completadas[num] ? "line-through text-[#A1A1AA]" : "text-[#3D2514] font-medium"
              }`}
            >
              {num}. Cita por definir...
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PlantillaCita: React.FC<{ citaNum: number; descripcion: string }> = ({ citaNum, descripcion }) => {
  return (
    <div className="w-full h-full p-4 bg-[#F4EAE1] flex flex-col items-center justify-between relative z-50">
      <h3 className="text-xs font-bold text-[#0284C7] uppercase tracking-wider pointer-events-none">
        Recuerdo de Cita #{citaNum}
      </h3>

      <div className="w-full h-44 bg-white p-2 rounded-lg shadow-md border-2 border-dashed border-[#38BDF8] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={`https://picsum.photos/300/200?random=${citaNum + 80}`}
          alt="Cita"
          className="w-full h-full object-cover rounded pointer-events-none"
        />
      </div>

      <div 
        onPointerDown={(e) => e.stopPropagation()}
        className="w-full h-16 p-2 bg-[#FFFBF7] rounded border border-[#BAE6FD] text-[10px] text-[#3D2514] leading-relaxed overflow-y-auto pointer-events-auto"
      >
        {descripcion}
      </div>
    </div>
  );
};