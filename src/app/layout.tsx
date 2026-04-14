import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sulnex - Escritório Virtual para Clínicas",
  description: "Plataforma inteligente de gestão clínica com automação via WhatsApp e n8n",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
