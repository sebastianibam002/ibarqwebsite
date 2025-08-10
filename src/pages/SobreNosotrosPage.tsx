import React from "react";
import { Button } from "../components/ui/button";
import AboutUsImage from '../assets/BackgroundAboutUs.png'
import { PageLayout } from "../components/layout";
import IbarqLogo from '../assets/LogoWhite.svg?react';
import { ArrowRight } from 'lucide-react';

import LeftImage from '../assets/LeftSobreNosotros.png'
import RightImage from '../assets/RightSobreNosotros.png'


export const SobreNosotrosPage = (): JSX.Element => {
  return (
    <PageLayout activeNavItem="sobre-nosotros">
      {/* Hero Section with Background Image */}

    <div
      className={`relative bg-cover bg-center bg-no-repeat w-full`}
      style={{backgroundImage: `url(${AboutUsImage})`, minHeight: "566px"}}
    >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
              <IbarqLogo width={209} height={63} />
          </div>
        </div>
        {/* Page Title Badge */}
        <div className="absolute bottom-8">
          <div className="bg-white rounded-full px-12 ml-12 py-3">
            <span className="font-dm-sans font-semibold text-2xl text-negro">Sobre nosotros</span>
          </div>
        </div>

      </div>

      {/* Main Content Section */}
      <section className="py-16">
       
               <div className="flex flex-col lg:flex-row items-center gap-32">
          {/* Left column - Image */}
          <div className="lg:w-1/3">
            <img
              src={LeftImage}
              alt="Modern kitchen interior with wooden elements"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          {/* Middle column - Text content */}
          <div className="lg:w-1/3 px-4">
            <h2 className="text-4xl mb-8 text-center italic">
              Diseñamos hogares con identidad, calidad y conexión con la naturaleza
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
              Somos una empresa familiar colombiana dedicada al diseño y construcción de viviendas modernas y en armonía con el entorno. Construimos hogares que combinan diseño arquitectónico, confort y responsabilidad ambiental, pensando en el bienestar de quienes los habitan. Cada proyecto es único, como cada familia, por eso lo desarrollamos con una mirada personalizada y atención al detalle.
            </p>
            
            <p className="text-lg text-gray-700 text-center">
              Nos apasiona transformar espacios en hogares cálidos, eficientes y duraderos. Trabajamos con materiales de calidad, soluciones sostenibles y un compromiso real con el entorno y las personas.
            </p>
          </div>

          {/* Right column - Image */}
          <div className="lg:w-1/3">
            <img
              src={RightImage}
              alt="Modern interior with natural lighting"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Three Value Propositions */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Armonía con la naturaleza */}
          <div className="bg-[#F7F8F4] p-8 rounded-lg">
            <h3 className="font-semibold text-xl text-gray-900 mb-4">
              Armonía con la naturaleza
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Construimos en espacios que respetan su entorno.
            </p>
          </div>

          {/* Diseño con identidad */}
          <div className="bg-[#F7F8F4] p-8 rounded-lg">
            <h3 className="font-semibold text-xl text-gray-900 mb-4">
              Diseño con identidad
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Integramos diseño arquitectónico, confort habitacional y responsabilidad ambiental.
            </p>
          </div>

          {/* Diseño para el bienestar */}
          <div className="bg-[#F7F8F4] p-8 rounded-lg">
            <h3 className="font-semibold text-xl text-gray-900 mb-4">
              Diseño para el bienestar
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Espacios seguros, funcionales y llenos de calidad.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-verde-ibarc text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center gap-2">
            Ver proyectos
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </PageLayout>
  );
};