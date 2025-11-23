import Image from "next/image";
import Link from "next/link";
import styles from "./links.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Felipe Nascimento | Links",
    description: "Portal de acesso: Consultoria Gastronômica, Representação Comercial e Catálogos.",
};

export default function LinksPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <header className={styles.header}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/logo-felipe.png"
                            alt="Felipe Nascimento Logo"
                            width={120}
                            height={120}
                            className={styles.logo}
                            priority
                        />
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.title}>Felipe Nascimento</h1>
                        <VerifiedIcon className={styles.verifiedIcon} />
                    </div>
                    <p className={styles.subtitle}>
                        Estratégia e Conexões de Alto Valor para o Mercado Gastronômico.
                    </p>
                    <p className={styles.bio}>
                        Eleve o padrão do seu negócio. Atuo na interseção entre gestão eficiente e produtos de excelência, conectando sua operação às melhores soluções do setor.
                    </p>
                </header>

                <nav className={styles.linksGroup}>
                    <Link href="/consultoria" className={styles.linkCard}>
                        <div className={styles.linkContent}>
                            <span className={styles.linkTitle}>Consultoria Gastronômica</span>
                            <span className={styles.linkDescription}>Diagnóstico, processos e lucratividade</span>
                        </div>
                        <ArrowIcon className={styles.icon} />
                    </Link>

                    <Link href="/representacao" className={styles.linkCard}>
                        <div className={styles.linkContent}>
                            <span className={styles.linkTitle}>Representação Comercial</span>
                            <span className={styles.linkDescription}>Portfólio de marcas premium</span>
                        </div>
                        <ArrowIcon className={styles.icon} />
                    </Link>

                    <a
                        href="https://felipe.rep.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.linkCard} ${styles.catalogCard}`}
                    >
                        <div className={styles.linkContent}>
                            <span className={styles.linkTitle}>Acesso a Catálogos</span>
                            <span className={styles.linkDescription}>Portal exclusivo para lojistas (B2B)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <LockIcon className={styles.icon} />
                        </div>
                    </a>

                    <a
                        href="https://linkedin.com/in/felipenascimentob/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.linkCard} ${styles.linkedinCard}`}
                    >
                        <div className={styles.linkContent}>
                            <span className={styles.linkTitle}>LinkedIn Profissional</span>
                            <span className={styles.linkDescription}>Minha trajetória e conexões</span>
                        </div>
                        <LinkedinIcon className={styles.icon} />
                    </a>
                </nav>

                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Felipe Nascimento. Todos os direitos reservados.</p>
                </footer>
            </div>
        </div>
    );
}

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

function LockIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}

function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function VerifiedIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#C8B273"
            className={className}
        >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    );
}
