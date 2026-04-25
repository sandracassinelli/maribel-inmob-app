import React, { useState } from 'react';

const PropertyCard = ({ property }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-[280px] bg-white rounded-2xl overflow-hidden shadow-premium transition-all duration-500 border border-transparent hover:border-[#386c8c]/20 group">
        <div className="h-56 w-full relative">
          <img src={property.mainImage} alt={property.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-[#121363]/90 backdrop-blur-md text-[#F0EEE9] text-[9px] tracking-[0.2em] font-medium px-3 py-1 rounded-sm uppercase">
            {property.tags[0]}
          </div>
        </div>

        <div className="p-6">
          <h4 className="text-[#121363] font-light text-lg leading-snug mb-2 h-14 overflow-hidden uppercase tracking-tight">
            {property.title}
          </h4>
          <p className="text-[#386c8c] font-medium text-lg mb-6">
            {property.price}
          </p>
          
          {/* Iconos de Línea Fina */}
          <div className="flex justify-between text-[#adaba5] text-[10px] mb-6 tracking-[0.1em] border-t border-[#F0EEE9] pt-4 uppercase">
            <span className="flex items-center gap-2">
              <div className="w-3 h-[1px] bg-[#dbb148]"></div> {property.beds} Dorms
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-[1px] bg-[#dbb148]"></div> {property.area}
            </span>
          </div>

          <button 
            onClick={() => setShowModal(true)}
            className="w-full bg-[#121363] text-[#F0EEE9] text-[10px] tracking-[0.2em] font-bold py-4 rounded-lg shadow-xl shadow-[#121363]/10 hover:bg-[#386c8c] transition-all uppercase"
          >
            Ver Detalles
          </button>
        </div>
      </div>

      {/* MODAL DE FOTOS (Se activa al dar clic) */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#121363]/95 backdrop-blur-sm">
          <div className="relative bg-[#F0EEE9] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 shadow-2xl">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#121363] text-2xl font-light hover:rotate-90 transition-transform"
            >
              ✕
            </button>
            <h2 className="text-[#121363] text-2xl font-light uppercase tracking-widest mb-6">{property.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={property.mainImage} className="rounded-xl w-full h-64 object-cover shadow-lg" alt="Principal" />
              {property.moreImages.map((img, index) => (
                <img key={index} src={img} className="rounded-xl w-full h-64 object-cover shadow-lg" alt={`Galeria ${index}`} />
              ))}
            </div>
            <p className="mt-8 text-[#121363] font-light leading-relaxed">{property.description}</p>
            <a 
              href="https://wa.me/51995782505" 
              className="mt-8 inline-block bg-[#dbb148] text-[#121363] px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest"
            >
              Solicitar Visita
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;