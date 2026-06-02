import React from 'react';
import miFoto from '../../public/yop.jpeg'; 

const traduccionesHero = {
  ES: {
    saludo: "Hola Soy Ivanna Franquis",
    rol: "Desarrolladora Frontend y QA",
    bio: "Exploradora tecnológica y diseñadora por vocación. Como QA y Frontend Developer, transformo la curiosidad en soluciones digitales mediante el aprendizaje constante y la empatía. Amante de los animales y fiel defensora de la amabilidad en cada interacción.",
    boton: "Conoce mi trabajo"
  },
  EN: {
    saludo: "Hi, I am Ivanna Franquis",
    rol: "Frontend Developer & QA Engineer",
    bio: "Tech explorer and designer by vocation. As a QA and Frontend Developer, I transform curiosity into digital solutions through continuous learning and empathy. Animal lover and a loyal advocate for kindness in every interaction.",
    boton: "View my work"
  },
  IT: {
    saludo: "Ciao, Sono Ivanna Franquis",
    rol: "Sviluppatrice Frontend e QA",
    bio: "Esploratrice tecnologica e designer per vocazione. Come QA e Frontend Developer, trasformo la curiosità in soluzioni digitali attraverso l'apprendimento costante e l'empatia. Amante degli animali e fedele sostenitrice della gentilezza in ogni interazione.",
    boton: "Scopri il mio lavoro"
  }
};

const Hero = ({ idioma }) => {
  const t = traduccionesHero[idioma];

  return (
    <section id="sobre-mi" className="bg-[#111740] py-[100px] px-6 md:px-[50px] text-white">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-[50px]">
        
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-[60px] font-bold leading-tight p-2.5 pb-4 text-center md:text-left">
            {t.saludo}
          </h1>
          <h2 className="text-2xl md:text-[40px] font-semibold text-slate-300 p-2.5 pb-4 text-center md:text-left">
            {t.rol}
          </h2>
          <p className="text-lg md:text-[25px] font-light max-w-2xl text-slate-200 p-2.5 pb-4 text-center md:text-left">
            {t.bio}
          </p>
          
          <a 
            href="#proyectos" 
            className="block w-fit mt-[30px] mx-auto md:mx-0 text-center text-white no-underline font-light tracking-wide py-3 px-8 rounded-[50px] bg-blue-400/20 backdrop-blur-[10px] border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.3)] hover:bg-[#1e3553] transition-all duration-300"
          >
            {t.boton}
          </a>
        </div>
        
        <img 
          src={miFoto} 
          alt="Foto de Ivanna Franquis" 
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] flex-shrink-0 object-cover rounded-full border-4 border-blue-400/30 shadow-2xl"
        />

      </div>
    </section>
  );
};

export default Hero;