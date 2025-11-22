import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felipe Nascimento - Consultor & Representante",
  description: "Consultoria Gastronômica e Representação Comercial. Transformando negócios e conectando marcas.",
  metadataBase: new URL('https://felipenb.com.br'),
  openGraph: {
    title: "Felipe Nascimento - Consultor & Representante",
    description: "Consultoria Gastronômica e Representação Comercial. Transformando negócios e conectando marcas.",
    url: 'https://felipenb.com.br',
    siteName: 'Felipe Nascimento',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/logo-felipe.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
