import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Config OS — Workspace-First Config & Secrets",
  description: "Self-hosted configuration and secrets management for engineering teams with workspace access control, invite flows, and secure runtime delivery.",
  openGraph: {
    title: "Config OS",
    description: "Self-hosted config and secrets with workspace-first access control.",
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
