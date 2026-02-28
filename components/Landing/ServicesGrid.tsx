'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        title: "Novos Negócios",
        description: "Tire do papel com segurança. Estudo de viabilidade, layout de cozinha e conceito.",
        link: "/consultoria#servicos",
        delay: 0.1
    },
    {
        title: "Em Funcionamento",
        description: "Engenharia de cardápio, redução de CMV (desperdício) e treinamento de equipe.",
        link: "/consultoria#servicos",
        delay: 0.3
    },
    {
        title: "Expansão",
        description: "Escalabilidade. Rollout plan, cozinha central e formatação de POPs para franquias.",
        link: "/consultoria#servicos",
        delay: 0.5
    }
];

export default function ServicesGrid() {
    return (
        <section className="py-24 bg-[var(--bg-void)] relative overflow-hidden">
            {/* Ambient background touches */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--accent-gold)] rounded-full blur-[150px] opacity-[0.02] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Title */}
                <div className="mb-16 md:mb-24 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.3em] font-sans uppercase block mb-6 border-l-2 border-[var(--accent-gold)] pl-4">Metodologia Exclusiva</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-[var(--font-serif)] text-white tracking-tighter uppercase leading-[0.9]">
                            Níveis de <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>Intervenção.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:grid md:grid-cols-3 gap-4 md:gap-8 border-t border-white/[0.05] pt-12 mt-12 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: service.delay }}
                            className="group snap-center shrink-0 w-[85vw] md:w-auto block border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.02] transition-colors duration-300 rounded-none relative overflow-hidden"
                        >
                            <Link href={service.link} className="flex flex-col w-full h-full p-8 outline-none relative z-10">
                                {/* Stage */}
                                <div className="text-[var(--accent-gold)] text-[10px] tracking-[0.3em] font-sans uppercase mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                    ESTÁGIO 0{index + 1}
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl lg:text-4xl font-[var(--font-serif)] text-white/50 group-hover:text-white transition-colors duration-500 mb-6 uppercase tracking-tighter">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#777] group-hover:text-[#aaa] font-sans text-sm leading-relaxed transition-colors duration-300 mb-8 flex-grow">
                                    {service.description}
                                </p>

                                {/* Action Icon at Bottom Right */}
                                <div className="mt-auto self-end flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-all duration-300">
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Final Section CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/consultoria"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-[var(--accent-gold)] transition-colors group"
                    >
                        <span>Ver detalhes da metodologia</span>
                        <span className="w-8 h-[1px] bg-white/30 group-hover:bg-[var(--accent-gold)] transition-colors"></span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
