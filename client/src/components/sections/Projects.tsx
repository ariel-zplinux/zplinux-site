"use client"

import { useState } from "react";
import { PlayCircle, Smartphone, Globe } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "../ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "ZP Note",
      status: "Work in Progress",
      desc: "A modern, privacy-focused hybrid note-taking app. Currently migrating from Capacitor to a robust PWA.",
      details: (
        <>
          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Overview</h4>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            A hybrid, open-source note-taking application designed for privacy and cross-platform compatibility. Delivered as a Progressive Web App (PWA) to ensure a seamless experience across mobile and web.
          </p>

          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Architecture (SOA/MSA)</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
            <li>
              <strong className="text-slate-900 dark:text-white">Frontend</strong>: React, Vite, and Ionic for a responsive, native-like interface.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Backend</strong>: Node.js/Express/Prisma serving authenticated GraphQL routes.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Infrastructure</strong>: Docker & Docker Compose orchestration with Caddy as the secure reverse proxy.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Data & Auth</strong>: Keycloak (OIDC) for identity management | Postgresql & Redis for persistence and caching.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Key Highlights</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
            <li>
              <strong className="text-slate-900 dark:text-white">Offline-First</strong>: Leverages IndexedDB (Dexie) to allow full functionality without network access.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">CI/CD</strong>: Automated provisioning and deployment pipelines managed via Komodo.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Objective</strong>: A production-ready boilerplate for developing secure, scalable modern applications.
            </li>
          </ul>
        </>
      ),
      tech: [
        "NodeJs",
        "Express",
        "React",
        "Vite",
        "Ionic",
        "PWA",
        "Capacitor",
        "Dexie",
        "IndexedDb",
        "Offline",
        "Postgresql",
        "Prisma",
        "Typescript",
        "GraphQL",
        "Apollo stack",
        "Docker",
        "Docker Compose",
        "Keycloak",
        "Caddy",
        "Express session",
        "Git",
        "Gitea",
        "Komodo",
        "Redmine",
        "OpenId Connect",
      ],
      icon: Smartphone,
      url: "https://notes.zplinux.eu",
      images: [
        "/images/zp-note-mobile-1.jpg",
        "/images/zp-note-mobile-2.jpg",
        "/images/zp-note-mobile-3.jpg",
      ],
    },
    {
      title: "Zplinux Site",
      status: "Live",
      desc: "My professional portfolio, served as a high-performance PWA. Built with Next.js, Docker, and Generative AI assistance.",
      details: (
        <>
          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Overview</h4>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            My professional portfolio and company website, engineered as a high-performance PWA using modern web standards. Built in collaboration with generative AI (Antigravity/Gemini) to explore new development workflows.
          </p>

          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Technical Stack</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
            <li>
              <strong className="text-slate-900 dark:text-white">Core</strong>: Next.js 16 (App Router) & React 19 for a cutting-edge frontend.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">UI/UX</strong>: TailwindCSS, Lucide React, and Framer Motion for a polished, responsive design.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Deployment</strong>: Statically exported (SSG) and served via Caddy within a containerized Docker environment.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Role</h4>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Frontend Developer & Architect, focusing on clean code, performance optimization, and AI-assisted development paradigms.
          </p>
        </>
      ),
      tech: [
        "NodeJs",
        "NextJs",
        "Caddy",
        "Docker",
        "Docker Compose",
        "Tailwind",
        "Lucide React",
        "Framer Motion",
        "PWA",
        "SSG",
        "Gemini",
        "Antigravity",
      ],
      icon: Globe,
      url: "https://zplinux.eu",
      images: [
        "/images/zplinux-site-1.jpg",
        "/images/zplinux-site-2.jpg",
      ],
    },
    {
      title: "ZP Media Player",
      status: "Legacy",
      desc: "A legacy personal cloud solution for managing and streaming remote media content.",
      details: (
        <>
          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Overview</h4>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            A personal cloud solution designed to manage and stream remote media content. This project represents a comprehensive "hardware + OS + software" architecture for personal media consumption.
          </p>

          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Legacy Stack (2015–2020)</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
            <li>
              <strong className="text-slate-900 dark:text-white">Framework</strong>: Meteor (Node.js/MongoDB) with Blaze for reactive UI.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Features</strong>: Custom HTML5 player, GridFS for media storage, and offline-ready design.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">DevOps</strong>: Deployed in LXC containers with strictly managed filesystem quotas.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-blue-400 mb-2 mt-4">Context</h4>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Developed as a full-stack solution to explore reactive web applications, TDD/BDD (Jasmine/Cucumber), and containerization before the dominance of modern Docker ecosystems.
          </p>
        </>
      ),
      tech: [
        "Meteor",
        "MongoDB",
        "GridFs",
        "Html5",
        "Blaze",
        "Scrum",
        "Lxc",
        "Git",
        "Redmine",
      ],
      icon: PlayCircle,
      url: "http://player.zplinux.com",
      images: ["/images/zp-media-player-legacy.webp"],
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            onClick={() => setSelectedProject(p)}
            className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-black/5 dark:border-white/5 hover:border-blue-500/50 transition-all overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <p.icon size={80} className="text-black dark:text-white" />
            </div>
            <div className="mb-4 text-xs font-bold text-blue-500 uppercase tracking-widest">
              {p.status}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">{p.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs rounded-full border border-black/5 dark:border-white/5"
                >
                  {t}
                </span>
              ))}
              {p.tech.length > 6 && (
                <span className="px-3 py-1 bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-xs rounded-full border border-black/5 dark:border-white/5">
                  +{p.tech.length - 6} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

