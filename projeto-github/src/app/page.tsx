import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Felipe Nascimento | Consultoria Gastronômica & Representação Comercial",
  description: "Especialista em gestão de restaurantes e representação de grandes marcas de utilidades. Aumente seu lucro e transforme seu negócio em Itabuna, Ilhéus e Extremo Sul da Bahia.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.splitSection}>
        {/* Consultoria Side */}
        <div className={`${styles.splitSide} ${styles.consultoriaSide}`}>
          {/* Watermark Icon - Chef Hat */}
          <svg className={styles.watermarkIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C10.34 2 9 3.34 9 5C9 5.37 9.07 5.72 9.2 6.05C8.82 6.02 8.42 6 8 6C5.24 6 3 8.24 3 11V13H21V11C21 8.24 18.76 6 16 6C15.58 6 15.18 6.02 14.8 6.05C14.93 5.72 15 5.37 15 5C15 3.34 13.66 2 12 2M4 15V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V15H4Z" />
          </svg>

          <div className={styles.splitContent}>
            <h2 className={styles.splitTitle}>Consultoria Gastronômica</h2>
            <p className={styles.splitSubtitle}>Seu Restaurante precisa de Lucro?</p>
            <Link href="/consultoria" className="btn-primary">
              Transformar meu Negócio
            </Link>
          </div>
        </div>

        {/* Representação Side */}
        <div className={`${styles.splitSide} ${styles.representacaoSide}`}>
          {/* Watermark Icon - Tag/Label */}
          <svg className={styles.watermarkIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58M5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7Z" />
          </svg>

          <div className={styles.splitContent}>
            <h2 className={styles.splitTitle}>Representação Comercial</h2>
            <p className={styles.splitSubtitle}>Sua Loja precisa de Produtos?</p>
            <Link href="/representacao" className={`btn-outline ${styles.repBtn}`}>
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Section (Distinct Layout) */}
      <div className={styles.mobileSection}>
        <div className={styles.mobileCard} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.6), rgba(8,28,21,0.9)), url(/consultoria-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.mobileCardContent}>
            <h2 className={styles.mobileCardTitle}>Consultoria Gastronômica</h2>
            <p className={styles.mobileCardSubtitle}>Lucratividade e Gestão para seu Restaurante</p>
            <Link href="/consultoria" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              Saiba Mais
            </Link>
          </div>
        </div>

        <div className={styles.mobileCard} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.6), rgba(8,28,21,0.9)), url(/representacao-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.mobileCardContent}>
            <h2 className={styles.mobileCardTitle}>Representação Comercial</h2>
            <p className={styles.mobileCardSubtitle}>Grandes Marcas para sua Loja</p>
            <Link href="/representacao" className="btn-outline" style={{ width: '100%', textAlign: 'center', background: 'rgba(8,28,21,0.8)' }}>
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>

      <ScrollReveal>
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
      </ScrollReveal>

      <Footer />
    </main>
  );
}
