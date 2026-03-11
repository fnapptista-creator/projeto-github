'use client';

import { motion } from 'framer-motion';

const stats = [
    {
        value: '17',
        unit: 'anos',
        label: 'em vendas e gestão de negócios',
        detail: 'B2B, varejo e gastronomia'
    },
    {
        value: '9',
        unit: 'anos',
        label: 'dentro de cozinhas profissionais',
        detail: 'Operação, padronização e cardápio'
    },
    {
        value: '+40',
        unit: 'op.',
        label: 'entre consultorias e mentorias',
        detail: 'Restaurantes, padarias e gastropubs'
    },
    {
        value: '24%',
        unit: '',
        label: 'CMV médio atingido por clientes',
        detail: 'Partindo geralmente de 35–40%'
    },
];

export default function ResultsStats() {
    return (
        <section className="py-16 md:py-20 bg-[#060606] border-t border-white/[0.05]">
            <div className="container mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.3em] font-sans uppercase border-l-2 border-[var(--accent-gold)] pl-4 block">
                        Experiência em Números
                    </span>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04]">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group bg-[#060606] hover:bg-[#0a0a0a] transition-colors duration-400 p-8 md:p-10"
                        >
                            {/* Número */}
                            <div className="flex items-baseline gap-1.5 mb-3">
                                <span className="font-[var(--font-serif)] text-5xl md:text-6xl text-white group-hover:text-[var(--accent-gold)] transition-colors duration-500 leading-none tracking-tighter">
                                    {stat.value}
                                </span>
                                {stat.unit && (
                                    <span className="text-sm font-sans text-[#555] group-hover:text-[var(--accent-gold)]/60 transition-colors duration-500 leading-none">
                                        {stat.unit}
                                    </span>
                                )}
                            </div>

                            {/* Label */}
                            <p className="text-sm font-sans text-white/70 group-hover:text-white/90 leading-snug mb-2 transition-colors duration-300">
                                {stat.label}
                            </p>

                            {/* Detalhe */}
                            <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#444] group-hover:text-[#666] transition-colors duration-300">
                                {stat.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
