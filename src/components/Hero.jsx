import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

const Hero = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Catálogo de Propiedades</h2>
            <p className="text-slate-500 mt-2">Explora las mejores oportunidades de inversión en Lima.</p>
          </div>
          <div className="flex gap-2">
            {/* Estos botones son visuales por ahora para el estilo del carrusel */}
            <button className="p-2 rounded-full border border-slate-300 hover:bg-white transition">←</button>
            <button className="p-2 rounded-full border border-slate-300 hover:bg-white transition">→</button>
          </div>
        </div>

        {/* Contenedor del Carrusel con scroll horizontal */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {properties.map((item) => (
            <div key={item.id} className="snap-center">
              <PropertyCard property={item} />
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-slate-400 mt-4 italic">
          Desliza para ver más propiedades
        </p>
      </div>
    </section>
  );
};

export default Hero;