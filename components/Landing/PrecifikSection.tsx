'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    { id: "01", label: "Preço Certo, na Hora Certa", desc: "Defina o CMV alvo e o sistema calcula exatamente por quanto cada prato deve ser vendido para preservar sua margem." },
    { id: "02", label: "Custo Real com Fator de Correção", desc: "Compra 1kg, usa 800g. O Precifik entende a perda de manipulação e ajusta o custo antes de precificar." },
    { id: "03", label: "Saúde Financeira por Prato", desc: "Alertas visuais indicam se sua margem está saudável (verde), no limite (laranja) ou perigosa (vermelho)." },
    { id: "04", label: "Fichas Técnicas Inteligentes", desc: "Bases e sub-receitas com custo atualizado em cascata. Mude um insumo e todos os pratos recalculam automaticamente." },
];

export default function PrecifikSection() {
    return (
        <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">

                {/* Topo: badge + CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 md:mb-16"
                >
                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.3em] font-sans uppercase border-l-2 border-[var(--accent-gold)] pl-4">
                        Ferramenta Exclusiva — Clientes da Consultoria
                    </span>
                    <a
                        href="https://precifik.felipenb.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-[var(--accent-gold)] transition-colors duration-300 group self-start sm:self-auto cursor-pointer"
                    >
                        <span>Acessar o Precifik</span>
                        <span className="w-6 h-[1px] bg-white/30 group-hover:bg-[var(--accent-gold)] group-hover:w-10 transition-all duration-300" />
                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </motion.div>

                {/* Corpo */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

                    {/* Coluna Esquerda: Logo + Título + Tagline */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.9 }}
                    >
                        {/* Logo com hover de brightness */}
                        <div className="flex items-center gap-4 mb-5">
                            <Image
                                src="/precifik.png"
                                alt="Precifik"
                                width={68}
                                height={68}
                                className="rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                            />
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-serif)] text-white tracking-tighter leading-none">
                                Precifi<span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}>k</span>
                            </h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-[#999] text-sm md:text-base font-sans leading-relaxed"
                        >
                            Você sabe exatamente quanto custa cada prato que sai da sua cozinha? O Precifik é o sistema que transforma seu cardápio numa máquina de margem. Precificação com precisão, do insumo ao preço final de venda.
                        </motion.p>
                    </motion.div>

                    {/* Coluna Direita: Features */}
                    <div className="divide-y divide-white/[0.06]">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.id}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="flex items-start gap-6 md:gap-10 py-5 group cursor-default hover:bg-white/[0.02] transition-colors duration-300 -mx-4 px-4"
                            >
                                <span className="text-[10px] font-mono text-white/20 group-hover:text-[var(--accent-gold)] pt-1 w-5 flex-shrink-0 select-none transition-colors duration-300">{f.id}</span>
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 flex-1">
                                    <p className="text-white/80 group-hover:text-white text-sm font-sans font-semibold tracking-tight sm:w-52 flex-shrink-0 transition-colors duration-300">
                                        {f.label}
                                    </p>
                                    <p className="text-[#777] group-hover:text-[#aaa] text-sm font-sans leading-relaxed transition-colors duration-300">
                                        {f.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
