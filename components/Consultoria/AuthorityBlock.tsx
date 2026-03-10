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
        <section id="expertise" className="relative py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center max-w-7xl mx-auto">

                    {/* Visual Stats Block (Left Side) */}
                    <div className="w-full lg:w-[45%]">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className="bg-[#111] p-8 md:p-12 border border-white/[0.03] rounded-sm flex flex-col justify-center items-center text-center"
                            >
                                <span className="block text-5xl md:text-6xl font-[var(--font-serif)] text-[var(--accent-gold)] mb-3">{salesYears}+</span>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#888]">Anos em Vendas</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ delay: 0.1 }}
                                className="bg-[#111] p-8 md:p-12 border border-white/[0.03] rounded-sm flex flex-col justify-center items-center text-center mt-8 md:mt-12"
                            >
                                <span className="block text-5xl md:text-6xl font-[var(--font-serif)] text-[var(--accent-gold)] mb-3">{kitchenYears}+</span>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#888]">Anos de Cozinha</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Side (Right Side) */}
                    <div className="w-full lg:w-[55%]">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-serif)] text-white mb-8 leading-tight tracking-tight">
                                Não sou apenas um <br />
                                <span className="opacity-40 italic font-light">consultor de palco.</span>
                            </h2>

                            <div className="space-y-6 text-base text-[#aaa] font-sans leading-relaxed">
                                <p>
                                    Já estive do outro lado do balcão e sei exatamente as dores que você sente. Minha abordagem une a <strong className="text-[var(--accent-gold)] font-normal">técnica da gastronomia</strong> com a <strong className="text-[var(--accent-gold)] font-normal">agressividade comercial</strong> necessária para fazer um negócio lucrar.
                                </p>
                                <p>
                                    Meu objetivo não é te entregar uma planilha bonita, é <strong>implementar processos que funcionam na vida real</strong>, com a equipe que você tem hoje.
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/[0.05]">
                                <button
                                    onClick={() => startTransition(() => setBioOpen(true))}
                                    disabled={isPending}
                                    className={`group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-[var(--accent-gold)] transition-colors duration-300 outline-none cursor-pointer ${isPending ? 'opacity-50 cursor-wait' : ''}`}
                                >
                                    <span>Conhecer Trajetória</span>
                                    <span className="w-6 h-[1px] bg-white/30 group-hover:bg-[var(--accent-gold)] group-hover:w-10 transition-all duration-300" />
                                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
