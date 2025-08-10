import React from "react";

interface HeroSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  children,
  className = "min-h-[70vh]",
  overlay = false
}) => {
  return (
    <div
      className={`relative ${className} bg-cover bg-center bg-no-repeat w-full`}
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <div className="pt-44 sm:ml-16 md:ml-32 lg:ml-80">
          <h1 className="text-[#16583e] text-[64px]">
            <span className="font-medium">Tu nuevo hogar </span>
            <span className="font-bold">
              comienza aquí.
            </span>
          </h1>
        <p className="text-[#16583e]">Proyectos inmobiliarios rodeados de naturaleza</p>
      </div>
      
      {children}
    </div>
  );
};