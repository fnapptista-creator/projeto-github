'use client';

import { motion } from 'framer-motion';
import { useQuiz } from '@/components/LeadQuiz/QuizContext';

const microServices = [
    {
        id: '01',
        title: 'Raio-X Financeiro & CMV',
        description: 'Análise implacável dos seus números. Descubra exatamente onde está o ralo que leva o seu dinheiro e estanque o desperdício em 30 dias sem precisar demitir ninguém.',
        price: 'Intervenção Rápida',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        id: '02',
        title: 'Engenharia de Cardápio',
        description: 'Seu cardápio não é um panfleto, é uma ferramenta de vendas. Vamos redesenhar seu mix de produtos focado exclusivamente nos itens que trazem a maior Margem de Contribuição.',
        price: 'Aumento de Ticket',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        )
    },
    {
        id: '03',
        title: 'Layout de Cozinha',
        description: 'Cozinha mal desenhada custa caro todo mês. Projeto técnico focando no fluxo perfeito dos cozinheiros e garçons. Ergonomia e velocidade para não perder a mesa no sábado à noite.',
        price: 'Operação Eficiente',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        )
    }
];

export default function MicroConsulting() {
    const { openQuiz } = useQuiz();

    return (
        <section className="py-24 bg-[#0a0a0a] text-white relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] mb-6 tracking-tight">
                            Soluções Focadas. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-gold)] to-yellow-600">Cirúrgicas.</span>
                        </h2>
                        <p className="text-neutral-400 font-sans text-lg">
                            Nem todo problema exige uma reestruturação de meses. Se o seu caixa está sangrando hoje, estas são as intervenções rápidas para estancar a perda e botar dinheiro no bolso no curto prazo.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {microServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#111] border border-white/10 p-8 hover:border-[var(--accent-gold)]/50 transition-colors duration-300 group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-white/5 text-[var(--accent-gold)] rounded-sm group-hover:bg-[var(--accent-gold)]/10 transition-colors">
                                    {service.icon}
                                </div>
                                <span className="text-xs font-mono text-neutral-500">{service.id}</span>
                            </div>

                            <h3 className="text-xl font-bold font-sans tracking-tight mb-4 group-hover:text-[var(--accent-gold)] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-sm text-neutral-400 font-sans leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                                    {service.price}
                                </span>
                                <button
                                    onClick={openQuiz}
                                    className="text-[var(--accent-gold)] p-2 hover:bg-white/5 rounded-full transition-colors"
                                    aria-label="Agendar Consulta"
                                >
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
