'use client';
import styles from './Footer.module.css';
import Image from 'next/image';
import { useQuiz } from '@/components/LeadQuiz/QuizContext';
import { motion } from 'framer-motion';

export default function Footer() {
    const { openQuiz } = useQuiz();

    return (
        <footer className="bg-[#050505] border-t border-white/[0.05] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 py-8 md:py-12 relative z-10 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-8">

                {/* Left Side: Info & Contacts */}
                <div className="flex flex-col space-y-8 w-full lg:w-auto flex-1">
                    {/* Brand Name (Always Full Width) */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-sans text-white mb-2 tracking-tight whitespace-nowrap">Felipe Baptista</h2>
                        <span className="text-[11px] md:text-xs uppercase tracking-[0.15em] text-[#888] font-bold font-sans block whitespace-nowrap">Consultor Gastronômico</span>
                    </div>

                    {/* Contacts & Mobile Logo Container */}
                    <div className="flex flex-row justify-between items-end gap-2 w-full lg:w-auto">
                        <ul className="flex flex-col space-y-5 text-sm md:text-[15px] text-white/80 font-sans font-light flex-1">
                            <li>
                                <button onClick={openQuiz} className="flex items-center gap-4 hover:text-[var(--accent-gold)] transition-colors outline-none cursor-pointer w-full text-left">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.595-5.236-3.935-6.831-6.83l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <span>(73) 9 8134-9085</span>
                                </button>
                            </li>
                            <li>
                                <a href="mailto:eu@felipenb.com.br" className="flex items-center gap-4 hover:text-[var(--accent-gold)] transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <span>eu@felipenb.com.br</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/felipenascimentob/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[var(--accent-gold)] transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.5 3h-17A1.5 1.5 0 002 4.5v15A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0020.5 3zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/fnb.consultoria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[var(--accent-gold)] transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-9.658a1.438 1.438 0 11-2.876 0 1.438 1.438 0 012.876 0z" />
                                    </svg>
                                    <span>@fnb.consultoria</span>
                                </a>
                            </li>
                        </ul>

                        {/* Logo Mobile Only */}
                        <div className="lg:hidden shrink-0 flex justify-end self-end items-end opacity-[0.05] hover:opacity-30 transition-opacity duration-700">
                            <div className="relative w-36 h-36 filter grayscale hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/logo-new.png"
                                    alt="Felipe Baptista Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Logo Display (Desktop Only) */}
                <div className="hidden lg:flex shrink-0 justify-end self-end items-end opacity-[0.05] hover:opacity-30 transition-opacity duration-700">
                    <div className="relative w-56 h-56 filter grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="/logo-new.png"
                            alt="Felipe Baptista Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>

            {/* Copyright Ribbon */}
            <div className="border-t border-white/[0.05] relative z-10 w-full">
                <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col justify-center items-center text-[10px] text-[#444] tracking-[0.1em] font-sans">
                    <span>&copy; {new Date().getFullYear()} FELIPE BAPTISTA. TODOS OS DIREITOS RESERVADOS.</span>
                </div>
            </div>
        </footer>
    );
}
