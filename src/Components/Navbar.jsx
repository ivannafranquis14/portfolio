import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="py-5 px-[50px]"> 
        <ul className="flex justify-end gap-5 list-none">
          <li>
            <a href="#sobre-mi" className="no-underline text-[#1B1B1B] hover:text-blue-600 transition-colors">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#proyectos" className="no-underline text-[#1B1B1B] hover:text-blue-600 transition-colors">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#habilidades" className="no-underline text-[#1B1B1B] hover:text-blue-600 transition-colors">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contacto" className="no-underline text-[#1B1B1B] hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;