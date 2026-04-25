import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#F8FAFC] border-b border-slate-200/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        
        {/* Nombre y Título */}
        <div className="flex flex-col">
          <span className="text-lg font-bold text-slate-800 tracking-tight leading-none">
            MARIBEL FERRADAS
          </span>
          <span className="text-[10px] text-blue-500 font-medium tracking-widest uppercase">
            Agente Inmobiliaria Registrada
          </span>
        </div>

        {/* Botón Contacto Aesthetic */}
        <a 
          href="https://wa.me/51995782505" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#121363] hover:bg-[#386c8c] text-[#F0EEE9] text-[10px] tracking-[0.2em] font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-[#121363]/20 uppercase"
>
          Contactar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;