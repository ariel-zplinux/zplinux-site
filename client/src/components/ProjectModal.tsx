import React from "react";
import { X, LucideIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    status: string;
    tech: string[];
    icon: LucideIcon;
    desc: string;
    details?: React.ReactNode;
    url?: string;
    images?: string[];
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
                {/* Header */}
                <div className="p-6 border-b border-black/5 dark:border-white/5 flex items-start justify-between bg-gray-50 dark:bg-slate-900/50">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                            <project.icon size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                {project.title}
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </h3>
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                {project.status}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-8 overflow-y-auto custom-scrollbar">
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                            Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-black/5 dark:border-white/5"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Extended Details / CV Content Placeholder */}
                    <div className="bg-gray-100 dark:bg-slate-950/50 rounded-xl p-6 border border-black/5 dark:border-white/5 mb-8">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-blue-400 uppercase tracking-widest mb-4">
                            Detailed Overview
                        </h4>
                        <div className="prose prose-sm max-w-none text-slate-900 dark:text-slate-400 prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-strong:text-slate-900 dark:prose-strong:text-white">
                            {project.details ? (
                                project.details
                            ) : (
                                <p className="italic opacity-50">
                                    Detailed project notes from CV will appear here.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Screenshots */}
                    {project.images && project.images.length > 0 && (
                        <div>
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                                Screenshots
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-slate-950"
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
