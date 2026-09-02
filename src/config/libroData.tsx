import React from "react";
import { motion } from "framer-motion";
import { ListaCitas } from "../Components/CitasComponents";

export interface HojaData {
  id: string | number;
  esTapa: boolean;
  lado_activo: boolean;
  frente: React.ReactNode;
  reverso: React.ReactNode;
}

// TEXTO EXACTO DE LA CARTA
const TEXTO_CARTA_PARTE_1 = `Bueno, mi amorcito,

Ya casi vamos para dos años y ha sido demasiado especial el hecho de haberte conocido, mi amor. Desde que empezamos a conocernos, cada día ha sido bonito, más que todo porque hemos llegado a construir no solo una relación, sino un vínculo mutuo. Sé que me amas y tú sabes que te amo con todo mi ser.

Deseo el poder seguir junto a ti no solo minutos, no solo horas, no solo días; deseo el poder compartir todo mi corto tiempo de vida, que es mucho para mí. Deseo seguir construyendo una historia junto a ti paso a paso.`;

const TEXTO_CARTA_PARTE_2 = `Si tuviera que decir que hay una cosa que me encanta de estar a tu lado, es cómo me siento a tu lado, cómo deseo estar más pegado a ti, estar besándote, mordiendo, lamiendo, abrazando. Es increíble cómo me llego a sentir junto a ti, tanto que el tiempo pasa a ser una cosa que me estresa porque no quiero que avance, no quiero que corran los segundos, no quiero que pase ese bus, no quiero dar otro paso porque sé que duraré días sin ti a mi lado. Me destroza el darte un adiós cuando nos despedimos, ya que yo no deseo despedirme, sino poder dormir a tu lado, despertar con un hola, que el adiós sea ese arrunchis que tendremos juntos, ese abrazo sea el buenas noches.

Qué hermoso es tenerte porque amo, adoro cómo eres, aunque piense que estás loca, pero loco me tienes por ti. Gracias, mi amor, por estar en esta relación y esforzarnos por ella. No se que mas palabras decir solo que aqui tendremos un libro para los dos que era lo que tenia pensado desde el principio mi niña. aqui escribir nuestro camino juntos.`;

