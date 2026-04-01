import { Server, Cpu, Terminal, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Backend Fullstack",
      icon: Server,
      accent: "blue",
      desc: "Architecting high-performance, scalable server-side solutions with a focus on reliability and clean data flow.",
      features: [
        "Node.js & NestJS Microservices",
        "Type-safe GraphQL & REST APIs",
        "PostgreSQL & NoSQL Optimization",
        "Next.js Full-stack Integration",
      ],
    },
    {
      title: "POC Maker",
      icon: Cpu,
      accent: "emerald",
      desc: "Transforming conceptual ideas into functional, production-ready MVPs with rapid speed and architectural foresight.",
      features: [
        "Rapid Prototyping (Next.js/Vite)",
        "Database Schema Modeling",
        "Authentication & Security Design",
        "Cloud-Ready Deployments",
      ],
    },
    {
      title: "Linux Systems",
      icon: Terminal,
      accent: "purple",
      desc: "Deep-level system expertise to optimize infrastructure, simplify orchestration, and harden environment security.",
      features: [
        "Docker Containerization",
        "Custom Linux Distribution Design",
        "Shell Scripting & Automation",
        "Performance Tuning & Security Hardening",
      ],
    },
  ];

  const colors = {
    blue: "from-blue-500/20 to-blue-600/5 text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/10",
    emerald: "from-emerald-500/20 to-emerald-600/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    purple: "from-purple-500/20 to-purple-600/5 text-purple-600 dark:text-purple-400 border-purple-500/20 bg-purple-500/10",
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
          Expert Services
        </h2>
        <div className="w-20 h-1.5 bg-linear-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-black/5 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
          >
            {/* Background Gradient Glow */}
            <div className={`absolute inset-0 bg-linear-to-br ${s.accent === 'blue' ? 'from-blue-500/5' : s.accent === 'emerald' ? 'from-emerald-500/5' : 'from-purple-500/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-linear-to-br ${s.accent === 'blue' ? 'from-blue-500/20 text-blue-600' : s.accent === 'emerald' ? 'from-emerald-500/20 text-emerald-600' : 'from-purple-500/20 text-purple-600'} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              <s.icon size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
              {s.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
              {s.desc}
            </p>

            <ul className="space-y-3 mb-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className={`w-4 h-4 ${s.accent === 'blue' ? 'text-blue-500' : s.accent === 'emerald' ? 'text-emerald-500' : 'text-purple-500'}`} />
                  {f}
                </li>
              ))}
            </ul>

            {/* Bottom Accent Bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r ${s.accent === 'blue' ? 'from-blue-500 to-blue-400' : s.accent === 'emerald' ? 'from-emerald-500 to-emerald-400' : 'from-purple-500 to-purple-400'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          </div>
        ))}
      </div>
    </div>
  );
}
