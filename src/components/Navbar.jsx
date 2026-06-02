import React from 'react';

const Navbar = ({ idioma, setIdioma, tNav }) => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Volvemos a tu justify-end original para alinear todo elegantemente a la derecha */}
      <nav className="py-5 px-4 sm:px-[50px] flex justify-end"> 
        
        {/* Lista de Enlaces y Selector */}
        <ul className="flex items-center gap-5 list-none m-0 p-0 flex-wrap justify-end">
          <li>
            <a href="#sobre-mi" className="no-underline text-sm sm:text-base font-normal text-[#1B1B1B] hover:text-blue-600 transition-colors">
              {tNav.sobreMi}
            </a>
          </li>
          <li>
            <a href="#proyectos" className="no-underline text-sm sm:text-base font-normal text-[#1B1B1B] hover:text-blue-600 transition-colors">
              {tNav.proyectos}
            </a>
          </li>
          <li>
            <a href="#habilidades" className="no-underline text-sm sm:text-base font-normal text-[#1B1B1B] hover:text-blue-600 transition-colors">
              {tNav.habilidades}
            </a>
          </li>
          <li>
            <a href="#contacto" className="no-underline text-sm sm:text-base font-normal text-[#1B1B1B] hover:text-blue-600 transition-colors">
              {tNav.contacto}
            </a>
          </li>

          {/* 🌍 SELECTOR DESPLEGABLE DE IDIOMA */}
          <li className="ml-2">
            <div className="flex items-center space-x-1 bg-gray-50 border border-gray-200 rounded-xl px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
              <span className="text-xs sm:text-sm">🌐</span>
              <select 
                value={idioma} 
                onChange={(e) => setIdioma(e.target.value)} 
                className="bg-transparent text-xs font-bold cursor-pointer text-[#1B1B1B] focus:outline-none pr-1"
                title="Cambiar idioma / Change language / Cambia lingua"
              >
                <option value="ES" className="bg-white text-black">ES</option>
                <option value="EN" className="bg-white text-black">EN</option>
                <option value="IT" className="bg-white text-black">IT</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;