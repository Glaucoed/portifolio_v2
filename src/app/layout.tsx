import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glauco Esverzuthe Damasceno Dev",
  description: "Portifolio Glauco Esverzuthe Damasceno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`inter.className`}>
        <Nav />
        {children}
        <ToggleDarkMode />
      </body>
    </html>
  );
}
