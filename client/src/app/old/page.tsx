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
} from "lucide-react";

export default function ZplinuxHome() {
  const [activeTab, setActiveTab] = useState("about");

  const menuItems = [
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Server },
    { id: "clients", label: "Clients", icon: Cpu },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="text-blue-500 w-6 h-6" />
            <span className="font-bold tracking-tighter text-xl">ZPLINUX</span>
          </div>

          <div className="flex gap-1 md:gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "about" && <AboutSection />}
            {activeTab === "services" && <ServicesSection />}
            {activeTab === "clients" && <ClientsSection />}
            {activeTab === "contact" && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-slate-900 py-10 text-center text-slate-500 text-sm">
        <p>© 2026 Zplinux Company. Based in EU. PWA Ready.</p>
      </footer>
    </div>
  );
}

/* --- SECTION COMPONENTS --- */

function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Ariel Biton
      </h1>
      <p className="text-xl text-slate-400 leading-relaxed mb-8">
        M.Sc. Computer Science (Sorbonne). Senior Full-stack Developer &
        Architect. Specializing in building robust, high-availability backends
        and proof-of-concepts with a focus on Linux ecosystems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <ShieldCheck className="text-blue-500 mb-2" />
          <h3 className="font-bold">Privacy First</h3>
          <p className="text-sm text-slate-500">
            GDPR-compliant architectures by design.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <Leaf className="text-emerald-500 mb-2" />
          <h3 className="font-bold">Eco Principles</h3>
          <p className="text-sm text-slate-500">
            Low-footprint, optimized code execution.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <Code2 className="text-purple-500 mb-2" />
          <h3 className="font-bold">Open Source</h3>
          <p className="text-sm text-slate-500">
            Deep commitment to community software.
          </p>
        </div>
      </div>

      <a
        href="/Cv_Ariel_Biton_2026.pdf"
        className="inline-flex items-center gap-2 bg-slate-100 text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-colors"
      >
        Download CV (PDF) <ExternalLink size={18} />
      </a>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Backend Fullstack",
      icon: Server,
      desc: "High-performance NodeJs/NextJs/NestJs architectures.",
    },
    {
      title: "POC Maker",
      icon: Cpu,
      desc: "Transforming ideas into functional MVPs in record time.",
    },
    {
      title: "Linux Oriented",
      icon: Terminal,
      desc: "Docker orchestration, custom distros, and system-level optimization.",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((s) => (
        <div
          key={s.title}
          className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group"
        >
          <s.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
          <p className="text-slate-400">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function ClientsSection() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900/20 border border-slate-800">
        <h3 className="text-3xl font-bold mb-2">Sharecare</h3>
        <p className="text-blue-400 font-mono mb-6">Backend Lead Developer</p>
        <p className="text-slate-300">
          Created backend from scratch using NodeJs & Express. Managed IAM with
          Azure AD B2C and implemented Casbin for fine-grained authorization.
        </p>
      </div>
      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-900/20 border border-slate-800">
        <h3 className="text-3xl font-bold mb-2">Abily Care (Engie)</h3>
        <p className="text-emerald-400 font-mono mb-6">Backend Developer</p>
        <p className="text-slate-300">
          Designed a Micro Services Architecture using Docker and Loopback for
          health dynamism analysis. Optimized data retrieval through REST/SOAP
          APIs.
        </p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4">Start a Project</h2>
      <p className="text-slate-400 mb-10 max-w-lg mx-auto">
        Based in the EU, available for freelance missions and technical
        consulting.
      </p>
      <a
        href="mailto:contact@zplinux.eu"
        className="text-4xl md:text-6xl font-black text-blue-500 hover:text-blue-400 transition-colors underline decoration-slate-800 underline-offset-8"
      >
        contact@zplinux.eu
      </a>
    </div>
  );
}
