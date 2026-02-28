'use client';

import { motion } from 'framer-motion';
import { Brain, Map, Swords } from 'lucide-react';

const formats = [
    {
        title: "Mentoria",
        subtitle: "Aconselhamento e Direção",
        description: "Eu destravo a SUA visão como dono. São sessões estratégicas focadas em mudar a sua mentalidade de gestão, tomada de decisão e liderança. Você executa, mas não caminha mais sozinho.",
        icon: <Brain strokeWidth={1.5} className="w-10 h-10" />
    },
    {
        title: "Consultoria",
        subtitle: "Diagnóstico e Rota Clara",
        description: "Fazemos um 'Raio-X' completo da sua operação. Eu identifico todos os gargalos (CMV, equipe, processos), desenho a estratégia exata de solução e te entrego o Plano de Ação para sua equipe executar.",
        icon: <Map strokeWidth={1.5} className="w-10 h-10" />
    },
    {
        title: "Assessoria",
        subtitle: "A Mão na Massa",
        description: "Eu vou para a trincheira com você. Além da estratégia, eu auxilio na execução técnica no dia a dia, desde estruturar fichas técnicas até formatar o layout do salão e da cozinha.",
        icon: <Swords strokeWidth={1.5} className="w-10 h-10" />
    }
];

export default function WorkFormats() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-b border-white/[0.05]">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent-gold)] block mb-4">Níveis de Intervenção</span>
                    <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] text-white mb-6">
                        Você sabe do que o seu negócio precisa agora?
                    </h2>
                    <p className="text-[#888] font-sans text-base md:text-lg">
                        O mercado confunde esses três termos, mas cada momento da sua empresa exige um formato diferente de acompanhamento. Eu atuo nos três níveis, dependendo da sua necessidade:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {formats.map((format, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.1, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#050505] p-8 md:p-10 border border-white/5 hover:border-[var(--accent-gold)]/40 hover:bg-[#0a0a0a] rounded-lg transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center shadow-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="mb-6 text-[var(--accent-gold)] group-hover:scale-110 transition-transform duration-500 w-12 h-12 flex justify-center items-center">
                                {format.icon}
                            </div>

                            <h3 className="text-2xl font-[var(--font-serif)] text-white mb-2 relative z-10 group-hover:text-[var(--accent-gold)] transition-colors duration-300">{format.title}</h3>
                            <h4 className="text-[10px] tracking-[0.2em] text-[#888] font-sans uppercase mb-6 relative z-10">{format.subtitle}</h4>

                            <div className="flex-grow">
                                <p className="text-[#aaa] leading-relaxed font-sans text-sm relative z-10">
                                    {format.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
