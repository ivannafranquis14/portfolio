import React from 'react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-[#111740] text-white text-center py-[60px] px-5 mt-[100px]">
      <h2 className="text-3xl font-bold mb-2">¿Tienes mas interés?</h2>
      <p className="text-xl font-light mb-6 text-slate-300">Contáctame</p>
      
      <div className="flex flex-col items-center gap-5 mt-5">
        {/* Enlace de WhatsApp - Sin subrayado */}
        <a 
          href="https://wa.me/393762347068" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline flex items-center gap-[15px] text-auto hover:text-[#78B2FF] hover:scale-105 transition-all duration-300"
        >
          <span>+39 3762347068</span>
          <img src="logos_whatsapp-icon.png" alt="WhatsApp" className="w-[35px] h-auto" />
        </a>
        
        {/* Enlace de Email - Sin subrayado */}
        <a 
          href="mailto:ivannafranquis14@gmail.com" 
          className="text-white no-underline flex items-center gap-[15px] text-auto hover:text-[#78B2FF] hover:scale-105 transition-all duration-300"
        >
          <span>ivannafranquis14@gmail.com</span>
          <img src="Group.png" alt="Email" className="w-[35px] h-auto" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;