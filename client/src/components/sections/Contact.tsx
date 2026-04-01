"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
        {t("contact.title")}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto">
        {t("contact.desc")}
      </p>
      <a
        href="mailto:contact@zplinux.eu"
        className="text-4xl md:text-4xl font-black text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors underline decoration-slate-200 dark:decoration-slate-800 underline-offset-8"
      >
        contact@zplinux.eu
      </a>
      <p className="mt-12 text-slate-500 dark:text-slate-500 font-medium">
        {t("contact.location")}
      </p>
    </div>
  );
}
