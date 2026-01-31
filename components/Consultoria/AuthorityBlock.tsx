'use client';

import { motion } from 'framer-motion';

export default function AuthorityBlock() {
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
                                <span className="block text-5xl md:text-7xl font-[var(--font-serif)] text-[var(--accent-gold)] mb-2">17+</span>
                                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--text-secondary-dark)]">Anos em Vendas</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-8 md:p-12 bg-white/5 border border-white/5 rounded-sm backdrop-blur-sm mt-8 md:mt-12"
                            >
                                <span className="block text-5xl md:text-7xl font-[var(--font-serif)] text-[var(--accent-gold)] mb-2">9+</span>
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
                                    Já estive do outro lado do balcão e sei exatamente as dores que você sente. Minha abordagem une a <strong className="text-white font-normal">técnica da alta gastronomia</strong> com a <strong className="text-white font-normal">agressividade comercial</strong> necessária para fazer um negócio lucrar.
                                </p>

                                <p>
                                    Meu objetivo não é te entregar uma planilha bonita, é <strong>implementar processos que funcionam na vida real</strong>, com a equipe que você tem hoje.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-sm md:text-base text-[var(--accent-gold)] font-medium">
                                    "Consultoria essencial para minimizar erros e encurtar o caminho do sucesso."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
