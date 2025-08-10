import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  location: string;
  area: string;
  type: string;
  bathrooms: string;
  bedrooms: string;
  imageUrl: string;
  imageAlt: string;
  statusBadge: string;
  statusBadgeColor?: 'primary' | 'secondary';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  location,
  area,
  type,
  bathrooms,
  bedrooms,
  imageUrl,
  imageAlt,
  statusBadge,
  statusBadgeColor = 'secondary'
}) => {
  const statusBadgeClasses = statusBadgeColor === 'primary' 
    ? 'bg-verde-ibarc hover:bg-verde-ibarc' 
    : 'bg-verde-claro hover:bg-verde-claro';

  // Property details data for mapping
  const propertyDetails = [
    {
      id: 1,
      label: "Área",
      value: area,
    },
    {
      id: 2,
      label: "Tipo",
      value: type,
    },
    {
      id: 3,
      label: "Baños",
      value: bathrooms,
    },
    {
      id: 4,
      label: "Habitaciones",
      value: bedrooms,
    },
  ];

  return (
    <div className="w-full max-w-[711px] mx-auto bg-white rounded-[19px] overflow-hidden shadow-lg">
      {/* Hero image section with CTA button */}
      <div 
        className="relative w-full h-64 sm:h-80 lg:h-[396px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-2 left-4 sm:top-4 sm:left-6">
          <button
            className="flex items-center gap-2 bg-[#16583e] hover:bg-[#1a6b4a] text-white px-4 py-3 sm:px-6 sm:py-3 rounded-[15px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#16583e] focus:ring-offset-2"
            aria-label="Ver proyecto completo"
          >
            <span className="font-dm-sans font-medium text-sm sm:text-base">
              Ver proyecto
            </span>
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-[#eff0e97d] p-4 sm:p-6 lg:p-8">
        {/* Header with title, location and badge */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
          <div className="flex-1 mb-4 sm:mb-0">
            <h1 className="font-poppins font-medium text-[#121212] text-xl sm:text-2xl lg:text-[28px] leading-tight mb-2">
              {title}
            </h1>
            <p className="font-dm-sans font-normal text-[#1e1219] text-base sm:text-lg lg:text-xl">
              {location}
            </p>
          </div>
          
          {/* Status badge */}
          <div className="flex-shrink-0">
            <div className={`${statusBadgeClasses} rounded-[15px] px-4 py-3 sm:px-6 sm:py-3`}>
              <span className="font-dm-sans font-medium text-white text-sm sm:text-base lg:text-xl whitespace-nowrap">
                {statusBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Property details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {propertyDetails.map((detail) => (
            <div key={detail.id} className="bg-[#e1e2d466] rounded-[19px] p-4 sm:p-6">
              <div className="font-dm-sans font-medium text-[#1e121991] text-sm sm:text-base lg:text-xl mb-1 sm:mb-2">
                {detail.label}
              </div>
              <div className="font-dm-sans font-medium text-[#191015] text-lg sm:text-xl lg:text-2xl">
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};