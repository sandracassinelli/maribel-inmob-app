import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Barra de navegación y registro */}
      <Navbar />

      <main>
        {/* 2. Sección Superior: El Carrusel de propiedades */}
        <Hero />

        {/* 3. Sección Inferior: Bio y Manifiesto de Maribel */}
        <Bio />
      </main>

      {/* Pie de página sencillo para cerrar el diseño */}
      <footer className="bg-slate-900 py-8 text-center">
        <p className="text-slate-500 text-sm">
          © 2026 Maribel Propiedades - Lima, Perú.
        </p>
      </footer>
    </div>
  );
}

export default App;