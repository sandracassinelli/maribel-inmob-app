import React from 'react';

const WhatsAppButton = ({ propertyTitle, agentPhone = "51995782505" }) => {
  // Construye el mensaje automático para que el agente sepa qué propiedad interesa
  const message = encodeURIComponent(
    `Hola Maribel, vi la propiedad "${propertyTitle}" en tu web y me gustaría recibir más información.`
  );
  
  const whatsappUrl = `https://wa.me/${agentPhone}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
    >
      Consultar por WhatsApp
    </a>
  );
};

export default WhatsAppButton;