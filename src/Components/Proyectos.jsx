import React from 'react';

const Proyectos = () => {
  const listaProyectos = [
    {
      title: "CineMaster",
      description: "Una interfaz limpia donde el usuario escribe el nombre de una película y aparecen las tarjetas con los pósters, el año y la puntuación.",
      image: "/screenshot-cinemaster.png", // <- Buscando directo en public
      link: "https://cinemaster-app-two.vercel.app" 
    },
    {
      title: "ZenTask",
      description: "Una aplicación de productividad donde puedes añadir tareas, marcarlas como completadas o eliminarlas.",
      image: "/screenshot-zentask.png", // <- Buscando directo en public
      link: "https://zentask-indol.vercel.app/" 
    },
    {
      title: "Habit Tracker",
      description: "Es un dashboard web de estética oscura para correlacionar el ánimo y la motivación diaria mediante visualizaciones dinámicas. Combina un seguimiento semanal organizado con gráficos interactivos que facilitan el análisis del rendimiento mental.",
      image: "/screenshot-habit-tracker.png", // <- Buscando directo en public
      link: "https://habit-tracker-phi-six-69.vercel.app/" 
    }
  ];

  return (
    <section id="proyectos" className="py-12 bg-transparent">
      <h2 className="text-[40px] font-bold text-center pt-20 pb-10 text-black">MIS PROYECTOS</h2>

      <div className="flex flex-row flex-wrap justify-center gap-10 p-5 w-full max-w-[1400px] mx-auto">
        {listaProyectos.map((proyecto, index) => (
          <div key={index} className="bg-white border border-black w-full sm:w-[380px] md:w-[420px] text-center rounded-xl overflow-hidden shadow-sm flex flex-col justify-between min-h-[480px]">
            
            {/* Contenedor de la Imagen */}
            <div className="bg-[#d9d9d9] h-[200px] border-b border-black flex items-center justify-center text-gray-500 overflow-hidden relative">
              <span className="absolute text-sm font-semibold text-gray-700">{proyecto.title} App</span>
              <img 
                src={proyecto.image} 
                alt={proyecto.title} 
                className="w-full h-full object-cover z-10"
              />
            </div>

            {/* Contenedor de Textos y Botón */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-black">{proyecto.title}</h3>
                <p className="text-sm font-normal text-gray-600 leading-relaxed px-2">
                  {proyecto.description}
                </p>
              </div>
              
              <a 
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit mt-5 mx-auto text-center text-white no-underline tracking-wide py-3 px-8 rounded-2xl bg-[#78b2ff]/90 backdrop-blur-[1px] border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_1px_rgba(0,0,0,0.3)] hover:bg-[#3776c7] hover:scale-105 transition-all duration-300"
              >
                ver proyecto
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;