"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Terminal,
  Server,
  User,
  Mail,
  Cpu,
  ShieldCheck,
  Leaf,
  ExternalLink,
  Menu,
  X,
  FileText,
  Github,
  Layers,
  PlayCircle,
  Smartphone,
  Linkedin,
} from "lucide-react";

import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";
import ServicesSection from "@/components/Services";
import ClientsSection from "@/components/Clients";
import ContactSection from "@/components/Contact";

export default function ZplinuxHome() {
  const [activeTab, setActiveTab] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Server },
    { id: "projects", label: "Projects", icon: Layers },
    { id: "clients", label: "Clients", icon: Cpu },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNav = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 font-sans">
      {/* --- Responsive Navbar --- */}
      <nav className="fixed top-0 w-full z-[100] bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => handleNav("about")}
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Terminal className="text-white w-5 h-5" />
            </div>
            <span className="font-black tracking-tighter text-2xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              ZPLINUX
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 bg-slate-900/50 p-1 rounded-full border border-white/5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Full-Screen Overlay Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-slate-950 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-3xl font-bold ${activeTab === item.id ? "text-blue-500" : "text-slate-500"}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Main Content --- */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "about" && <AboutSection />}
            {activeTab === "services" && <ServicesSection />}
            {activeTab === "projects" && <ProjectsSection />}
            {activeTab === "clients" && <ClientsSection />}
            {activeTab === "contact" && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
