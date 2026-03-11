'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [

    {
        index: "01",
        title: "Novos Negócios",
        subtitle: "Do conceito ao primeiro cliente",
        description: "Tire do papel com segurança. Estudo de viabilidade, layout de cozinha, criação de cardápio e acompanhamento até a inauguração.",
        link: "/consultoria#novos-negocios",
        cta: "Ver Novos Negócios",
    },
    {
        index: "02",
        title: "Em Funcionamento",
        subtitle: "Estanque o ralo e volte a lucrar",
        description: "Engenharia de cardápio, redução de CMV e treinamento de equipe. Para quem já opera, mas vende muito e não vê a cor do dinheiro.",
        link: "/consultoria#em-funcionamento",
        cta: "Ver Em Funcionamento",
    },
    {
        index: "03",
        title: "Expansão",
        subtitle: "Escale sem perder o padrão",
        description: "Rollout plan, cozinha central e formatação de POPs. Para quem chegou no limite de uma unidade e quer crescer de forma replicável.",
        link: "/consultoria#expansao",
        cta: "Ver Expansão",
    }
];

export default function ServicesGrid() {
    return (
        <section className="py-9 bg-[#050505] relative overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--accent-gold)] rounded-full blur-[200px] opacity-[0.015] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 md:mb-12"
                >
                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.3em] font-sans uppercase border-l-2 border-[var(--accent-gold)] pl-4 block mb-6">
                        Metodologia Exclusiva
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-[var(--font-serif)] text-white tracking-tighter uppercase leading-[0.9]">
                        Níveis de <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>Intervenção.</span>
                    </h2>
                </motion.div>

                {/* Editorial Stacked Stages: Desktop */}
                <div className="hidden md:block divide-y divide-white/[0.06]">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                        >
                            <Link
                                href={service.link}
                                className="group flex items-center gap-8 lg:gap-14 py-5 md:py-6 cursor-pointer"
                            >
                                {/* Stage Number: âncora tipográfica */}
                                <span className="w-20 lg:w-28 text-right font-[var(--font-serif)] text-5xl lg:text-6xl leading-none text-[var(--accent-gold)] opacity-[0.12] group-hover:opacity-70 transition-all duration-700 flex-shrink-0 select-none tabular-nums">
                                    {service.index}
                                </span>

                                {/* Divisor vertical */}
                                <span className="w-px h-16 bg-white/[0.08] flex-shrink-0 group-hover:bg-[var(--accent-gold)]/40 transition-colors duration-500" />

                                {/* Conteúdo central */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#555] group-hover:text-[var(--accent-gold)]/60 mb-2 transition-colors duration-500">
                                        {service.subtitle}
                                    </p>
                                    <h3 className="text-2xl lg:text-3xl font-[var(--font-serif)] text-white/50 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter mb-3 leading-none">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm font-sans text-[#555] group-hover:text-[#999] leading-relaxed max-w-lg transition-colors duration-400">
                                        {service.description}
                                    </p>
                                </div>

                                {/* CTA direita */}
                                <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-white/20 group-hover:text-[var(--accent-gold)] transition-colors duration-300 flex-shrink-0">
                                    <span className="hidden lg:block">{service.cta}</span>
                                    <span className="w-6 h-[1px] bg-white/15 group-hover:bg-[var(--accent-gold)] group-hover:w-10 transition-all duration-300" />
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile: Scroll horizontal de cards */}
                <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-px bg-white/[0.04] -mx-6 px-6 scroll-smooth">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group snap-start snap-always shrink-0 w-[82vw] bg-[#050505] relative overflow-hidden"
                        >
                            <span className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--accent-gold)]/60 group-hover:w-full transition-all duration-700 ease-out" />
                            <Link href={service.link} className="flex flex-col w-full h-full p-7 outline-none">
                                <span className="font-[var(--font-serif)] text-6xl leading-none text-[var(--accent-gold)] opacity-15 group-hover:opacity-60 transition-opacity duration-500 mb-6 select-none">
                                    {service.index}
                                </span>
                                <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#555] mb-2">{service.subtitle}</p>
                                <h3 className="text-2xl font-[var(--font-serif)] text-white/50 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter mb-4 leading-none">
                                    {service.title}
                                </h3>
                                <p className="text-sm font-sans text-[#555] group-hover:text-[#999] leading-relaxed mb-8 flex-grow transition-colors">
                                    {service.description}
                                </p>
                                <div className="mt-auto inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-white/20 group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                                    <span>{service.cta}</span>
                                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-8 md:mt-10"
                >
                    <Link
                        href="/consultoria"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-[var(--accent-gold)] transition-colors duration-300 group"
                    >
                        <span>Ver detalhes da metodologia</span>
                        <span className="w-6 h-[1px] bg-white/30 group-hover:bg-[var(--accent-gold)] group-hover:w-10 transition-all duration-300" />
                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
