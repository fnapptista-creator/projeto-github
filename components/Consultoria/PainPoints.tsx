'use client';

import { motion } from 'framer-motion';

const problems = [
    {
        id: "01",
        title: "Lucro Invisível",
        desc: "Você trabalha 14 horas por dia, o salão está cheio, mas no fim do mês o caixa não bate. O dinheiro some antes de chegar em você. Geralmente tem nome: CMV fora de controle e zero ficha técnica.",
        signal: "CMV descontrolado"
    },
    {
        id: "02",
        title: "Refém da Operação",
        desc: "Tirou um dia de folga e a cozinha virou caos? Você não tem um negócio, você tem um emprego sem carteira assinada. E o patrão te cobra 24 horas por dia.",
        signal: "Operação sem processo"
    },
    {
        id: "03",
        title: "Equipe sem Padrão",
        desc: "O cliente que voltou hoje pediu o mesmo prato da semana passada e não reconheceu. Alta rotatividade, treino informal e nenhum padrão de preparo: o amadorismo no salão custa mais do que parece.",
        signal: "Sem cultura de serviço"
    },
    {
        id: "04",
        title: "Desperdício Oculto",
        desc: "Cada quilo jogado fora, cada receita feita no olho, cada preparo errado é o seu lucro indo direto pro lixo. Sem ficha técnica, você nem sabe o quanto está perdendo.",
        signal: "Custo real desconhecido"
    }
];

export default function PainPoints() {
    return (
        <section className="py-9 bg-[#090909] relative overflow-hidden">

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
                        Realidade do Mercado
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-serif)] text-white tracking-tighter leading-tight">
                        O cenário comum{' '}
                        <span className="text-transparent italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}>
                            (e perigoso)
                        </span>
                    </h2>
                </motion.div>

                {/* Cards - Desktop (Grid) & Mobile (Scroll Horizontal) */}
                <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-2 md:gap-px scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 bg-transparent md:bg-white/[0.04]">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="group bg-[#090909] p-8 md:p-10 cursor-default hover:bg-[#0e0b09] transition-colors duration-500 relative overflow-hidden flex-shrink-0 w-[82vw] md:w-auto snap-center sm:snap-start snap-always border border-white/5 md:border-none"
                        >
                            {/* Linha de alerta no topo do card, aparece no hover */}
                            <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#a05030]/60 group-hover:w-full transition-all duration-700 ease-out" />

                            {/* Número */}
                            <span className="block font-[var(--font-serif)] text-5xl text-[var(--accent-gold)] opacity-15 group-hover:opacity-60 transition-opacity duration-500 leading-none mb-6 select-none">
                                {problem.id}
                            </span>

                            {/* Conteúdo */}
                            <h3 className="text-xl md:text-2xl font-[var(--font-serif)] text-white mb-3 group-hover:text-white/95 transition-colors">
                                {problem.title}
                            </h3>
                            <p className="text-sm font-sans text-[#666] group-hover:text-[#aaa] leading-relaxed transition-colors duration-400 mb-5">
                                {problem.desc}
                            </p>

                            {/* Signal badge da categoria do problema */}
                            <span className="inline-block text-[11px] font-mono tracking-[0.2em] uppercase text-[#a05030]/70 group-hover:text-[#a05030] transition-colors duration-300">
                                ● {problem.signal}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        </section>
    );
}
