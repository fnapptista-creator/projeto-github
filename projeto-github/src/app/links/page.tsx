import Image from "next/image";
import Link from "next/link";
import styles from "./links.module.css";
import { Metadata } from "next";
import ThemeToggle from "../../components/ThemeToggle";

export const metadata: Metadata = {
    title: "Felipe Nascimento | Hub de Negócios",
    description: "Soluções Estratégicas para Varejo e Foodservice. Acesso a catálogos e consultoria especializada.",
};

export default function LinksPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>

                {/* 1. Hero Section */}
                <header className={styles.heroSection}>
                    <div className={styles.headerTop}>
                        <div className={styles.profileBlock}>
                            <div className={styles.logoContainer}>
                                <Image
                                    src="/logo-felipe.png"
                                    alt="Felipe Nascimento Logo"
                                    width={100}
                                    height={100}
                                    className={styles.logo}
                                    priority
                                />
                            </div>
                            <h2 className={styles.profileName}>Felipe Nascimento</h2>
                        </div>
                        <div className={styles.headerToggle}>
                            <ThemeToggle />
                        </div>
                    </div>

                    <h1 className={styles.headline}>
                        Soluções Estratégicas para <span className={styles.highlight}>Varejo</span> e <span className={styles.highlight}>Foodservice</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Aumente seu Mix, Margem e Eficiência. Acesso direto às melhores marcas do mercado e consultoria especializada.
                    </p>
                </header>

                {/* 2. Segmentação Estratégica */}
                <main className={styles.mainGrid}>

                    {/* BLOCO 1: Consultoria Gastronômica */}
                    <section className={`${styles.card} ${styles.cardConsulting}`}>
                        <div className={styles.cardHeader}>
                            <ChefIcon className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Consultoria Gastronômica</h2>
                        </div>
                        <p className={styles.cardDescription}>
                            Otimização de processos, montagem de mix e soluções estratégicas para bares, restaurantes e foodservice.
                        </p>

                        <div className={styles.actionGroup}>
                            <Link href="/consultoria" className={styles.btnOutline}>
                                <span>Conhecer Serviços</span>
                                <ArrowRightIcon className={styles.btnIcon} />
                            </Link>
                        </div>
                    </section>

                    {/* BLOCO 2: Representação Comercial (Showcase) */}
                    <section className={`${styles.card} ${styles.cardRepresentation}`}>
                        <div className={styles.cardHeader}>
                            <StoreIcon className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Representação Comercial</h2>
                        </div>
                        <p className={styles.cardDescription}>
                            Atendemos Cama, Mesa e Banho, Petshop, Utilidades, Decoração e Foodservice. Transforme o mix da sua loja com marcas líderes.
                        </p>

                        <div className={styles.actionGroup}>
                            <Link href="/representacao" className={styles.btnOutline}>
                                <span>Conhecer Marcas</span>
                                <ArrowRightIcon className={styles.btnIcon} />
                            </Link>
                            <span className={styles.linkSecondary}>
                                Ainda não é cliente? <strong>Cadastre-se</strong>
                            </span>
                        </div>
                    </section>

                    {/* BLOCO 3: Portal do Cliente (Acesso Restrito) */}
                    <section className={`${styles.card} ${styles.cardPortal}`}>
                        <div className={styles.cardHeader}>
                            <LockIcon className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Portal do Cliente</h2>
                        </div>
                        <p className={styles.cardDescription}>
                            Acesso exclusivo a catálogos de +40 marcas líderes, estoque atualizado e oportunidades de giro rápido.
                        </p>

                        <div className={styles.actionGroup}>
                            <a
                                href="https://felipe.rep.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                <span>Acessar Catálogos</span>
                                <ExternalLinkIcon className={styles.btnIcon} />
                            </a>
                        </div>
                    </section>

                </main>

                {/* 3. Seção de Autoridade */}
                <section className={styles.authoritySection}>
                    <p className={styles.authorityLabel}>Representação oficial de grandes marcas</p>
                    <div className={styles.brandStrip}>
                        <span className={styles.brandName}>Porto Brasil</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.brandName}>Lyor</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.brandName}>OU</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.brandName}>DayHome</span>
                    </div>
                </section>

                {/* 4. Rodapé / Contato */}
                <footer className={styles.footer}>
                    <a
                        href="https://wa.me/5571999999999" // Substituir pelo número real se disponível
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappBtn}
                    >
                        <WhatsappIcon className={styles.btnIcon} />
                        <span>Falar diretamente com Felipe</span>
                    </a>

                    <div className={styles.footerBottom}>
                        <p className={styles.copy}>© {new Date().getFullYear()} Felipe Nascimento</p>
                    </div>
                </footer>

            </div>
        </div>
    );
}

// Icons Components

function StoreIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>
    );
}

function ChefIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 13.87A8 8 0 0 1 6 10a6 6 0 0 1 12 0 8 8 0 0 1 0 3.87" /><path d="M6 13.87V16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.13" /><path d="M9 22v-2" /><path d="M15 22v-2" /><path d="M12 2v4" /><path d="m16 6-2.6-3.4A2 2 0 0 0 11.8 2h-1.4a2 2 0 0 0-1.6.8L6 6" /></svg>
    );
}

function LockIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    );
}

function ExternalLinkIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
    );
}

function WhatsappIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
    );
}
