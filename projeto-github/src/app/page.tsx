import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Representação Comercial e Consultoria Gastronômica | Felipe Nascimento - Extremo Sul da Bahia",
  description: "Especialista em gestão de restaurantes e representação de grandes marcas (Lyor, Wolff, Porto Brasil). Aumente seu lucro e transforme seu negócio em Itabuna, Ilhéus e região.",
  openGraph: {
    title: "Felipe Nascimento - Consultor & Representante",
    description: "Soluções estratégicas para Varejo, Hotelaria e Restaurantes no Extremo Sul da Bahia.",
    images: ['/logo-felipe.png'], // Ensure this image exists or use a better feature image
    type: 'website',
    locale: 'pt_BR',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Felipe Nascimento",
  "url": "https://felipenb.com.br",
  "jobTitle": ["Consultor Gastronômico", "Representante Comercial"],
  "worksFor": {
    "@type": "Organization",
    "name": "Felipe Nascimento Soluções"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Bahia",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://linkedin.com/in/felipenascimentob/",
    "https://instagram.com/felipenb"
  ]
};

export default function Home() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <div className={styles.splitSection}>
        {/* Consultoria Side */}
        <div className={`${styles.splitSide} ${styles.consultoriaSide}`} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.7), rgba(8,28,21,0.9)), url(/consultoria-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.splitContent}>
            {/* Normal State */}
            <div className={styles.contentNormal}>
              <h2 className={styles.splitTitle}>Consultoria Gastronômica</h2>
              <p className={styles.splitSubtitle}>Estratégia e otimização para negócios de alimentação.</p>
              <Link href="/consultoria" className="btn-primary">
                Conhecer Serviços
              </Link>
            </div>
            {/* Expanded State */}
            <div className={styles.contentExpanded}>
              <h2 className={styles.splitTitle}>Maximize sua Lucratividade</h2>
              <p className={styles.splitSubtitle}>Engenharia de cardápio, processos eficientes e inteligência para dominar seu mercado.</p>
              <Link href="/consultoria" className="btn-primary">
                Agendar Diagnóstico
              </Link>
            </div>
          </div>
        </div>

        {/* Representação Side */}
        <div className={`${styles.splitSide} ${styles.representacaoSide}`} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.7), rgba(8,28,21,0.9)), url(/representacao-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.splitContent}>
            {/* Normal State */}
            <div className={styles.contentNormal}>
              <h2 className={styles.splitTitle}>Representação Comercial</h2>
              <p className={styles.splitSubtitle}>
                Soluções multissetoriais para Varejo, Horeca e Pet.
              </p>
              <Link href="/representacao" className="btn-outline">
                Explorar Soluções
              </Link>
            </div>
            {/* Expanded State */}
            <div className={styles.contentExpanded}>
              <h2 className={styles.splitTitle}>Abastecimento Estratégico</h2>
              <p className={styles.splitSubtitle}>
                Acesso direto a +40 marcas líderes. Giro rápido e margem garantida para sua loja ou negócio.
              </p>
              <Link href="/representacao" className="btn-outline">
                Acessar Oportunidades Agora
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.bioSection}>
        <div className="container">
          <h2 className={styles.bioTitle}>Felipe Nascimento</h2>
          <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', fontWeight: '600' }}>
            Consultor Gastronômico & Representante Comercial
          </p>
          <p className={styles.bioText}>
            Conectando oportunidades, impulsionando resultados. Com quase 17 anos de experiência em vendas e 9 anos de formação na área gastronômica, meu principal objetivo é ajudar negócios a alcançar o verdadeiro potencial de suas equipes e operações.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
