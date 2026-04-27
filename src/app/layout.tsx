import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Config OS — Centralized Config & Secrets Management",
  description: "Self-hosted configuration and secrets management for engineering teams. Replace .env files with a secure, centralized dashboard.",
  openGraph: {
    title: "Config OS",
    description: "Stop storing secrets in your codebase.",
    url: "https://configos.dev",
    siteName: "Config OS",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
