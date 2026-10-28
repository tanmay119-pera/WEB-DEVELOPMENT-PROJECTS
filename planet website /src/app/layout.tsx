import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Living Archive — Planetary Observatory",
  description: "An immersive deep-space planetary chronicle and 3D astronomical observatory. Conceived, Designed & Architected by Tanmay (Adesh Srivastava).",
  authors: [{ name: "Tanmay (Adesh Srivastava)" }],
  keywords: ["astrophysics", "3d solar system", "living archive", "planetary observatory", "webgl"],
  creator: "Tanmay (Adesh Srivastava)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-starlight antialiased selection:bg-stellarGold selection:text-black">
        {children}
      </body>
    </html>
  );
}
