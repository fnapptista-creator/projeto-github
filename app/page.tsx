'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCinematic from '@/components/Landing/HeroCinematic';
import ServiceSection from '@/components/Landing/ServiceSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-void)]">
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

      <ServiceSection
        index={2}
        theme="light"
        title="Representação Comercial"
        subtitle="B2B & Varejo"
        description="Acesso direto às maiores indústrias de utilidades e decoração do Brasil. Curadoria de produtos que giram e encantam seus clientes."
        ctaText="Acessar Catálogo"
        ctaLink="/representacao"
        align="right"
        imagePath="/images/foto-representacao.png"
      />

      <Footer />
    </main>
  );
}
