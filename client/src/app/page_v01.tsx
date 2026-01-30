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
} from "lucide-react";

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

/* --- Refined Sections --- */

function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto text-center md:text-left">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
        Based in Paris, EU
      </div>
      <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
        Architecting the <span className="text-blue-600">Backend</span> Future.
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12">
        Ariel Biton — M.Sc. Sorbonne. I build ethical, high-performance systems
        with a focus on open-source principles and Linux-oriented software.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-center mb-16">
        {/* Refined PDF Button */}
        <a
          href="/cv.pdf"
          target="_blank"
          className="group relative flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity" />
          <FileText className="w-5 h-5" />
          Download CV
          <ExternalLink className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <button className="flex items-center gap-2 text-slate-400 hover:text-white px-6 py-4 transition-colors">
          <Github className="w-5 h-5" /> ariel-zplinux
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80">
        {[
          {
            label: "Privacy Ethics",
            icon: ShieldCheck,
            color: "text-blue-500",
          },
          { label: "Eco-Principles", icon: Leaf, color: "text-emerald-500" },
          { label: "Open Source", icon: Code2, color: "text-purple-500" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 p-4 bg-slate-900/40 rounded-2xl border border-white/5"
          >
            <item.icon className={item.color} size={20} />
            <span className="font-semibold text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "ZP Note",
      status: "Work in Progress",
      desc: "A modern, privacy-focused hybrid note-taking app. Currently migrating from Capacitor to a robust PWA.",
      tech: ["React", "Ionic", "GraphQL", "Keycloak", "Postgresql"],
      icon: Smartphone,
    },
    {
      title: "ZP Media Player",
      status: "Personal Project",
      desc: "Web application designed to play remote media content, providing a personal cloud hardware/software solution.",
      tech: ["Meteor", "MongoDB", "GridFs", "LXC", "HTML5"],
      icon: PlayCircle,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {projects.map((p) => (
        <div
          key={p.title}
          className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <p.icon size={80} />
          </div>
          <div className="mb-4 text-xs font-bold text-blue-500 uppercase tracking-widest">
            {p.status}
          </div>
          <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">{p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-full border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Backend Fullstack",
      icon: Server,
      desc: "High-performance architectures built with Node.js, NestJs, and Next.js 15.",
    },
    {
      title: "POC Maker",
      icon: Cpu,
      desc: "Rapidly turning conceptual ideas into functional, production-ready MVPs.",
    },
    {
      title: "Linux Systems",
      icon: Terminal,
      desc: "Custom distribution design, Docker orchestration, and system hardening.",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((s) => (
        <div
          key={s.title}
          className="p-10 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:bg-slate-900 transition-all"
        >
          <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8">
            <s.icon className="text-blue-500" size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
          <p className="text-slate-400 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function ClientsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-bold">Sharecare</h3>
          <span className="text-[10px] font-bold py-1 px-3 border border-blue-500/50 text-blue-500 rounded-full">
            Lead Dev
          </span>
        </div>
        <p className="text-slate-400 leading-relaxed mb-6">
          Created a health/wellness backend from scratch using NodeJs, Express,
          and Azure. Implemented complex IAM flows and authorization patterns.
        </p>
        <div className="flex gap-4 text-xs font-mono text-slate-500">
          <span>#AzureAd</span> <span>#Postgres</span> <span>#Casbin</span>
        </div>
      </div>
      <div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-bold">Abily Care</h3>
          <span className="text-[10px] font-bold py-1 px-3 border border-emerald-500/50 text-emerald-500 rounded-full">
            Backend
          </span>
        </div>
        <p className="text-slate-400 leading-relaxed mb-6">
          Built a Micro Services Architecture for elderly dynamism analysis.
          Handled Docker orchestration and SOAP/REST integrations.
        </p>
        <div className="flex gap-4 text-xs font-mono text-slate-500">
          <span>#MSA</span> <span>#Docker</span> <span>#Python</span>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">
        Ready for <span className="text-blue-600">Scale?</span>
      </h2>
      <a
        href="mailto:contact@zplinux.eu"
        className="text-3xl md:text-5xl font-mono text-white border-b-4 border-blue-600 pb-2 hover:text-blue-500 transition-all"
      >
        contact@zplinux.eu
      </a>
      <p className="mt-12 text-slate-500 font-medium">
        Paris, FR — Worldwide Remote
      </p>
    </div>
  );
}
