'use client';

import { motion } from 'framer-motion';

const problems = [
    {
        title: "Lucro Invisível",
        desc: "Você vende muito, mas não vê a cor do dinheiro? O buraco negro geralmente se chama CMV descontrolado e Falta de Ficha Técnica. Vamos fechar esse ralo."
    },
    {
        title: "Apagando Incêndios",
        desc: "Sua operação para se você não estiver na loja? Deixe de ser funcionário do seu próprio negócio e crie processos que libertam o dono."
    },
    {
        title: "Equipe sem Padrão",
        desc: "Rotatividade alta e cada dia o prato sai de um jeito? Implemente cultura e treinamento para acabar com o amadorismo no salão e cozinha."
    },
    {
        title: "Desperdício Oculto",
        desc: "Sem Ficha Técnica e Padronização, você paga para trabalhar. Cada erro de preparo é o seu lucro indo direto pro lixo."
    }
];

export default function PainPoints() {
    return (
        <section className="py-16 md:py-20 bg-[var(--bg-void)] relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-10 md:mb-12">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#444] block mb-3">Realidade do Mercado</span>
                    <h2 className="text-2xl md:text-4xl font-[var(--font-serif)] text-[var(--text-primary-dark)]">
                        O cenário comum <span className="text-[var(--text-secondary-dark)] italic">(e perigoso)</span>
                    </h2>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:grid md:grid-cols-2 gap-4 md:gap-8 border-t border-white/[0.05] pt-12 mt-12 pb-4 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1, margin: "-10%" }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group snap-start snap-always shrink-0 w-[85vw] md:w-auto border border-white/[0.05] p-6 md:p-8 transition-all duration-300 rounded-none cursor-default hover:bg-[#070707] hover:border-white/10"
                        >
                            <div className="mb-4">
                                <span className="text-[var(--accent-gold)] font-[var(--font-serif)] text-4xl md:text-5xl opacity-30 group-hover:opacity-100 transition-opacity">
                                    0{i + 1}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-2xl font-[var(--font-serif)] text-white mb-3">{problem.title}</h3>
                                <p className="text-sm md:text-base text-[#777] leading-relaxed group-hover:text-[#aaa] transition-colors">
                                    {problem.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Espaçador Claro (Separador Visual entre as Seções) */}
            <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent"></div>
        </section>
    );
}
