'use client';

import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import Image from 'next/image';

const BioModal = dynamic(() => import('./BioModal'), { ssr: false });

export default function AuthorityBlock() {
    const [bioOpen, setBioOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const salesYears = new Date().getFullYear() - 2008; // Desde os 14 anos
    const kitchenYears = new Date().getFullYear() - 2016; // Desde a UniOpet

    const stats = [
        { value: `${salesYears}+`, label: 'anos em vendas', note: 'Desde os 14, B2B e varejo' },
        { value: `${kitchenYears}+`, label: 'anos de cozinha', note: 'Formação UniOpet · Curitiba' },
        { value: '24%', label: 'CMV médio atingido', note: 'Partindo geralmente de 35–40%' },
    ];

    return (
        <section id="expertise" className="relative py-9 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-7 md:mb-9"
                >
                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.3em] font-sans uppercase border-l-2 border-[var(--accent-gold)] pl-4 block">
                        Trajetória
                    </span>
                </motion.div>

                {/* Estrutura: Título (Esq) + Foto (Meio) + Bio/CTA (Dir) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start mb-2 md:mb-4">

                    {/* Título (coluna esquerda) */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[40%] flex-shrink-0"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-serif)] text-white leading-tight tracking-tighter">
                            Não sou apenas um{' '}
                            <span
                                className="italic font-light text-transparent block"
                                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                            >
                                consultor de palco.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Foto Portrait (coluna meio) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="w-full max-w-[280px] sm:max-w-none sm:w-[80%] md:w-[60%] lg:w-[25%] mx-auto lg:mx-0 relative aspect-[4/5] md:aspect-[3/4] flex-shrink-0 order-first lg:order-none lg:-mt-12 group"
                    >
                        {/* Subtle Gold Glow behind Image */}
                        <div className="absolute inset-0 bg-[var(--accent-gold)] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700 pointer-events-none rounded-sm"></div>

                        <div className="relative w-full h-full overflow-hidden bg-transparent">
                            <Image
                                src="/images/eu.png?v=7"
                                alt="Felipe Baptista"
                                fill
                                sizes="(max-width: 1024px) 60vw, 25vw"
                                className="object-cover object-[center_15%] grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                                priority
                            />
                            {/* Gradients to blend the image seamlessly into the #0a0a0a background */}
                            <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none"></div>
                            <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none"></div>
                            <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* Bio + CTA (coluna direita) */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-[35%]"
                    >
                        <div className="space-y-4 text-sm md:text-base text-[#888] font-sans leading-relaxed mb-6">
                            <p>
                                Já estive do outro lado do balcão e sei exatamente as dores que você sente.
                                Minha abordagem une a{' '}
                                <strong className="text-[var(--accent-gold)] font-normal">técnica da gastronomia</strong>
                                {' '}com a{' '}
                                <strong className="text-[var(--accent-gold)] font-normal">agressividade comercial</strong>
                                {' '}necessária para fazer um negócio lucrar.
                            </p>
                            <p>
                                Meu objetivo não é te entregar uma planilha bonita, é{' '}
                                <strong className="text-white font-normal">implementar processos que funcionam na vida real</strong>,
                                com a equipe que você tem hoje.
                            </p>
                        </div>

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
                    </motion.div>
                </div>

                {/* Stats da faixa horizontal inferior */}
                <div className="grid grid-cols-3 gap-px bg-white/[0.04]">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-400 px-6 py-4 md:px-8 md:py-5 flex flex-col justify-center"
                        >
                            <span className="block font-[var(--font-serif)] text-4xl md:text-5xl text-white group-hover:text-[var(--accent-gold)] transition-colors duration-500 leading-none tracking-tighter mb-3">
                                {stat.value}
                            </span>
                            <p className="text-sm font-sans text-white/60 group-hover:text-white/80 leading-snug mb-1.5 transition-colors duration-300">
                                {stat.label}
                            </p>
                            <p className="text-[9px] font-mono tracking-[0.15em] uppercase text-[#444] group-hover:text-[#666] transition-colors duration-300">
                                {stat.note}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

            <BioModal isOpen={bioOpen} onClose={() => setBioOpen(false)} />
        </section>
    );
}
