import React from 'react';

const Habilidades = () => {
  const skills = [
    { name: "HTML", img: "material-icon-theme_html.png", bgClass: "bg-[#F8F0E5] text-[#1B1B1B]" },
    { name: "React", img: "material-icon-theme_react.png", bgClass: "bg-[#F8F0E5] text-[#1B1B1B]" },
    { name: "JavaScript", img: "material-icon-theme_javascript.png", bgClass: "bg-[#F8F0E5] text-[#1B1B1B]" },
    { name: "Tailwind CSS", img: "skill-icons_tailwindcss-light.png", bgClass: "bg-[#F8F0E5] text-[#1B1B1B]" },
    { name: "Figma", img: "logos_figma.png", bgClass: "bg-[#F8F0E5] text-[#1B1B1B]" },
    { name: "Node.js", img: "vscode-icons_file-type-node.png", bgClass: "bg-[#FFF9C4] text-[#000000]" }, // Amarillo pastel
    { name: "Playwright", img: "logos_playwright.png", bgClass: "bg-[#E3F2FD] text-[#1b1f24]" },  // Azul pastel
    { name: "Pruebas Manuales", img: "healthicons_magnifying-glass.png", bgClass: "bg-[#E3F2FD] text-[#1b1f24]" } // Azul pastel
  ];

  return (
    <section id="habilidades" className="py-12">
      <h2 className="text-[40px] font-bold text-center mt-[100px] p-[50px]">MIS HABILIDADES</h2>
      <div className="px-4">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-20 max-w-[850px] mx-auto list-none p-0">
          {skills.map((skill, index) => (
            <li key={index} className="flex flex-col items-center w-[160px] group">
              <img 
                src={skill.img} 
                alt={`${skill.name} logo`} 
                className="h-20 w-auto mb-5 object-contain transition-transform duration-300 group-hover:scale-110" 
              />
              <p className={`${skill.bgClass} py-2 px-5 rounded-lg text-sm font-semibold inline-block text-center whitespace-nowrap shadow-sm`}>
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Habilidades;