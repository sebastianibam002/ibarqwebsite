import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { PageLayout, Breadcrumb } from "../components/layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export const ContactoPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    countryCode: "+57"
  });

  // Navigation menu items data
  const navItems = [
    { text: "Inicio", active: false },
    { text: "Proyectos", active: false },
    { text: "Financiación", active: false },
    { text: "Sobre nosotros", active: false },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <PageLayout>
      {/* Main Content */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="pt-8 pb-8" items={["Inicio", "Contacto"]} />

          {/* Page Title */}
          <div className="mb-12">
            <h1 className="font-poppins font-bold text-4xl text-negro mb-4">
              Contacto
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div>
                <p className="font-dm-sans text-lg text-gray-700 leading-relaxed mb-8">
                  Puedes contactarnos por mail completando el siguiente formulario o 
                  directamente por WhatsApp haciendo click en el botón.
                </p>

                <Button className="bg-verde-ibarc hover:bg-verde-claro text-white px-8 py-4 rounded-lg text-lg font-dm-sans font-semibold mb-8">
                  Contactar por whatsapp
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="font-dm-sans font-semibold text-lg text-negro mb-2">Email:</p>
                  <p className="font-dm-sans text-lg text-gray-700">ibarq@gmail.com</p>
                </div>

                <div>
                  <p className="font-dm-sans font-semibold text-lg text-negro mb-2">Teléfono:</p>
                  <p className="font-dm-sans text-lg text-gray-700">+57 320 123 4567</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="mb-6">
                <p className="font-dm-sans text-lg text-gray-700 leading-relaxed">
                  Déjanos tus datos y pronto nos pondremos en contacto contigo.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-dm-sans text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <Input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-ibarc focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-dm-sans text-sm font-medium text-gray-700 mb-2">
                      Apellido
                    </label>
                    <Input
                      type="text"
                      value={formData.apellido}
                      onChange={(e) => handleInputChange('apellido', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-ibarc focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-dm-sans text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-ibarc focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-dm-sans text-sm font-medium text-gray-700 mb-2">
                    Celular o teléfono
                  </label>
                  <div className="flex">
                    <Select value={formData.countryCode} onValueChange={(value) => handleInputChange('countryCode', value)}>
                      <SelectTrigger className="w-24 px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-verde-ibarc focus:border-transparent">
                        <div className="flex items-center gap-2">
                          <img src="https://flagcdn.com/w20/co.png" alt="Colombia" className="w-4 h-3" />
                          <SelectValue />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+57">
                          <div className="flex items-center gap-2">
                            
                            +57
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-verde-ibarc focus:border-transparent"
                      placeholder="320 123 4567"
                      required
                    />
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="text-sm text-gray-600 font-dm-sans">
                  Tus datos están protegidos. No compartiremos esta información con terceros
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-verde-ibarc hover:bg-verde-claro text-white py-4 rounded-lg text-lg font-dm-sans font-semibold"
                >
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};