'use client';

import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCinematic from '@/components/Landing/HeroCinematic';
import ServiceSection from '@/components/Landing/ServiceSection';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    "name": "Felipe Nascimento",
    "jobTitle": "Consultor Gastronômico",
    "description": "Consultoria especializada para restaurantes. Aumente seus lucros, treine sua equipe e melhore a gestão do seu negócio no Sul da Bahia (Itabuna, Ilhéus, Porto Seguro, Eunápolis) e em todo o estado.",
    "url": "https://felipenb.com.br",
    "image": "https://felipenb.com.br/logo-new-main.png",
    "areaServed": [
      {
        "@type": "State",
        "name": "Bahia"
      },
      {
        "@type": "City",
        "name": "Itabuna"
      },
      {
        "@type": "City",
        "name": "Ilhéus"
      },
      {
        "@type": "City",
        "name": "Porto Seguro"
      },
      {
        "@type": "City",
        "name": "Teixeira de Freitas"
      }
    ],
    "telephone": "+55-73-98134-9085",
    "email": "eu@felipenb.com.br",
    "sameAs": [
      "https://linkedin.com/in/felipenascimentob/"
    ],
    "knowsAbout": [
      "Gestão de Restaurantes",
      "Treinamento de Equipe",
      "Treinamento de Garçom",
      "Engenharia de Cardápio",
      "Redução de CMV",
      "Consultoria Gastronômica",
      "Abertura de Restaurante",
      "Plano de Negócios para Gastronomia",
      "Layout de Cozinha Industrial",
      "Auditoria Operacional",
      "Expansão de Restaurante e Franquias",
      "Cozinha Central",
      "Padronização de Processos (POP)"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Treinamento de Garçom e Equipe",
          "description": "Capacitação completa para excelência no atendimento e rotinas de salão."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestão e Recuperação de Restaurantes",
          "description": "Diagnóstico e plano de ação para restaurantes que estão falindo ou com baixo lucro."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consultoria para Novos Negócios",
          "description": "Estudo de mercado, plano de negócios, layout operacional e criação de cardápio para abertura de restaurantes sustentáveis."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Expansão e Escalabilidade",
          "description": "Rollout plan, implementação de Cozinha Central e formatação de POPs para abertura de filiais ou redes de franquias."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[var(--bg-void)]">
      <Script
        id="schema-person-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <HeroCinematic />

      <ServiceSection
        index={1}
        theme="dark"
        title="Consultoria Gastronômica"
        subtitle="Gestão & Estratégia"
        description="Transforme seu restaurante em uma operação lucrativa e escalável. Identificamos gargalos invisíveis e implementamos processos de elite."
        ctaText="Conhecer Consultoria"
        ctaLink="/consultoria"
        align="left"
        imagePath="/images/foto-consultoria.png"
      />


      <Footer />
    </main>
  );
}
