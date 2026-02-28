import type { Metadata } from "next";
import { Montserrat, Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QuizProvider } from "@/components/LeadQuiz/QuizContext";
import LeadQuizModal from "@/components/LeadQuiz/LeadQuizModal";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading-outfit",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-heading-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://felipenb.com.br'),
  title: 'Consultoria Gastronômica para Restaurantes na Bahia | Felipe Baptista',
  description: 'Consultoria gastronômica especializada em bares e restaurantes em Itabuna, Ilhéus e sul da Bahia. Diagnóstico completo, CMV na régua e redução de desperdícios. Atendimento em todo Brasil.',
  keywords: [
    'consultor gastronômico', 'gestão de restaurantes', 'treinar equipe', 'treinar garçom',
    'meu restaurante ta falindo o que fazer', 'consultoria para restaurantes', 'felipe baptista',
    'abrir restaurante', 'plano de negócios gastronomia', 'layout de cozinha industrial',
    'reduzir desperdício', 'engenharia de cardápio', 'restaurante falindo', 'auditoria operacional',
    'como abrir filial de restaurante', 'cozinha central', 'padronização de processos', 'franquia de restaurante', 'POP restaurante',
    'Eunápolis', 'Itabuna', 'Ilhéus', 'Porto Seguro', 'Teixeira de Freitas', 'Mucuri',
    'Itamaraju', 'Itacaré', 'Prado', 'Nova Viçosa', 'Canavieiras', 'Santa Cruz Cabrália',
    'Medeiros Neto', 'Valença', 'Maraú', 'Ibicaraí', 'Gandu', 'Ipiaú', 'Belmonte', 'Camamu', 'Bahia', 'Sul da Bahia'
  ],
  authors: [{ name: 'Felipe Baptista', url: 'https://felipenb.com.br' }],
  creator: 'Felipe Baptista',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://felipenb.com.br/',
    title: 'Consultoria Gastronômica para Restaurantes na Bahia | Felipe Baptista',
    description: 'Consultoria gastronômica especializada em bares e restaurantes em Itabuna, Ilhéus e sul da Bahia. Diagnóstico completo, CMV na régua e redução de desperdícios. Atendimento em todo Brasil.',
    siteName: 'Felipe Baptista Consultoria',
    images: [{
      url: '/logo-new-main.png',
      width: 1200,
      height: 630,
      alt: 'Logo Felipe Baptista',
    }],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${playfair.variable} ${outfit.variable} ${montserrat.variable} ${inter.variable}`}>
        <ThemeProvider>
          <QuizProvider>
            {children}
            <LeadQuizModal />
          </QuizProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
