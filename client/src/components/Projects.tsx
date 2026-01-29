import { PlayCircle, Smartphone } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ZP Note",
      status: "Work in Progress",
      desc: "A modern, privacy-focused hybrid note-taking app. Currently migrating from Capacitor to a robust PWA.",
      tech: [
        "NodeJs",
        "Express",
        "React",
        "Vite",
        "Ionic",
        "PWA",
        "GraphQL",
        "Keycloak",
        "OpenID Connect",
        "Prisma",
        "Postgresql",
        "IndexedDb",
        "Offline",
      ],
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
