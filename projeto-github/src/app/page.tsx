import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

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
        {/* Consultoria Side */}
        <div className={`${styles.splitSide} ${styles.consultoriaSide}`} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.7), rgba(8,28,21,0.9)), url(/consultoria-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.splitContent}>
            <h2 className={styles.splitTitle}>Consultoria Gastronômica</h2>
            <p className={styles.splitSubtitle}>Seu Restaurante precisa de Lucro?</p>
            <Link href="/consultoria" className="btn-primary">
              Transformar meu Negócio
            </Link>
          </div>
        </div>

        {/* Representação Side */}
        <div className={`${styles.splitSide} ${styles.representacaoSide}`} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.7), rgba(8,28,21,0.9)), url(/representacao-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.splitContent}>
            <h2 className={styles.splitTitle}>Representação Comercial</h2>
            <p className={styles.splitSubtitle}>Sua Loja precisa de Produtos?</p>
            <Link href="/representacao" className="btn-outline">
              Ver Catálogo
            </Link>
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
