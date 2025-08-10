import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import IbarqLogo from '../../assets/IbarqLogo.svg?react'; 

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Logo + Social */}
          <div className="flex flex-col space-y-4">
            <IbarqLogo height={45} width={157}/>
            <div className="flex space-x-4 text-gray-700">
              <a href="#" className="hover:text-verde-ibarc"><FaLinkedinIn size={20} /></a>
              <a href="#" className="hover:text-verde-ibarc"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-verde-ibarc"><FaFacebookF size={20} /></a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-2 text-gray-700">
            <a href="/" className="hover:text-verde-ibarc">Inicio</a>
            <a href="/proyectos" className="hover:text-verde-ibarc">Proyectos</a>
            <a href="/sobre-nosotros" className="hover:text-verde-ibarc">Sobre nosotros</a>
            <a href="/contacto" className="hover:text-verde-ibarc">Contacto</a>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <MailIcon className="w-5 h-5 mr-2 text-gray-700" />
              <span className="text-gray-700">ibarq@gmail.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2 text-gray-700" />
              <span className="text-gray-700">+57 320 123 4567</span>
            </div>
            <Button className="bg-verde-ibarc hover:bg-verde-claro text-white px-6 py-2 rounded-lg w-fit">
              Mandar WhatsApp
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center ">
          <p className="text-gray-600">© 2025 Ibarq. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
