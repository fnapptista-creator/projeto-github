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
  title: 'Felipe Baptista | Consultor Gastronômico',
  description: 'Consultoria especializada para restaurantes. Aumente seus lucros, treine sua equipe e melhore a gestão do seu negócio no Sul da Bahia e em todo o estado.',
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
    title: 'Felipe Baptista | Consultor Gastronômico',
    description: 'Transforme seu restaurante em uma máquina de lucro com gestão, controle de CMV, e treinamento de equipe no Sul da Bahia.',
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
