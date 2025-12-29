'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';

// Re-compile trigger
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icon.png" alt="Felipe Nascimento - Consultor Gastronômico & Representante Comercial" className={styles.logoImage} />
                    <span className={styles.logoText}>Felipe Nascimento</span>
                </Link>

                <div className={styles.navActions}>
                    <ThemeToggle />
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
                    <li>
                        <Link
                            href="/consultoria"
                            className={isActive('/consultoria') ? styles.activeLink : ''}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Consultoria
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/representacao"
                            className={isActive('/representacao') ? styles.activeLink : ''}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Representação
                        </Link>
                    </li>
                    <li><Link href="/contato" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
                    <li className={styles.desktopToggle}><ThemeToggle /></li>
                </ul>
            </div>
        </nav>
    );
}
