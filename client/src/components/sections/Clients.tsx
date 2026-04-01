"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ClientsSection() {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <a href="https://www.sharecare.com/" target="_blank">
        <div className="p-10 rounded-[2.5rem] bg-white dark:bg-linear-to-b dark:from-slate-900 dark:to-slate-950 border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none group transition-all hover:border-blue-500/20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <img
                src="/icons/Sharecare_Logo.png"
                alt="Sharecare Logo"
                className="h-10 w-auto object-contain dark:brightness-110"
              />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Sharecare</h3>
            </div>
            <span className="text-[10px] font-bold py-1 px-3 border border-blue-500/50 text-blue-600 dark:text-blue-500 rounded-full">
              {t("clients.sharecare.role")}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {t("clients.sharecare.desc")}
          </p>
          <div className="flex gap-4 text-xs font-mono text-slate-500 dark:text-slate-500">
            <span>#NodeJs</span>
            <span>#Express</span>
            <span>#AzureAdB2c</span>
            <span>#Azure</span>
          </div>
        </div>
      </a>
      <a href="https://www.abilycare.com/" target="_blank">
        <div className="p-10 rounded-[2.5rem] bg-white dark:bg-linear-to-b dark:from-slate-900 dark:to-slate-950 border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none group transition-all hover:border-emerald-500/20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <img
                src="/icons/abilycare_favico-300x300.png"
                alt="AbilyCare Icon"
                className="h-10 w-auto object-contain dark:brightness-125"
              />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Abily Care</h3>
            </div>
            <span className="text-[10px] font-bold py-1 px-3 border border-emerald-500/50 text-emerald-600 dark:text-emerald-500 rounded-full">
              {t("clients.abilycare.role")}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {t("clients.abilycare.desc")}
          </p>
          <div className="flex gap-4 text-xs font-mono text-slate-500 dark:text-slate-500">
            <span>#NodeJs</span>
            <span>#Loopback</span>
            <span>#Keycloak</span>
            <span>#Python</span>
          </div>
        </div>
      </a>
    </div>
  );
}
