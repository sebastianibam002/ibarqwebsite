import React, { useState } from "react";
import { ProjectCard } from "../components/cards";
import { PageLayout, Breadcrumb } from "../components/layout";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const ProyectosPage = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Filter options
  const filterOptions = ["Todos", "Lotes", "Apartamentos", "Casas"];

  // Project data with coordinates for map
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
      statusBadgeColor: "secondary" as const,
      coordinates: [4.5709, -75.6173], // San Martín, Quindío
      category: "Lotes"
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
      statusBadgeColor: "secondary" as const,
      coordinates: [4.9186, -74.0303], // Cajicá, Cundinamarca
      category: "Apartamentos"
    },
    {
      title: "Villa Verde Residencial",
      location: "Medellín, Antioquia, Colombia",
      area: "95 m²",
      type: "Casa",
      bathrooms: "3 baños",
      bedrooms: "4 habitaciones",
      imageUrl: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      imageAlt: "Villa Verde Residencial",
      statusBadge: "En construcción",
      statusBadgeColor: "primary" as const,
      coordinates: [6.2442, -75.5812], // Medellín, Antioquia
      category: "Casas"
    },
    {
      title: "Torres del Parque",
      location: "Bogotá, Cundinamarca, Colombia",
      area: "68 m²",
      type: "Apartamento",
      bathrooms: "2 baños",
      bedrooms: "2 habitaciones",
      imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      imageAlt: "Torres del Parque",
      statusBadge: "Disponible",
      statusBadgeColor: "secondary" as const,
      coordinates: [4.6097, -74.0817], // Bogotá, Cundinamarca
      category: "Apartamentos"
    },
    {
      title: "Conjunto Alameda",
      location: "Cali, Valle del Cauca, Colombia",
      area: "120 m²",
      type: "Casa",
      bathrooms: "3 baños",
      bedrooms: "3 habitaciones",
      imageUrl: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      imageAlt: "Conjunto Alameda",
      statusBadge: "Próximamente",
      statusBadgeColor: "primary" as const,
      coordinates: [3.4516, -76.5320], // Cali, Valle del Cauca
      category: "Casas"
    },
    {
      title: "Mirador de los Andes",
      location: "Manizales, Caldas, Colombia",
      area: "85 m²",
      type: "Apartamento",
      bathrooms: "2 baños",
      bedrooms: "3 habitaciones",
      imageUrl: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      imageAlt: "Mirador de los Andes",
      statusBadge: "8 unidades",
      statusBadgeColor: "secondary" as const,
      coordinates: [5.0703, -75.5138], // Manizales, Caldas
      category: "Apartamentos"
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PageLayout activeNavItem="proyectos">
      {/* Main Content */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className='pt-8 pb-8' items={["Inicio", "Proyectos"]} />

          {/* Page Title and Description */}
          <div className="mb-8">
            <h1 className="font-poppins font-bold text-4xl text-negro mb-4">
              Nuestros proyectos
            </h1>
            <p className="font-dm-sans text-lg text-gray-600">
              Conoce las opciones de vivienda disponibles y descubrir nuevos desarrollos pensados para tu estilo de vida.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-12">
            <div className="flex gap-2 flex-wrap">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-dm-sans font-medium text-sm transition-all ${
                    activeFilter === filter
                      ? "bg-verde-ibarc text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
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

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="font-poppins font-bold text-3xl text-negro mb-8">
              Ubicación de nuestros proyectos
            </h2>
            
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <MapContainer
                center={[4.5709, -75.6173]} // Center on Colombia
                zoom={6}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {filteredProjects.map((project, index) => (
                  <Marker key={index} position={project.coordinates as [number, number]}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
                        <p className="text-xs text-gray-600 mb-1">{project.location}</p>
                        <p className="text-xs">
                          <span className="font-medium">{project.area}</span> • {project.type}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};