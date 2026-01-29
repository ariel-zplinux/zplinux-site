import { Server, Cpu, Terminal } from "lucide-react";

export default function ServicesSection() {
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
