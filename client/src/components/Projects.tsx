import { useState } from "react";
import { PlayCircle, Smartphone, Globe } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "ZP Note",
      status: "Work in Progress",
      desc: "ZP Note is a WIP note taking hybrid open source app, it is delivered as a PWA to provide a standard and enriched UX.",
      details: `ZP NOTE (https://notes.zplinux.eu) (Paris - France) (personal open source project)

Role: Architect / Fullstack Developer (NodeJs / React / Ionic / PWA)

Based on Ionic to provide a mobile / web app user experience and Electron to provide a desktop user experience (TODO later).

Architecture: SOA / MSA using services:

Backend: Node/Express/Prisma, it serves mainly a GraphQL authenticated route
Frontend: React/Vite/Ionic, it generates a build that is served by service Proxy
Database: Postgresql
Authentication: Keycloak, using OpenId Connect authorization code flow, with SSO enabled using Google account
Cache: Redis, data retrieved from database is cached 
Proxy: Caddy as web server and reverse proxy, with TLS support, it’s the only exposed service 

Services are contained inside Docker containers and orchestrated by Docker Compose.

Deployment on a VPS located in the EU, using Komodo for CD.

Communication between frontend and backend is performed with GraphQL (using Apollo stack).

Provisioning of Keycloak and Postgresql are automated and performed in the container's build stage.

Offline version using IndexedDb persistence (Dexie), online version using Postgresql persistence.

Upcoming objectives are migration of services to Docker Hardened Image (DHI) and use of service workers to have better offline experience.

The actual goal of this project is to have a boilerplate ready to develop modern mobile/web/desktop application and to train myself on new technologies.`,
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
    },
    {
      title: "Zplinux Site",
      status: "Live",
      desc: "My company web site, served as a PWA (desktop/mobile UX), created with assistance of gen AI (Antigravity / Gemini).",
      details: `ZPLINUX SITE (https://zplinux.eu) (Paris - France) (personal open source project)

Role: Frontend Developer / Architect (NextJs / Tailwind / PWA)

This project consists of a Next.js frontend application that is statically exported and served via a Caddy web server, orchestrated using Docker Compose. 

Architecture: 
• Client (/client): The frontend application built with Next.js . Configured as a static site export. • Proxy (/proxy): Caddy web server serving static files and handling TLS. 
• Infrastructure (/infra): Docker Compose configuration. 

Tech Stack & Features: 
• Next.js 16 (App Router) and React 19 
• TailwindCSS & Lucide React & Framer Motion for UI 
• Static Site Generation (SSG) 
• Docker & Docker Compose for containerized deployment
• Caddy for reverse proxy, web server and automatic HTTPS
• Bootstrapped with Gemini/Antigravity
• Installable as a PWA (Progressive Web App)`,
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
        "Antigravity"
      ],
      icon: Globe,
      url: "https://zplinux.eu",
    },
    {
      title: "ZP Media Player",
      status: "Personal Project",
      desc: "Zp Media Player is a web application designed to play remote media content.",
      details: `2015 – 2020: ZP Media player (http://player.zplinux.com) (personal legacy project - Tel Aviv – Israel)
The target behind is to provide a personal cloud solution (hardware + os + software)
It’s now a legacy project, I got stuck with breaking changes when trying to upgrade Meteor.

Role: Founder / Fullstack Developer (Meteor)

Use of Meteor platform (built around NodeJs/MongoDB)
Use of HTML5 audio/video player
Backoffice using Orion package
TDD and BDD (Jasmine, Cucumber)
Use of Git (Gogs), Redmine (project management web app written in Rails)
Agile as much as possible (Scrum sprints)
Extensible, Offline ready by design
Designed to run in a Lxc container 
Management of free space per account and on filesystem (quota)
Upload to db storage (gridfs/mongo)`,
      tech: [
        "Meteor",
        "MongoDB",
        "GridFs",
        "Html5",
        "Blaze",
        "Scrum",
        "Lxc",
        "Git",
        "Redmine"
      ],
      icon: PlayCircle,
      url: "http://player.zplinux.com",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            onClick={() => setSelectedProject(p)}
            className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1"
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
              {p.tech.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-full border border-white/5"
                >
                  {t}
                </span>
              ))}
              {p.tech.length > 6 && (
                <span className="px-3 py-1 bg-white/5 text-slate-400 text-xs rounded-full border border-white/5">
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

