'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './Navbar.module.css';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    // Auto-hide navbar on scroll down, show on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const isActive = (path: string) => pathname === path;

    const navVariants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
    };

    return (
        <motion.nav
            className={styles.navbar}
            variants={navVariants}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icon.png" alt="Felipe Nascimento" className={styles.logoImage} />
                    </motion.div>
                    <span className={`${styles.logoText} text-[#f0f0f0]`}>Felipe Nascimento</span>
                </Link>

                <div className={styles.navActionsMobile}>

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
                        <Link href="/consultoria" onClick={() => setIsMenuOpen(false)}>
                            <motion.span
                                className={isActive('/consultoria') ? styles.activeLink : ''}
                                whileHover={{ y: -2 }}
                            >
                                Consultoria
                            </motion.span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/representacao" onClick={() => setIsMenuOpen(false)}>
                            <motion.span
                                className={isActive('/representacao') ? styles.activeLink : ''}
                                whileHover={{ y: -2 }}
                            >
                                Representação
                            </motion.span>
                        </Link>
                    </li>
                    <li className={styles.desktopAction}>
                        <Link href="/contato" className="btn-primary" onClick={() => setIsMenuOpen(false)}>
                            Contato
                        </Link>
                    </li>

                </ul>
            </div>
        </motion.nav>
    );
}
