import React from "react";

interface BreadcrumbProps {
  items: string[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "mb-6" }) => {
  return (
    <div className={className}>
      <p className="font-dm-sans text-sm text-gray-600">
        {items.join(" → ")}
      </p>
    </div>
  );
};