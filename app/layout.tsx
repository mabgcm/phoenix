import type { Metadata } from "next";
import { headers } from "next/headers";
import "./source.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";

  return {
    title: {
      default: "Phoenix Architecture & Aluminium Inc.",
      template: "%s | Phoenix Architecture & Aluminium Inc.",
    },
    description:
      "World-standard aluminium curtain wall, door, window, partition and sliding systems.",
    openGraph: {
      type: "website",
      title: "World Class Aluminum Systems",
      description: "Aesthetic. Durable. High-performance.",
      images: [`${origin}/og.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: "World Class Aluminum Systems",
      description: "Aesthetic. Durable. High-performance.",
      images: [`${origin}/og.png`],
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
