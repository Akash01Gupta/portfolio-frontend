import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleBackground from "./BackgroundEffects/ParticleBackground";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
