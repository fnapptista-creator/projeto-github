'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

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

                <button
                    className={styles.hamburger}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span className={isMenuOpen ? styles.active : ''}></span>
                    <span className={isMenuOpen ? styles.active : ''}></span>
                    <span className={isMenuOpen ? styles.active : ''}></span>
                </button>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                    <li><Link href="/consultoria" onClick={() => setIsMenuOpen(false)}>Consultoria</Link></li>
                    <li><Link href="/representacao" onClick={() => setIsMenuOpen(false)}>Representação</Link></li>
                    <li><Link href="/contato" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
                </ul>
            </div>
        </nav>
    );
}
