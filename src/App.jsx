import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1B1B1B]">
      <Navbar />
      <main>
        <Hero />
        <Proyectos />
        <Habilidades />
      </main>
      <Footer />
    </div>
  );
}

export default App;

