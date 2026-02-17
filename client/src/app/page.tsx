"use client";

import AboutSection from "@/components/sections/About";
import { redirect, usePathname } from "next/navigation";

export default function ZplinuxHome() {
  const pathname = usePathname();

  const pagesList = ["/services", "/projects", "/clients", "/contact"];

  if (pagesList.includes(pathname)) {
    redirect(pathname);
  }

  return <AboutSection />;
}
