import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ProyectosPage } from "./pages/ProyectosPage";
import { SobreNosotrosPage } from "./pages/SobreNosotrosPage";
import { FinanciacionPage } from "./pages/FinanciacionPage";
import { ContactoPage } from "./pages/ContactoPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/financiacion" element={<FinanciacionPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
