import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://adam.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hastantio Ridhwandi Adam — Cybersecurity & Networking",
    template: "%s · HRA",
  },
  description:
    "Personal portfolio of Hastantio Ridhwandi Adam, an Internet Engineering Technology student at Universitas Gadjah Mada focused on Cybersecurity, Networking, and IoT.",
  keywords: [
    "Hastantio Ridhwandi Adam",
    "Cybersecurity portfolio",
    "Networking student UGM",
    "IoT projects",
    "CTF writeups",
  ],
  authors: [{ name: "Hastantio Ridhwandi Adam" }],
  openGraph: {
    title: "Hastantio Ridhwandi Adam — Cybersecurity & Networking",
    description:
      "Learning. Building. Securing. Portfolio, projects, and CTF writeups from an Internet Engineering Technology student at UGM.",
    url: SITE_URL,
    siteName: "HRA Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hastantio Ridhwandi Adam — Cybersecurity & Networking",
    description: "Learning. Building. Securing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen overflow-x-hidden bg-bg">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
