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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0a0a0a] p-6 border border-white/5 hover:border-[var(--accent-gold)] transition-colors duration-300 group rounded-sm"
                        >
                            <div className="w-6 h-6 mb-4 rounded-full bg-white/5 group-hover:bg-[var(--accent-gold)] transition-colors flex items-center justify-center">
                                <span className="text-white/50 group-hover:text-black text-[10px] font-bold">!</span>
                            </div>
                            <h3 className="text-base font-medium text-white mb-3">{problem.title}</h3>
                            <p className="text-xs md:text-sm text-[#888] leading-relaxed group-hover:text-[#aaa] transition-colors">
                                {problem.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
