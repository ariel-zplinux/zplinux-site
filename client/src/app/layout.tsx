import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Zplinux | Ariel Biton",
  description:
    "Backend Fullstack Dev, POC Maker, and Linux Services based in EU.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Zplinux",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apple Touch Icon for iOS users */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="cb1e4e75-0217-4aa0-af74-01b0cc60e07c"
        ></script>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
