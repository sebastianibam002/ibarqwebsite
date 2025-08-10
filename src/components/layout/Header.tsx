import { ArrowUpRightIcon, Menu } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import IbarqLogo from '../../assets/IbarqLogo.svg?react';

interface HeaderProps {
  activeItem?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeItem = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { text: "Inicio", href: "/", key: "inicio" },
    { text: "Proyectos", href: "/proyectos", key: "proyectos" },
    { text: "Financiación", href: "/financiacion", key: "financiacion" },
    { text: "Sobre nosotros", href: "/sobre-nosotros", key: "sobre-nosotros" },
  ];

  const handleNavigation = (href: string) => {
    window.location.href = href;
  };

  return (
    <>
      <header className="absolute top-8 lg:top-11 left-1/2 transform -translate-x-1/2 w-full max-w-[1447px] h-[92px] bg-[#eff0e9b2] backdrop-blur-sm rounded-[47.5px] flex items-center justify-between px-6 lg:px-12 z-10 shadow-sm">
        {/* Logo */}
        <div 
          className="cursor-pointer" 
          onClick={() => handleNavigation('/')}
          aria-label="Ir al inicio"
        >
          <IbarqLogo width={128} height={38} />
        </div>
 
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-14">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.href)}
              className={`font-['DM_Sans',Helvetica] text-2xl transition-colors duration-200 hover:text-[#16583e] ${
                activeItem === item.key
                  ? "font-semibold text-[#16583e]"
                  : "font-normal text-[#191015]"
              }`}
            >
              {item.text}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6 text-[#16583e]" />
        </button>

        {/* Contact Button */}
        <Button 
          onClick={() => handleNavigation('/contacto')}
          className="hidden lg:flex h-[53px] w-[196px] bg-[#16583e] hover:bg-[#0f3d2a] rounded-[15px] text-xl font-['DM_Sans',Helvetica] font-semibold transition-colors duration-200 items-center justify-center gap-2"
        >
          Contáctanos
          <ArrowUpRightIcon className="h-6 w-6" />
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-[#eff0e9] rounded-3xl shadow-lg p-6 mx-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    handleNavigation(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-2xl font-['DM_Sans',Helvetica] text-xl transition-colors duration-200 ${
                    activeItem === item.key
                      ? "font-semibold text-[#16583e] bg-[#16583e]/10"
                      : "font-normal text-[#191015] hover:bg-[#16583e]/5"
                  }`}
                >
                  {item.text}
                </button>
              ))}
              
              {/* Mobile Contact Button */}
              <Button 
                onClick={() => {
                  handleNavigation('/contacto');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 h-[53px] bg-[#16583e] hover:bg-[#0f3d2a] rounded-[15px] text-lg font-['DM_Sans',Helvetica] font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Contáctanos
                <ArrowUpRightIcon className="h-5 w-5" />
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};