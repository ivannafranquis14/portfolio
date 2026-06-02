import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import Footer from './components/Footer';

// 🌍 1. Diccionario de traducciones para los componentes globales o el Navbar
const traduccionesNavbar = {
  ES: { sobreMi: "Sobre mí", proyectos: "Proyectos", habilidades: "Habilidades", contacto: "Contacto" },
  EN: { sobreMi: "About me", proyectos: "Projects", habilidades: "Skills", contacto: "Contact" },
  IT: { sobreMi: "Su di me", proyectos: "Progetti", habilidades: "Competenze", contacto: "Contatti" }
};

function App() {
  // 🧠 2. Estado global del idioma (Empieza en Español por defecto)
  const [idioma, setIdioma] = useState('ES');

  // Obtener las traducciones activas según el idioma seleccionado
  const tNav = traduccionesNavbar[idioma];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1B1B1B]">
      {/* 📥 Pasamos el idioma y la función para cambiarlo al Navbar */}
      <Navbar idioma={idioma} setIdioma={setIdioma} tNav={tNav} />
      
      <main>
        {/* 📥 Pasamos el idioma actual a cada sección para que sepan en qué idioma mostrarse */}
        <Hero idioma={idioma} />
        <Proyectos idioma={idioma} />
        <Habilidades idioma={idioma} />
      </main>
      
      <Footer idioma={idioma} />
    </div>
  );
}

export default App;
