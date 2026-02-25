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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            className="bg-[#111111]/80 backdrop-blur-md p-8 md:p-10 border border-white/[0.04] rounded-2xl shadow-xl transition-all duration-500 hover:border-[var(--accent-gold)]/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(197,160,89,0.06)] relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transform group-hover:scale-110 group-hover:text-[var(--accent-gold)] transition-all duration-500 opacity-80 relative z-10">{format.icon}</div>
                            <h3 className="text-2xl font-[var(--font-serif)] text-white mb-2 relative z-10">{format.title}</h3>
                            <h4 className="text-xs tracking-[0.2em] text-[var(--accent-gold)] font-sans uppercase mb-6 opacity-90 relative z-10">{format.subtitle}</h4>
                            <p className="text-[#999] leading-relaxed font-sans text-sm md:text-base relative z-10">
                                {format.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
