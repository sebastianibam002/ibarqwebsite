import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ProjectCard } from "../components/cards";
import { Header, Footer, HeroSection } from "../components/layout";

import BgHouse from '../assets/ExtendedFrontHouse.png';
import maskGroup from "../assets/mask-group.png";
import rectangle1471 from "../assets/rectangle-1471.png";
import HandShake from '../assets/Handshake.png'
import InsideHouse from '../assets/QuieresConocerMas.png'
import IbarqLogo from '../assets/LogoWhite.svg?react';

// Quienes Somos Section Component
const QuienesSomosSection = () => {
  const features = [
    {
      title: "Diseño arquitectónico con identidad",
      description:
        "Integramos diseño arquitectónico, confort habitacional y responsabilidad ambiental.",
      top: "54px",
    },
    {
      title: "Armonía con la naturaleza",
      description: "Construcciones eficientes que respetan su entorno.",
      top: "195px",
    },
    {
      title: "Diseño pensado para el bienestar",
      description: "Espacios seguros, funcionales y llenos de calidez.",
      top: "336px",
    },
  ];

  return (
    <section
      className="w-full max-w-[1445px] mx-auto px-6 lg:px-0 py-16"
      role="main"
      aria-labelledby="about-heading"
    >
      <div className="relative w-full max-w-[1407px] mx-auto min-h-[629px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left side - Image */}
          <div className="lg:absolute lg:w-[842px] lg:h-[599px] lg:top-1 lg:left-0">
            <img
              className="w-full h-auto lg:w-[842px] lg:h-[599px] object-cover"
              alt="Imagen de una casa moderna con diseño arquitectónico contemporáneo"
              src={maskGroup}
            />
            <img
              className="hidden lg:block absolute w-[323px] h-[152px] top-[448px] left-0"
              alt="Detalle arquitectónico decorativo"
              src={rectangle1471}
            />
          </div>

          {/* Right side - Content */}
          <div className="lg:absolute lg:left-[403px] lg:top-0 w-full lg:w-auto">
            <h1
              id="about-heading"
              className="text-2xl lg:text-[32px] font-normal text-black leading-tight lg:leading-[44.8px] mb-4"
            >
              ¿Quiénes somos?
            </h1>
            
            <p className="text-base lg:text-2xl font-normal text-black leading-relaxed lg:leading-[33.6px] mb-8 lg:mb-0 lg:w-[1004px] lg:max-w-none max-w-2xl">
              Somos una empresa familiar colombiana dedicada al diseño y
              construcción de viviendas cálidas, eficientes y en armonía con el
              entorno. Creamos hogares que inspiran bienestar, con compromiso,
              calidad y atención en cada detalle.
            </p>

            {/* Features */}
            <div
              className="lg:absolute lg:w-[554px] lg:h-[468px] lg:top-[161px] lg:left-[450px] space-y-8 lg:space-y-0"
              role="list"
              aria-label="Características principales"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="lg:absolute lg:w-[449px] lg:left-[82px]"
                  style={{ top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? feature.top : 'auto' }}
                  role="listitem"
                >
                  <h3 className="font-medium text-black text-xl lg:text-2xl leading-tight lg:leading-[38.4px] mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-black text-lg lg:text-xl leading-relaxed lg:leading-[32.0px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LandingPage = (): JSX.Element => {
  // Data for the lots table
  const lots = [
    { name: "Occidente 2", area: "2500", status: "Disponible" },
    { name: "Occidente 3", area: "2500", status: "Disponible" },
    { name: "Occidente 4", area: "2500", status: "Disponible" },
    { name: "Lote 2", area: "2200", status: "Disponible" },
    { name: "Lote 3", area: "2200", status: "Disponible" },
    { name: "Lote 4", area: "2200", status: "Disponible" },
  ];

  // Data for lot information
  const mainLots = [
    {
      id: "LOTE 4",
      position: "top-[199px] left-64 rotate-[-29.19deg]",
      badgePosition: "top-[213px] left-[259px] rotate-[-29.03deg]",
    },
    {
      id: "LOTE 3",
      position: "top-[255px] left-[285px] rotate-[-29.19deg]",
      badgePosition: "top-[267px] left-[289px] rotate-[-29.03deg]",
    },
    {
      id: "LOTE 2",
      position: "top-[304px] left-[317px] rotate-[-29.19deg]",
      badgePosition: "top-[319px] left-[322px] rotate-[-29.03deg]",
    },
  ];

  const occidenteLots = [
    {
      id: "OCCIDENTE\nLOTE 2",
      position: "top-[325px] left-0 rotate-[-30.10deg]",
      badgePosition: "top-[352px] left-[121px] rotate-[-31.21deg]",
    },
    {
      id: "OCCIDENTE\nLOTE 3",
      position: "top-[388px] left-32 rotate-[-30.49deg]",
      badgePosition: "top-[418px] left-[158px] rotate-[-29.77deg]",
    },
    {
      id: "OCCIDENTE\nLOTE 4",
      position: "top-[451px] left-[168px] rotate-[-30.67deg]",
      badgePosition: "top-[482px] left-[194px] rotate-[-30.48deg]",
    },
  ];

  // Data for feature points
  const features = [
    {
      title: "Rodeado de naturaleza y aire puro",
      description: "construimos en espacios que respetan su entorno.",
      top: "0px"
    },
    {
      title: "Fácil acceso desde vías principales",
      description: "ubicaciones estratégicas para tu comodidad.",
      top: "117px"
    },
    {
      title: "Cercanía a ríos y senderos naturales",
      description: "conectados con la belleza del paisaje.",
      top: "234px"
    },
    {
      title: "Desarrollos en crecimiento en la zona",
      description: "inversión segura en el futuro.",
      top: "351px"
    },
  ];

  const tabOptions = [
    { id: "lots", label: "Ver lotes disponibles" },
    { id: "houses", label: "Ver casas modelo" },
  ];

  // Navigation links data
  const navLinks = [
    { title: "Inicio", href: "#" },
    { title: "Proyectos", href: "#" },
    { title: "Sobre nosotros", href: "#" },
    { title: "Contacto", href: "#" },
  ];

  // Contact information data
  const contactInfo = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      text: "ibarq@gmail.com",
      href: "mailto:ibarq@gmail.com",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      text: "+57 320 123 4567",
      href: "tel:+573201234567",
    },
  ];

  // Country code data
  const countryCodes = [{ value: "57", label: "+57", flag: "/image-11.png" }];

  // Project data
  const projects = [
    {
      title: "Primaveras de Humadea",
      location: "San Martín-Quindío, Humadea",
      area: "152 m²",
      type: "Casa - Lote",
      bathrooms: "2 baños",
      bedrooms: "3 habitaciones",
      imageUrl: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      imageAlt: "Primaveras de Humadea",
      statusBadge: "6 lotes",
      statusBadgeColor: "secondary" as const
    },
    {
      title: "Campus Club Reservado",
      location: "Cajicá, Cundinamarca, Colombia",
      area: "77 m²",
      type: "Apartamento",
      bathrooms: "2 baños",
      bedrooms: "3 habitaciones",
      imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      imageAlt: "Campus Club Reservado",
      statusBadge: "Últimas 3 disponibles",
      statusBadgeColor: "secondary" as const
    }
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <Header activeItem="inicio" />
      <HeroSection 
          backgroundImage={BgHouse}
          className="min-h-screen"
      >
 
      </HeroSection>

      
      <div className="bg-white overflow-hidden w-full max-w-[1728px] relative">
       

        {/* Quienes Somos Section */}
        <QuienesSomosSection />

          {/* Statistics Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-16 ml-36 mr-36">
            <div className="text-center">
              <div className="text-8xl font-bold text-[#16583e] mb-2">100%</div>
              <p className="text-gray-600 text-sm">Atención<br/>personalizada</p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-bold text-[#16583e] mb-2">+5</div>
              <p className="text-gray-600 text-sm">Viviendas disponibles<br/>listas para habitar</p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-bold text-[#16583e] mb-2">+60</div>
              <p className="text-gray-600 text-sm">Familias acompañadas en<br/>la búsqueda de su hogar</p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-bold text-[#16583e] mb-2">+6</div>
              <p className="text-gray-600 text-sm">Años desarrollando<br/>proyectos inmobiliarios</p>
            </div>
          </div>

        {/* Proyectos Destacados Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-verde-ibarc mb-12 text-center">Proyectos destacados</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                location={project.location}
                area={project.area}
                type={project.type}
                bathrooms={project.bathrooms}
                bedrooms={project.bedrooms}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                statusBadge={project.statusBadge}
                statusBadgeColor={project.statusBadgeColor}
              />
            ))}
          </div>

          {/* Ver todos los proyectos button */}
          <div className="flex justify-center">
            <Button variant="outline" className="border-verde-ibarc text-verde-ibarc hover:bg-verde-ibarc hover:text-white px-8 py-3 rounded-[20px] font-dm-sans font-medium text-[16px]">
              Ver todos los proyectos
            </Button>
          </div>
        </section>

        {/* Financing Section */}
        <section className="container mx-auto px-4 py-16">
          {/* Financing Card */}
          <Card className="bg-[#eff0e97d] rounded-2xl px-16 py-8 mb-8 flex flex-col lg:flex-row items-center gap-16 ">
            <div className="flex flex-col gap-16 lg:w-2/3">
              <h3 className="text-2xl font-semibold">
                Financia tu vivienda directamente con Ibarq
              </h3>
              <p className="leading-relaxed text-base lg:text-2xl font-normal text-justify">
                Adquiere tu hogar sin necesidad de bancos. Con nuestros planes de pago flexibles y trato directo, 
                puedes dar el paso con tranquilidad y acompañamiento.
              </p>
              <div>
              <Button className="bg-verde-ibarc text-2xl hover:bg-verde-claro text-white rounded-lg w-[273px] h-[60px]">
  Conocer más →
</Button>
              </div>

            </div>
            <div className="lg:w-1/2">
              <img
                src={HandShake}
                alt="Handshake - financing"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </Card>

          {/* Testimonial Card */}
          <Card className="bg-verde-ibarc text-white rounded-2xl p-16">
            <blockquote className="text-2xl  mb-6 leading-relaxed">
              "Lo que más valoro es cómo pensaron cada detalle del proyecto. El equipo de 
              Ibarq estuvo presente en todo momento y la calidad de la construcción es 
              excelente."
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-verde-ibarc font-bold text-lg">CM</span>
                </div>
                <div>
                  <p className="font-semibold">Camila M.</p>
                  <p className="text-sm opacity-90">Comprador en Campus Club Reservado</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs">+6</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

    

      
      </div>


          {/* Contact Section */}
        <section className="relative w-full h-[455px] bg-cover bg-center bg-no-repeat justify-center items-center text-center " style={{backgroundImage: `url(${InsideHouse})`}}>
          
          <div className='relative pt-20 text-white flex flex-col items-center text-center'>
            <div className="flex justify-center mb-6">
              <IbarqLogo width={175} height={51}/>
            </div>
            <h2 className="text-4xl font-bold mb-6">¿Quieres conocer más?</h2>
            <Button className="bg-verde-ibarc hover:bg-verde-claro text-white px-8 py-4 rounded-lg text-lg">
              Contáctanos →
            </Button>
          </div>

        </section>

          {/* Footer */}
        <Footer />
    </div>
  );
};