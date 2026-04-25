import React from 'react';

const Bio = () => {
  return (
    <section className="bg-[#121363] py-20 text-[#F0EEE9]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#386c8c]/30">
            <img 
             src={process.env.PUBLIC_URL + "/assets/Maribel_perfil.jpg"} 
             alt="Maribel Ferradas" 
             className="w-full h-full object-cover"
             onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=Revisar+Nombre+Archivo"; }}
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#dbb148] font-semibold mb-4">Gestión Inmobiliaria Boutique</h2>
          <h3 className="text-4xl font-light mb-8 leading-tight">Maribel Ferradas <br/><span className="italic">Asesoría con Propósito</span></h3>
          <p className="text-[#adaba5] text-lg leading-relaxed mb-10 font-light max-w-xl">
            [Tu texto aquí: "Con más de X años transformando sueños en inversiones seguras en Lima..."]
          </p>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#dbb148]"></div>
            <p className="text-xs uppercase tracking-widest text-[#adaba5]">Reg. PN-XXXX-MVCS</p>
          </div>
        </div>
      </div>
      {/* Botones de Navegación del Carrusel */}
          <div className="flex gap-4 mt-12">
            <button className="w-12 h-12 rounded-full border border-[#121363]/20 text-[#121363] hover:bg-[#121363] hover:text-[#F0EEE9] transition-all flex items-center justify-center shadow-premium bg-white">
              <span className="text-xl">←</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-[#121363]/20 text-[#121363] hover:bg-[#121363] hover:text-[#F0EEE9] transition-all flex items-center justify-center shadow-premium bg-white">
              <span className="text-xl">→</span>
            </button>
          </div>
    </section>
  );
};

export default Bio;