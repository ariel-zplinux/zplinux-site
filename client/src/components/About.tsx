// components/About.tsx
import {
  Code2,
  ShieldCheck,
  Leaf,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto text-center md:text-left">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
        Based in Paris, EU
      </div>
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Ariel Biton
      </h1>
      <p className="text-xl text-slate-400 leading-relaxed mb-8">
        M.Sc. Computer Science (
        <a
          href="https://sciences.sorbonne-universite.fr/en/study/degree-seeking/masters/master-computer-science"
          target="_blank"
        >
          Sorbonne University
        </a>
        ). <br />
        Senior Full-stack / Backend Developer & Architect.
        <br />
        Specializing in building robust, high-availability backends and
        proof-of-concepts with a focus on Linux ecosystems.
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

        <a href="https://github.com/ariel-zplinux" target="_blank">
          <button className="flex items-center gap-2 text-slate-400 hover:text-white px-6 py-4 transition-colors">
            <Github className="w-5 h-5" /> ariel-zplinux
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/ariel-biton-59aa101/"
          target="_blank"
        >
          <button className="flex items-center gap-2 text-slate-400 hover:text-white px-6 py-4 transition-colors">
            <Linkedin className="w-5 h-5" /> Linkedin
          </button>
        </a>
      </div>
    </div>
  );
}
