'use client';

import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const BioModal = dynamic(() => import('./BioModal'), { ssr: false });

export default function AuthorityBlock() {
    const [bioOpen, setBioOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Contadores Dinâmicos
    const currentYear = new Date().getFullYear();
    const salesYears = currentYear - 2008; // Desde os 14 anos (considerando 17+ em 2025 = 2008)
    const kitchenYears = currentYear - 2016; // Desde a formação na UniOpet (2016)
    return (
        <section id="expertise" className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Stats / Visual Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 md:p-12 bg-white/5 border border-white/5 rounded-sm backdrop-blur-sm"
                            >
                                <span className="block text-5xl md:text-7xl font-[var(--font-serif)] text-[var(--accent-gold)] mb-2">{salesYears}+</span>
                                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--text-secondary-dark)]">Anos em Vendas</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-8 md:p-12 bg-white/5 border border-white/5 rounded-sm backdrop-blur-sm mt-8 md:mt-12"
                            >
                                <span className="block text-5xl md:text-7xl font-[var(--font-serif)] text-[var(--accent-gold)] mb-2">{kitchenYears}+</span>
                                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--text-secondary-dark)]">Anos de Cozinha</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] text-[var(--text-primary-dark)] mb-8 leading-tight">
                                Não sou apenas um <br />
                                <span className="opacity-50">consultor de palco.</span>
                            </h2>

                            <div className="space-y-6 text-base md:text-lg text-[var(--text-secondary-dark)] font-[var(--font-sans)] leading-relaxed">
                                <p>
                                    Já estive do outro lado do balcão e sei exatamente as dores que você sente. Minha abordagem une a <strong className="text-white font-normal">técnica da gastronomia</strong> com a <strong className="text-white font-normal">agressividade comercial</strong> necessária para fazer um negócio lucrar.
                                </p>

                                <p>
                                    Meu objetivo não é te entregar uma planilha bonita, é <strong>implementar processos que funcionam na vida real</strong>, com a equipe que você tem hoje.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <button
                                    onClick={() => startTransition(() => setBioOpen(true))}
                                    disabled={isPending}
                                    className={`text-sm md:text-base text-[var(--accent-gold)] font-medium uppercase tracking-[0.15em] border-b border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)] pb-1 transition-colors flex items-center gap-2 ${isPending ? 'opacity-50 cursor-wait' : ''}`}
                                >
                                    Conhecer minha trajetória
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            <BioModal isOpen={bioOpen} onClose={() => setBioOpen(false)} />
        </section>
    );
}
