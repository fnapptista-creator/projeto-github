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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: service.delay, ease: "easeOut" }}
                            className="group relative h-full"
                        >
                            <Link href={service.link} className="block h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)] focus:ring-offset-2 focus:ring-offset-[var(--bg-void)] rounded-lg">
                                {/* Card Body */}
                                <div className="h-full flex flex-col justify-between p-8 md:p-10 border border-white/[0.05] bg-[#080808] rounded-lg transition-colors duration-500 group-hover:bg-[#0c0c0c] group-hover:border-[var(--accent-gold)]/30">

                                    <div>
                                        <div className="text-[var(--accent-gold)] text-xs tracking-[0.2em] font-sans uppercase mb-4 opacity-80">0{index + 1}</div>
                                        <h3 className="text-2xl lg:text-3xl font-[var(--font-serif)] text-white mb-4 leading-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#888] font-sans text-sm md:text-base leading-relaxed mb-10">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Action Link Area */}
                                    <div className="flex items-center text-xs font-bold tracking-[0.15em] uppercase text-white group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                                        <span className="mr-3">Saber Mais</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
