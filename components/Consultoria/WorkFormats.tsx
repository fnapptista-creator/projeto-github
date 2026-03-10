'use client';

import { motion } from 'framer-motion';
import { Brain, Map, Swords } from 'lucide-react';
import Link from 'next/link';

const formats = [
    {
        id: "mentoria",
        index: "01",
        title: "Mentoria",
        subtitle: "Aconselhamento e Direção",
        description: "Eu destravo a SUA visão como dono. Sessões estratégicas focadas em mudar sua mentalidade de gestão, tomada de decisão e liderança. Você executa — mas não caminha mais sozinho.",
        cta: "Conhecer a Mentoria",
        icon: Brain,
        href: "/consultoria#mentoria",
    },
    {
        id: "consultoria",
        index: "02",
        title: "Consultoria",
        subtitle: "Diagnóstico e Rota Clara",
        description: "Fazemos um Raio-X completo da sua operação. Identifico os gargalos — CMV, equipe, processos — e entrego o Plano de Ação exato para sua equipe executar.",
        cta: "Ver a Consultoria",
        icon: Map,
        href: "/consultoria#consultoria",
    },
    {
        id: "assessoria",
        index: "03",
        title: "Assessoria",
        subtitle: "A Mão na Massa",
        description: "Vou para a trincheira com você. Além da estratégia, atuo na execução técnica do dia a dia — desde fichas técnicas até o layout do salão e da cozinha.",
        cta: "Ver a Assessoria",
        icon: Swords,
        href: "/consultoria#assessoria",
    }
];

export default function WorkFormats() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-b border-white/[0.05]">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 md:mb-16"
                >
                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.3em] font-sans uppercase border-l-2 border-[var(--accent-gold)] pl-4 block mb-6">
                        Níveis de Intervenção
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-serif)] text-white tracking-tighter leading-tight max-w-2xl">
                        Você sabe do que o seu negócio{' '}
                        <span className="text-transparent italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}>
                            precisa agora?
                        </span>
                    </h2>
                    <p className="text-[#888] font-sans text-sm md:text-base mt-5 max-w-xl leading-relaxed">
                        O mercado confunde os três termos. Cada momento da sua empresa exige um formato diferente de acompanhamento — e eu atuo nos três.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
                    {formats.map((format, i) => {
                        const Icon = format.icon;
                        return (
                            <motion.div
                                key={format.id}
                                id={format.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col hover:bg-[#0e0e0e] transition-colors duration-500 relative overflow-hidden cursor-default"
                            >
                                {/* Linha de destaque no topo */}
                                <span className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--accent-gold)]/50 group-hover:w-full transition-all duration-700 ease-out" />

                                {/* Número + Ícone */}
                                <div className="flex items-start justify-between mb-8">
                                    <span className="font-[var(--font-serif)] text-5xl text-[var(--accent-gold)] opacity-15 group-hover:opacity-60 transition-opacity duration-500 leading-none select-none">
                                        {format.index}
                                    </span>
                                    <Icon
                                        strokeWidth={1}
                                        className="w-8 h-8 text-white/20 group-hover:text-[var(--accent-gold)]/60 transition-colors duration-500"
                                    />
                                </div>

                                {/* Conteúdo */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] text-white mb-1 group-hover:text-white transition-colors">
                                        {format.title}
                                    </h3>
                                    <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#555] group-hover:text-[#888] mb-5 transition-colors duration-300">
                                        {format.subtitle}
                                    </p>
                                    <p className="text-sm font-sans text-[#666] group-hover:text-[#aaa] leading-relaxed transition-colors duration-300">
                                        {format.description}
                                    </p>
                                </div>

                                {/* CTA padronizado */}
                                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                                    <Link
                                        href={format.href}
                                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-white/50 hover:text-[var(--accent-gold)] transition-colors duration-300 group/link"
                                    >
                                        <span>{format.cta}</span>
                                        <span className="w-6 h-[1px] bg-white/20 group-hover/link:bg-[var(--accent-gold)] group-hover/link:w-10 transition-all duration-300" />
                                        <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        </section>
    );
}
