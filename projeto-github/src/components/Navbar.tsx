'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo-felipe.png" alt="Felipe Nascimento - Consultor Gastronômico & Representante Comercial" className={styles.logoImage} />
                    <span className={styles.logoText}>Felipe Nascimento</span>
                </Link>

                <div className={styles.mobileControls}>
                    <div className={styles.mobileThemeToggle}>
                        <ThemeToggle />
                    </div>
                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span className={isMenuOpen ? styles.active : ''}></span>
                        <span className={isMenuOpen ? styles.active : ''}></span>
                        <span className={isMenuOpen ? styles.active : ''}></span>
                    </button>
                </div>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                    <li><Link href="/consultoria" onClick={() => setIsMenuOpen(false)}>Consultoria</Link></li>
                    <li><Link href="/representacao" onClick={() => setIsMenuOpen(false)}>Representação</Link></li>
                    <li>
                        <a
                            href="https://felipe.rep.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.portalLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <LockIcon />
                            Portal do Cliente
                        </a>
                    </li>
                    <li><Link href="/contato" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
                    <li className={styles.desktopThemeToggle}>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function LockIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
    );
}
