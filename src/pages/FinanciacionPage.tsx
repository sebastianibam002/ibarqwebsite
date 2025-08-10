import { Users, Banknote, Zap } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { PageLayout, Breadcrumb } from "../components/layout";
import  HeaderImage from '../assets/FinanciacionImage.png'

export const FinanciacionPage = (): JSX.Element => {
  // Benefits data
  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-verde-ibarc" />,
      title: "Sin intermediarios",
      description: "Trato directo con Ibarq, sin bancos"
    },
    {
      icon: <Banknote className="w-12 h-12 text-verde-ibarc" />,
      title: "Planes flexibles",
      description: "Cuotas accesibles adaptadas a tus posibilidades"
    },
    {
      icon: <Zap className="w-12 h-12 text-verde-ibarc" />,
      title: "Procesos ágiles",
      description: "Te acompañamos rápido y sin vueltas"
    }
  ];

  // How it works steps
  const steps = [
    {
      number: "1",
      title: "Escoge el proyecto o lote que más te interese"
    },
    {
      number: "2",
      title: "Te mostramos los planes de financiación disponibles"
    },
    {
      number: "3",
      title: "Firma el acuerdo directamente con nosotros"
    },
    {
      number: "4",
      title: "Empiezas a pagar tu vivienda con cuotas claras y sin complicaciones"
    }
  ];

  return (
    <PageLayout activeNavItem="financiacion">
      <div className="pt-32">

         <div className="container mx-auto px-4">
               <Breadcrumb className="pt-8 pb-8" items={["Inicio", "Financiacion"]} />
              <div
                className="flex items-center justify-center bg-no-repeat bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${HeaderImage})`, minHeight: "566px" }}
              >
     
                {/* Content */}
                <div className="relative flex flex-col items-center justify-center text-center text-white h-full">

                  <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
                    Financia tu vivienda directamente con nosotros
                  </h1>

                  <p className="font-dm-sans text-lg leading-relaxed max-w-3xl">
                    Con nuestro plan de financiación directa, puedes adquirir tu vivienda sin
                    trámites bancarios ni intermediarios. Te acompañamos desde el inicio y
                    diseñamos un plan de pago que se adapte a tus posibilidades.
                  </p>
                </div>
              </div>
        </div>
   
      </div>
      
      

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="font-poppins font-bold text-3xl text-negro text-center mb-12">
          Beneficios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl text-negro mb-3">
                {benefit.title}
              </h3>
              <p className="font-dm-sans text-gray-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="font-poppins font-bold text-3xl text-negro text-center mb-12">
          Cómo funciona
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-verde-ibarc text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <p className="font-dm-sans text-gray-700 leading-relaxed">
                  {step.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="font-poppins font-bold text-3xl text-negro mb-8">
            ¿Quieres saber más?
          </h2>
          <Button className="bg-verde-ibarc hover:bg-verde-claro text-white px-8 py-4 rounded-lg text-lg font-dm-sans font-semibold">
            Hablar con un asesor →
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};