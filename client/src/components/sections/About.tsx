import Image from "next/image";
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
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 lg:mb-32">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Based in Paris, EU
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent pb-2 lg:leading-tight">
            Ariel Biton
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            M.Sc. Computer Science (
            <a
              href="https://sciences.sorbonne-universite.fr/en/study/degree-seeking/masters/master-computer-science"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sorbonne University
            </a>
            ). <br />
            Senior Full-stack / Backend Developer & Architect.
            <br />
            Specializing in building robust, high-availability backends and
            proof-of-concepts with a focus on Linux ecosystems.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
            {/* Refined PDF Button */}
            <a
              href="/cv.pdf"
              target="_blank"
              className="group relative flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity" />
              <FileText className="w-5 h-5" />
              Download CV
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="flex gap-2">
              <a href="https://github.com/ariel-zplinux" target="_blank">
                <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-6 py-4 transition-colors">
                  <Github className="w-5 h-5" /> ariel-zplinux
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/ariel-biton-59aa101/"
                target="_blank"
              >
                <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-6 py-4 transition-colors">
                  <Linkedin className="w-5 h-5" /> Linkedin
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[300px] lg:max-w-none relative group mt-8 lg:mt-0 lg:max-w-[340px] mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 ring-1 ring-white/10 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
            <Image
              src="/images/architecture_small.webp"
              alt="Robust Backend Architecture"
              width={450}
              height={450}
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
              priority
              unoptimized
            />
            {/* Tech overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/90 text-sm font-mono opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div> 
                 SYS_STATUS: ONLINE
               </span>
               <span className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]"></div> 
                 UPTIME: 99.99%
               </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-black/5 dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:border-slate-700 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
            <ShieldCheck className="text-blue-500 w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Privacy First</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            GDPR-compliant architectures by design. Security and data protection woven directly into the core structure.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-black/5 dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:border-slate-700 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            <Leaf className="text-emerald-500 w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Eco Principles</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Low-footprint, optimized code execution. Building highly efficient systems that inherently consume fewer resources.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-black/5 dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:border-slate-700 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
            <Code2 className="text-purple-500 w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Open Source</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Deep commitment to community software. Continually leveraging and directly contributing to open-source tools.
          </p>
        </div>
      </div>
    </div>
  );
}
