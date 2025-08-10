import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  activeNavItem?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, activeNavItem }) => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full relative">
        <Header activeItem={activeNavItem} />
        {children}
        <Footer />
      </div>
    </div>
  );
};