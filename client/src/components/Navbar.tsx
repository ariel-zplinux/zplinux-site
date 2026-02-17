"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Terminal,
    Server,
    User,
    Mail,
    Cpu,
    Menu,
    X,
    Layers,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { id: "about", label: "About", path: "/", icon: User },
        { id: "services", label: "Services", path: "/services", icon: Server },
        { id: "projects", label: "Projects", path: "/projects", icon: Layers },
        { id: "clients", label: "Clients", path: "/clients", icon: Cpu },
        { id: "contact", label: "Contact", path: "/contact", icon: Mail },
    ];

    const isActive = (path: string) => pathname === path || (path === "/about" && pathname === "/");
    console.log({ isActive })
    return (
        <>
            <nav className="fixed top-0 w-full z-100 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                            <Terminal className="text-white w-5 h-5" />
                        </div>
                        <span className="font-black tracking-tighter text-2xl bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                            ZPLINUX
                        </span>
                    </Link>

                    <div className="flex items-center gap-2 md:gap-4">
                        <ThemeToggle />

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-2 bg-slate-200/50 dark:bg-slate-900/50 p-1 rounded-full border border-black/5 dark:border-white/5">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${isActive(item.path)
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-slate-600 dark:text-slate-400"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- Mobile Full-Screen Overlay Menu --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-90 bg-white dark:bg-slate-950 flex flex-col justify-center items-center gap-8 md:hidden"
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-3xl font-bold ${isActive(item.path) ? "text-blue-500" : "text-slate-400 dark:text-slate-500"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
