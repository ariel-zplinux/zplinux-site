"use client";

import { Server, Cpu, Terminal, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.backend.title"),
      icon: Server,
      accent: "blue",
      desc: t("services.backend.desc"),
      features: [
        t("services.backend.f1"),
        t("services.backend.f2"),
        t("services.backend.f3"),
        t("services.backend.f4"),
      ],
    },
    {
      title: t("services.poc.title"),
      icon: Cpu,
      accent: "emerald",
      desc: t("services.poc.desc"),
      features: [
        t("services.poc.f1"),
        t("services.poc.f2"),
        t("services.poc.f3"),
        t("services.poc.f4"),
      ],
    },
    {
      title: t("services.linux.title"),
      icon: Terminal,
      accent: "purple",
      desc: t("services.linux.desc"),
      features: [
        t("services.linux.f1"),
        t("services.linux.f2"),
        t("services.linux.f3"),
        t("services.linux.f4"),
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
          {t("services.title")}
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
