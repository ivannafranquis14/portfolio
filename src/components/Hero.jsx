import React from 'react';
import miFoto from '../../public/yop.jpeg'; 

const Hero = () => {
  return (
    <section id="sobre-mi" className="bg-[#111740] flex flex-col md:flex-row items-center justify-between py-[100px] px-6 md:px-[50px] gap-[50px] text-white">
      <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-[60px] font-bold leading-tight p-2.5 pb-4 text-center md:text-left">
          Hola Soy Ivanna Franquis
        </h1>
        <h2 className="text-2xl md:text-[40px] font-semibold text-slate-300 p-2.5 pb-4 text-center md:text-left">
          Desarrolladora Frontend y QA
        </h2>
        <p className="text-lg md:text-[25px] font-light max-w-2xl text-slate-200 p-2.5 pb-4 text-center md:text-left">
          Exploradora tecnológica y diseñadora por vocación. Como QA y Frontend Developer, transformo la curiosidad en soluciones digitales mediante el aprendizaje constante y la empatía. Amante de los animales y fiel defensora de la amabilidad en cada interacción.
        </p>
        
        <a 
          href="#proyectos" 
          className="block w-fit mt-[30px] mx-auto md:mx-0 text-center text-white no-underline font-light tracking-wide py-3 px-8 rounded-[50px] bg-blue-400/20 backdrop-blur-[10px] border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.3)] hover:bg-[#1e3553] transition-all duration-300"
        >
          Conoce mi trabajo
        </a>
      </div>
      
      <img 
        src={miFoto} 
        alt="Foto de Ivanna Franquis" 
        className="w-[300px] h-[300px] object-cover rounded-full border-4 border-blue-400/30 shadow-2xl"
      />
    </section>
  );
};

export default Hero;