// Collages configurados con tus fotos locales (2.jpeg hasta 12.jpeg)
const hojasCollage: HojaData[] = [
  {
    id: 3,
    esTapa: false,
    lado_activo: true,
    frente: (
      <div className="w-full h-full p-4 bg-[#F4EAE1] relative flex flex-col justify-between overflow-hidden select-none">
        <h3 className="text-xs font-bold text-[#6B21A8] uppercase tracking-wider text-center z-0">
          Recuerdos #1
        </h3>

        <motion.div 
          drag
          dragConstraints={{ top: 0, left: 0, right: 170, bottom: 260 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute top-10 left-4 w-28 bg-white p-1.5 shadow-md border border-[#E9D5FF] rounded-sm cursor-grab active:cursor-grabbing z-10"
        >
          <img src="/2.jpeg" alt="Recuerdo 2" className="w-full h-20 object-cover rounded-sm pointer-events-none" />
          <p className="text-[8px] text-center mt-1 font-serif text-[#881337]">Momento especial</p>
        </motion.div>

        <motion.div 
          drag
          dragConstraints={{ top: -140, left: -120, right: 50, bottom: 100 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute bottom-16 right-4 w-32 bg-white p-1.5 shadow-md border border-[#FBCFE8] rounded-sm cursor-grab active:cursor-grabbing z-20"
        >
          <img src="/3.jpeg" alt="Recuerdo 3" className="w-full h-22 object-cover rounded-sm pointer-events-none" />
          <p className="text-[8px] text-center mt-1 font-serif text-[#6B21A8]">Inolvidable</p>
        </motion.div>

        <div className="bg-[#FAE8FF] p-2 rounded-md border border-[#E9D5FF] z-0">
          <p className="text-[10px] text-[#581C87] italic text-center">"Cada segundo a tu lado cuenta..."</p>
        </div>
      </div>
    ),
    reverso: (
      <div className="w-full h-full p-4 bg-[#F4EAE1] relative flex flex-col justify-between overflow-hidden select-none">
        <motion.div 
          drag
          dragConstraints={{ top: 0, left: -140, right: 40, bottom: 260 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute top-10 right-4 w-28 bg-white p-1.5 shadow-md border border-[#93C5FD] rounded-sm cursor-grab active:cursor-grabbing z-10"
        >
          <img src="/4.jpeg" alt="Recuerdo 4" className="w-full h-20 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <motion.div 
          drag
          dragConstraints={{ top: -140, left: 0, right: 140, bottom: 100 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute bottom-16 left-4 w-32 bg-white p-1.5 shadow-md border border-[#FBCFE8] rounded-sm cursor-grab active:cursor-grabbing z-20"
        >
          <img src="/5.jpeg" alt="Recuerdo 5" className="w-full h-22 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <div className="bg-[#EFF6FF] p-2 rounded-md border border-[#BFDBFE] z-0">
          <p className="text-[10px] text-[#1E40AF] italic text-center">"Juntos hacia cualquier lugar."</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    esTapa: false,
    lado_activo: true,
    frente: (
      <div className="w-full h-full p-4 bg-[#F4EAE1] relative flex flex-col justify-between overflow-hidden select-none">
        <h3 className="text-xs font-bold text-[#6B21A8] uppercase tracking-wider text-center z-0">
          Recuerdos #2
        </h3>

        <motion.div 
          drag
          dragConstraints={{ top: 0, left: 0, right: 170, bottom: 260 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute top-10 left-4 w-28 bg-white p-1.5 shadow-md border border-[#E9D5FF] rounded-sm cursor-grab active:cursor-grabbing z-10"
        >
          <img src="/6.jpeg" alt="Recuerdo 6" className="w-full h-20 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <motion.div 
          drag
          dragConstraints={{ top: -140, left: -120, right: 50, bottom: 100 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute bottom-16 right-4 w-32 bg-white p-1.5 shadow-md border border-[#FBCFE8] rounded-sm cursor-grab active:cursor-grabbing z-20"
        >
          <img src="/7.jpeg" alt="Recuerdo 7" className="w-full h-22 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <div className="bg-[#FAE8FF] p-2 rounded-md border border-[#E9D5FF] z-0">
          <p className="text-[10px] text-[#581C87] italic text-center">"Sonrisas que enamoran."</p>
        </div>
      </div>
    ),
    reverso: (
      <div className="w-full h-full p-4 bg-[#F4EAE1] relative flex flex-col justify-between overflow-hidden select-none">
        <motion.div 
          drag
          dragConstraints={{ top: 0, left: -140, right: 40, bottom: 260 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute top-10 right-4 w-28 bg-white p-1.5 shadow-md border border-[#93C5FD] rounded-sm cursor-grab active:cursor-grabbing z-10"
        >
          <img src="/8.jpeg" alt="Recuerdo 8" className="w-full h-20 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <motion.div 
          drag
          dragConstraints={{ top: -140, left: 0, right: 140, bottom: 100 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute bottom-16 left-4 w-32 bg-white p-1.5 shadow-md border border-[#FBCFE8] rounded-sm cursor-grab active:cursor-grabbing z-20"
        >
          <img src="/9.jpeg" alt="Recuerdo 9" className="w-full h-22 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <div className="bg-[#EFF6FF] p-2 rounded-md border border-[#BFDBFE] z-0">
          <p className="text-[10px] text-[#1E40AF] italic text-center">"Amor infinito."</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    esTapa: false,
    lado_activo: true,
    frente: (
      <div className="w-full h-full p-4 bg-[#F4EAE1] relative flex flex-col justify-between overflow-hidden select-none">
        <h3 className="text-xs font-bold text-[#6B21A8] uppercase tracking-wider text-center z-0">
          Recuerdos #3
        </h3>

        <motion.div 
          drag
          dragConstraints={{ top: 0, left: 0, right: 170, bottom: 260 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute top-10 left-4 w-28 bg-white p-1.5 shadow-md border border-[#E9D5FF] rounded-sm cursor-grab active:cursor-grabbing z-10"
        >
          <img src="/10.jpeg" alt="Recuerdo 10" className="w-full h-20 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <motion.div 
          drag
          dragConstraints={{ top: -140, left: -120, right: 50, bottom: 100 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute bottom-16 right-4 w-32 bg-white p-1.5 shadow-md border border-[#FBCFE8] rounded-sm cursor-grab active:cursor-grabbing z-20"
        >
          <img src="/11.jpeg" alt="Recuerdo 11" className="w-full h-22 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <div className="bg-[#FAE8FF] p-2 rounded-md border border-[#E9D5FF] z-0">
          <p className="text-[10px] text-[#581C87] italic text-center">"Construyendo nuestro camino."</p>
        </div>
      </div>
    ),
    reverso: (
      <div className="w-full h-full p-4 bg-[#F4EAE1] relative flex flex-col justify-between overflow-hidden select-none">
        <motion.div 
          drag
          dragConstraints={{ top: 0, left: -140, right: 40, bottom: 260 }}
          dragElastic={0.05}
          whileTap={{ scale: 1.05, zIndex: 30 }}
          className="absolute top-10 right-4 w-28 bg-white p-1.5 shadow-md border border-[#93C5FD] rounded-sm cursor-grab active:cursor-grabbing z-10"
        >
          <img src="/12.jpeg" alt="Recuerdo 12" className="w-full h-20 object-cover rounded-sm pointer-events-none" />
        </motion.div>

        <div className="bg-[#EFF6FF] p-2 rounded-md border border-[#BFDBFE] z-0 mt-auto">
          <p className="text-[10px] text-[#1E40AF] italic text-center">"Por muchos momentos más juntos."</p>
        </div>
      </div>
    )
  }
];

export const DATOS_LIBRO: HojaData[] = [
  // HOJA 0: TAPA FRONTAL
  {
    id: "tapa-frontal",
    esTapa: true,
    lado_activo: true,
    frente: (
      <div className="flex flex-col items-center justify-between h-full p-6 text-center bg-gradient-to-br from-[#7C3AED] via-[#3B82F6] to-[#0E7490] text-white select-none border-r-4 border-[#1E1B4B]">
        <h1 className="text-xl font-serif font-extrabold tracking-wide drop-shadow-md mt-2">
          ¡Feliz Aniversario mi Machesito!
        </h1>

        <div className="my-auto w-36 h-36 rounded-full border-4 border-white/40 overflow-hidden shadow-2xl bg-black/20 flex items-center justify-center">
          <img 
            src="/portada.jpeg" 
            alt="Portada" 
            className="w-full h-full object-cover" 
          />
        </div>

        <p className="text-xs font-medium tracking-wide bg-black/30 px-3 py-1.5 rounded-full border border-white/20">
          Te amo y llenemos este libro juntos ❤️
        </p>
      </div>
    ),
    reverso: (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#2E1065] text-[#F3E8FF] select-none">
        <span className="text-3xl mb-2">✨</span>
        <p className="text-xs italic font-serif">Nuestra historia comienza aquí...</p>
      </div>
    )
  },

  // HOJA 1: FOTO A PÁGINA COMPLETA
  {
    id: 1,
    esTapa: false,
    lado_activo: true,
    frente: (
      <div className="w-full h-full relative overflow-hidden">
        <img 
          src="/1.jpeg" 
          alt="Foto Hoja 1" 
          className="w-full h-full object-cover pointer-events-none" 
        />
      </div>
    ),
    reverso: <div className="w-full h-full bg-[#F4EAE1]" />
  },

  // HOJA 2: CARTA COMPLETA (PARTE 1 Y PARTE 2)
  {
    id: 2,
    esTapa: false,
    lado_activo: true,
    frente: (
      <div className="flex flex-col h-full p-6 bg-[#F4EAE1] text-[#3D2514]">
        <div className="border-b-2 border-dashed border-[#EC4899] pb-2 mb-3 text-center">
          <h2 className="text-base font-bold font-serif text-[#BE185D]">Para mi amorcito 💌</h2>
        </div>
        <div className="grow p-4 bg-[#FFFBF7] rounded-lg border border-[#FBCFE8] shadow-inner text-[11px] leading-relaxed overflow-y-auto whitespace-pre-line font-serif">
          {TEXTO_CARTA_PARTE_1}
        </div>
      </div>
    ),
    reverso: (
      <div className="flex flex-col h-full p-6 bg-[#F4EAE1] text-[#3D2514]">
        <div className="border-b-2 border-dashed border-[#EC4899] pb-2 mb-3 text-center">
          <h2 className="text-base font-bold font-serif text-[#BE185D]">Nuestro camino ❤️</h2>
        </div>
        <div className="grow p-4 bg-[#FFFBF7] rounded-lg border border-[#FBCFE8] shadow-inner text-[11px] leading-relaxed overflow-y-auto whitespace-pre-line font-serif">
          {TEXTO_CARTA_PARTE_2}
        </div>
      </div>
    )
  },

  ...hojasCollage,

  // HOJA CITAS COMPLETAS (50 CITAS)
  {
    id: 6,
    esTapa: false,
    lado_activo: true,
    frente: <ListaCitas />,
    reverso: (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#F4EAE1] text-[#7C3AED]">
        <span className="text-3xl mb-2">🎈</span>
        <p className="text-xs font-serif font-semibold">¡A completar todas las citas juntos!</p>
      </div>
    )
  },

 

  // HOJA FINAL: TAPA TRASERA
  {
    id: "tapa-trasera",
    esTapa: true,
    lado_activo: true,
    frente: (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#2E1065] text-[#F3E8FF] select-none">
        <h3 className="text-sm font-semibold">Fin de nuestro primer tomo</h3>
      </div>
    ),
    reverso: (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-bl from-[#0E7490] via-[#3B82F6] to-[#7C3AED] text-white select-none border-l-4 border-[#1E1B4B]">
        <h2 className="text-xl font-serif font-bold mb-2">Para Siempre</h2>
        <p className="text-xs text-[#E0E7FF]">Continuará...</p>
      </div>
    )
  }
];